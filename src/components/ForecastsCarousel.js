import React from 'react';
import PropTypes from 'prop-types'
import ForecastItem from "./ForecastItem";
import { v4 } from 'node-uuid';
import HorizontalGallery from 'react-dynamic-carousel'

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
            <HorizontalGallery
                tiles={foreCastItemList}
                elementWidth={250}
                minPadding={30}
            />
        </div>
    ): null;
};

ForecastsCarousel.propTypes = {
    forecastList: PropTypes.array,
    cityname: PropTypes.string
};

export default ForecastsCarousel;
