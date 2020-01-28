import React, {Component} from 'react';
import { connect } from 'react-redux';
import {removeCity} from '../actions/favourites'
import PropTypes from 'prop-types'
import Weather from "./Weather";
import Octicon, {X} from "@primer/octicons-react";

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
        currentDescription: ''
    };

    setCurrentCity = (fav) =>{
        this.setState({
            currentCity: fav.cityName,
            currentCountry: fav.country,
            currentWeatherIcon: fav.weatherIcon,
            currentTemp_celsius: fav.temp_celsius,
            currentTemp_max: fav.temp_max,
            currentTemp_min: fav.temp_min,
            currentDescription: fav.description
        })
    };

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
                    <Weather
                        isSearchPage={true}
                        cityname={this.state.currentCity}
                        weatherIcon={this.state.currentWeatherIcon}
                        temp_celsius={this.state.currentTemp_celsius}
                        temp_max={this.state.currentTemp_max}
                        temp_min={this.state.currentTemp_min}
                        description={this.state.currentDescription}
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
