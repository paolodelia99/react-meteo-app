import React, {Fragment} from 'react';
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

    return (
        <div className="container text-light">
            <div className="Card">
                {cityname ? (<h1 className="text-white text-center">Today</h1>): null}
                <br/>
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
                {(!isSearchPage && cityname) ? (
                    <div className="details-container">
                        <p>
                            <button className="btn btn-primary" type="button" data-toggle="collapse"
                                    data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                                Details
                            </button>
                        </p>
                        <div className="collapse" id="collapseExample">
                             <div >
                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
                                    richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson
                                    cred nesciunt sapiente ea proident.
                             </div>
                        </div>
                    </div>
                ) : null}
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

function returnSunHour(){

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
    isSearchPage:PropTypes.bool.isRequired,
    pressure: PropTypes.number,
    humidity: PropTypes.number,
    windSpeed: PropTypes.number,
    windDegree: PropTypes.number,
    sunrise: PropTypes.number,
    sunset: PropTypes.number,
};

export default connect(null,{addCity})(Weather);
