import React from 'react';
import { connect } from 'react-redux';
import {addCity} from "../actions/favourites";
import PropTypes from 'prop-types'
import { v4 } from 'node-uuid'

const Weather = ({
                     addCity,
                     cityname,
                     country,
                     weatherIcon,
                     temp_celsius,
                     temp_max,
                     temp_min,
                     description,
                     isSearchPage
}) => {

    const addNewFavourites = ()=>{
         const newCity = {
                id: v4(),
                cityName:cityname,
                country: country,
                weatherIcon: weatherIcon,
                temp_celsius: temp_celsius,
                temp_max: temp_max,
                temp_min: temp_min,
                description: description
         };

         addCity(newCity);
    };

    console.log(cityname)

    return (
        <div className="container text-light">
            <div className="Card">
                <h1 className="text-white py-3">{cityname}</h1>
                <h5 className="py-4">
                    <i className={`wi ${weatherIcon} display-1`} />
                </h5>

                {/* Get Celsius */}
                {temp_celsius ? (
                    <h1 className="py-2">{temp_celsius}&deg;</h1>
                ) : null}

                {/* show max and min temp */}
                {minMaxTemp(temp_min, temp_max)}

                {/* Weather description */}
                <h4 className="py-3">
                    {description.charAt(0).toUpperCase() +
                    description.slice(1)}
                </h4>
                <br/>
                {(!isSearchPage && cityname) ? (<button className="btn btn-warning" onClick={addNewFavourites}>Add to Favourites</button>):null}
            </div>
        </div>
    );
};

function minMaxTemp(min,max) {
    if(min && max){
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}

Weather.propTypes = {
    addCity: PropTypes.func,
    cityname: PropTypes.string,
    country: PropTypes.string,
    weatherIcon: PropTypes.string,
    temp_celsius: PropTypes.string,
    temp_max: PropTypes.string,
    temp_min: PropTypes.string,
    description: PropTypes.string,
    isSearchPage:PropTypes.bool.isRequired
};

export default connect(null,{addCity})(Weather);
