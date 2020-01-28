import React, {Component} from 'react';
import Form from "./Form";
import Weather from "./Weather";
import ForecastsCarousel from "./ForecastsCarousel";

const API_KEY = "b6c401972b7a8c623e78936ba160fe1d\n";

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
            const api_call = await fetch(
                `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
            );

            const api_call_forecast = await fetch(
                `http://api.openweathermap.org/data/2.5/forecast?q=${city},${country}&appid=${API_KEY}`
            )

            const response = await api_call.json();

            const forecastResponse = await api_call_forecast.json();

            this.setState({
                city: `${response.name}, ${response.sys.country}`,
                country: response.sys.country,
                main: response.weather[0].main,
                celsius: ""+this.calCelsius(response.main.temp),
                temp_max: ""+this.calCelsius(response.main.temp_max),
                temp_min: ""+this.calCelsius(response.main.temp_min),
                description: response.weather[0].description,
                error: false,
                forecastList: forecastResponse.list.slice(0,6)
            });

            // seting icons
            this.get_WeatherIcon(this.weatherIcon, response.weather[0].id);

            console.log(response);
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
                <div className="row">
                    <div className="col-md-6 col-sm-12">
                        <Weather
                            cityname={this.state.city}
                            country={this.state.country}
                            weatherIcon={this.state.icon}
                            temp_celsius={this.state.celsius}
                            temp_max={this.state.temp_max}
                            temp_min={this.state.temp_min}
                            description={this.state.description}
                            isSearchPage={false}
                        />
                    </div>
                    <div className="col-md-6 col-sm-12">
                        {this.state.forecastList ? (<ForecastsCarousel
                            forecastList={this.state.forecastList}
                            cityname={this.state.city}
                        />) : null}
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchPage;
