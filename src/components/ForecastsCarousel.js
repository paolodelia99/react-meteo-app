import React from 'react';
import PropTypes from 'prop-types'
import ForecastItem from "./ForecastItem";
import { v4 } from 'node-uuid';
import Slider from "react-slick";

const ForecastsCarousel = ({forecastList, cityname}) => {

    let sliderSetting = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    }

    let foreCastItemList;
    if(forecastList !== undefined)
        foreCastItemList = forecastList.map((item,i) => (
            <div key={i}>
                <ForecastItem
                    date={i+1}
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
        <div className="text-center align-content-center">
            <h2 className="text-white py-3">Forecast for the next 6 days</h2>
            <div className="slider-container">
                <Slider {...sliderSetting}>
                    {foreCastItemList}
                </Slider>
            </div>
        </div>
    ): null;
};

ForecastsCarousel.propTypes = {
    forecastList: PropTypes.array,
    cityname: PropTypes.string
};

export default ForecastsCarousel;
