import React from 'react';
import PropTypes from 'prop-types'
import ForecastItem from "./ForecastItem";
import { v4 } from 'node-uuid';
import Carousel from "react-responsive-carousel";

const ForecastsCarousel = ({forecastList, cityname}) => {

    let foreCastItemList;
    if(forecastList !== undefined)
        foreCastItemList = forecastList.map(item => (
            <div key={v4()}>
                <ForecastItem
                    cityname={cityname}
                    weatherId={item.weather[0].id}
                    temp_celsius={item.main.temp}
                    temp_max={item.main.temp_max}
                    temp_min={item.main.temp_min}
                    description={item.weather[0].description}
                />
            </div>
        ));
    else
        foreCastItemList = null;

    console.log(foreCastItemList)

    return forecastList !== undefined && cityname !== undefined ? (
        <div>
            <h2 className="text-white py-3">Forecast for the next 6 days</h2>
            <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    {foreCastItemList}
                </div>
                <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    ): null;
};

ForecastsCarousel.propTypes = {
    forecastList: PropTypes.array,
    cityname: PropTypes.string
};

export default ForecastsCarousel;
