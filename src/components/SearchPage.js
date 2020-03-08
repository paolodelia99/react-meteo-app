import React, {Component} from 'react';
import Form from "./Form";
import Weather from "./Weather";
import ForecastsCarousel from "./Forecast/ForecastsCarousel";
import defaultJSON from '../config/default';
import defaultRes from '../resources/defaultRes';
import _ from 'lodash'

const API_KEY = defaultJSON.API_KEY;

class SearchPage extends Component {
    constructor() {
        super();
        this.state = {
            city: undefined,
            country: undefined,
            icon: undefined,
            main: undefined,
            celsius: undefined,
            temp_max: null,
            temp_min: null,
            pressure: null,
            humidity: null,
            windSpeed: null,
            windDegree: null,
            sunrise: null,
            sunset: null,
            description: "",
            error: false,
            forecastList: undefined,
            isForecastingLoading: true
        };

        this.weatherIcon = {
            Thunderstorm: "wi-thunderstorm",
            Drizzle: "wi-sleet",
            Rain: "wi-storm-showers",
            Snow: "wi-snow",
            Atmosphere: "wi-fog",
            Clear: "wi-day-sunny",
            Clouds: "wi-day-fog"
        };
    }

    get_WeatherIcon(icons, rangeId) {
        switch (true) {
            case rangeId >= 200 && rangeId < 232:
                this.setState({ icon: icons.Thunderstorm });
                break;
            case rangeId >= 300 && rangeId <= 321:
                this.setState({ icon: icons.Drizzle });
                break;
            case rangeId >= 500 && rangeId <= 521:
                this.setState({ icon: icons.Rain });
                break;
            case rangeId >= 600 && rangeId <= 622:
                this.setState({ icon: icons.Snow });
                break;
            case rangeId >= 701 && rangeId <= 781:
                this.setState({ icon: icons.Atmosphere });
                break;
            case rangeId === 800:
                this.setState({ icon: icons.Clear });
                break;
            case rangeId >= 801 && rangeId <= 804:
                this.setState({ icon: icons.Clouds });
                break;
            default:
                this.setState({ icon: icons.Clouds });
        }
    }

    calCelsius(temp) {
        let cell = Math.floor(temp - 273.15);
        return cell;
    }

    getWeather = async e => {
        e.preventDefault();

        const country = e.target.elements.country.value;
        const city = e.target.elements.city.value;

        if (country && city) {
            try{
                let url;

                // eslint-disable-next-line no-restricted-globals
                if(location.protocol === 'http:')
                    url = `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;
                else
                    url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`;

                const api_call = await fetch(
                    url
                );

                let urlForecast;

                // eslint-disable-next-line no-restricted-globals
                if(location.protocol === 'http:')
                    urlForecast = `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`
                else
                    urlForecast = `https://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`

                const api_call_forecast = await fetch(
                    urlForecast
                );

                const response = await api_call.json();

                const forecastResponse = await api_call_forecast.json();

                this.setState({
                    city: `${_.get(response,'name','No name found')}, ${_.get(response,'sys.country','No Country Found')}`,
                    country: _.get(response,'sys.country','No country found'),
                    main: _.get(response,'weather[0].main',null),
                    celsius: ""+this.calCelsius(_.get(response,'main.temp',null)),
                    temp_max: ""+this.calCelsius(_.get(response,'main.temp_max',null)),
                    temp_min: ""+this.calCelsius(_.get(response,'main.temp_min',null)),
                    description: _.get(response,'weather[0].description','No descritpion'),
                    pressure: _.get(response,'main.pressure',null),
                    humidity: _.get(response,'main.humidity',null),
                    windSpeed: _.get(response,'wind.speed',null),
                    windDegree: _.get(response,'wind.deg',null),
                    sunrise: _.get(response,'sys.sunrise',null),
                    sunset: _.get(response,'sys.sunset',null),
                    error: false,
                    forecastList: forecastResponse.list.slice(0,6)
                });

                // seting icons
                this.get_WeatherIcon(this.weatherIcon, _.get(response,'weather[0].id',null));

                //console.log(response);
            }catch (err) {
                this.setState({
                    error: true
                })
            }
        } else {
            this.setState({
                error: true
            });
        }
    };

    render() {
        return (
            <div>
                <Form loadWeather={this.getWeather} error={this.state.error} />
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-6 col-sm-12 my-5">
                            <Weather
                                cityname={this.state.city}
                                country={this.state.country}
                                weatherIcon={this.state.icon}
                                temp_celsius={this.state.celsius}
                                temp_max={this.state.temp_max}
                                temp_min={this.state.temp_min}
                                description={this.state.description}
                                pressure={this.state.pressure}
                                humidity={this.state.humidity}
                                windSpeed={this.state.windSpeed}
                                windDegree={this.state.windDegree}
                                sunrise={this.state.sunrise}
                                sunset={this.state.sunset}
                                isSearchPage={false}
                            />
                        </div>
                        <div className="col-md-6 col-sm-12 my-5">
                            {this.state.forecastList ? (<ForecastsCarousel
                                forecastList={this.state.forecastList}
                                cityname={this.state.city}
                            />) : null}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;
