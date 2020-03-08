import React, {Component} from 'react';
import { connect } from 'react-redux';
import {removeCity} from '../actions/favourites'
import PropTypes from 'prop-types'
import Weather from "./Weather";
import Octicon, {X} from "@primer/octicons-react";
import defaultJSON from '../config/default';

const API_KEY = defaultJSON.API_KEY;

/*fixme:
*  rendilo uno stateless component */
class FavouritePage extends Component {
    state = {
        currentCity: '',
        currentCountry:'',
        currentWeatherIcon: '',
        currentTemp_celsius: '',
        currentTemp_max: '',
        currentTemp_min: '',
        currentDescription: '',
        currentPressure: null,
        currentHumidity: null,
        currentWindSpeed: null,
        currentWindDegree: null,
        currentSunriseTime: null,
        currentSunsetTime: null,
        error: false
    };

    //fixme: make a component that return the icon
    weatherIcon = {
        Thunderstorm: "wi-thunderstorm",
        Drizzle: "wi-sleet",
        Rain: "wi-storm-showers",
        Snow: "wi-snow",
        Atmosphere: "wi-fog",
        Clear: "wi-day-sunny",
        Clouds: "wi-day-fog"
    };

    get_WeatherIcon(icons, rangeId){
        switch (true) {
            case rangeId >= 200 && rangeId < 232:
                this.setState({ currentWeatherIcon: icons.Thunderstorm });
                break;
            case rangeId >= 300 && rangeId <= 321:
                this.setState({ currentWeatherIcon: icons.Drizzle });
                break;
            case rangeId >= 500 && rangeId <= 521:
                this.setState({ currentWeatherIcon: icons.Rain });
                break;
            case rangeId >= 600 && rangeId <= 622:
                this.setState({ currentWeatherIcon: icons.Snow });
                break;
            case rangeId >= 701 && rangeId <= 781:
                this.setState({ currentWeatherIcon: icons.Atmosphere });
                break;
            case rangeId === 800:
                this.setState({ currentWeatherIcon: icons.Clear });
                break;
            case rangeId >= 801 && rangeId <= 804:
                this.setState({ currentWeatherIcon: icons.Clouds });
                break;
            default:
                this.setState({ currentWeatherIcon: icons.Clouds });
        }
    }

    setCurrentCity = async (fav) =>{

        if (fav.country && fav.cityName) {
            const city = (fav.cityName.split(","))[0];
            const api_call = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city},${fav.country}&appid=${API_KEY}`
            );

            const response = await api_call.json();
            console.log(response)

            this.setState({
                currentCity: fav.cityName,
                currentCountry: fav.country,
                currentWeatherIcon: fav.weatherIcon,
                currentTemp_celsius: ""+this.calCelsius(response.main.temp),
                currentTemp_max: ""+this.calCelsius(response.main.temp_max),
                currentTemp_min: ""+this.calCelsius(response.main.temp_min),
                currentDescription: response.weather[0].description,
                currentPressure: response.main.pressure,
                currentHumidity: response.main.humidity,
                currentWindSpeed: response.wind.speed,
                currentWindDegree: response.wind.deg,
                currentSunriseTime: response.sys.sunrise,
                currentSunsetTime: response.sys.sunset,
                error: false
            })

            this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

        }else{
            this.setState({
                error: true
            })
        }

    };

    calCelsius = (temp) =>{
        let cell = Math.floor(temp - 273.15);
        return cell;
    }

    removeFav = (id,cityName) =>{
        if(cityName === this.state.currentCity)
            this.setState({
                currentCity: '',
                currentCountry:'',
                currentWeatherIcon: '',
                currentTemp_celsius: '',
                currentTemp_max: '',
                currentTemp_min: '',
                currentDescription: ''
            });

        this.props.removeCity(id)
    };

    render() {
        const {favourites} = this.props.favourites;
        console.log(favourites);
        const favouritesList = favourites.map(fav => (
            <li
                key={fav.id}
                className="list-group-item bg-transparent"
                onClick={ e => this.setCurrentCity(fav)}
            >
                <p className="fav-cityname-p">{fav.cityName}</p>
                <button className="btn delelte-fav-btn pull-right" onClick={e => this.removeFav(fav.id,fav.cityName)}>
                    <Octicon icon={X} size='small' className="delete-fav-icon"/>
                </button>

            </li>
            ));

        return (
            <div className="row">
                <div className="col-md-6 col-sm-12">
                    <div>
                        <div className="text-light">
                            <h3 className="text-white py-3">Your favorites</h3>
                            {favourites ?
                                <ul className="list-group list-group-flush">{favouritesList}</ul>
                                : (<h3>Not favourites yet</h3>)}
                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-sm-12">
                    {this.state.error ? (
                        <div className="alert alert-danger" role="alert">
                            Error
                        </div>
                    ): null}
                    <Weather
                        isSearchPage={true}
                        cityname={this.state.currentCity}
                        weatherIcon={this.state.currentWeatherIcon}
                        temp_celsius={this.state.currentTemp_celsius}
                        temp_max={this.state.currentTemp_max}
                        temp_min={this.state.currentTemp_min}
                        description={this.state.currentDescription}
                        pressure={this.state.currentPressure}
                        humidity={this.state.currentHumidity}
                        windSpeed={this.state.currentWindSpeed}
                        windDegree={this.state.currentWindDegree}
                        sunrise={this.state.currentSunriseTime}
                        sunset={this.state.currentSunsetTime}
                    />
                </div>
            </div>
        );
    }
}

FavouritePage.propTypes = {
    removeCity: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
    favourites: state.favourites
});

export default connect(mapStateToProps,{removeCity})(FavouritePage);
