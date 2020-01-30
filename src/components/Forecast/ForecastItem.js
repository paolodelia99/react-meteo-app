import React, {useState,useEffect} from 'react';
import PropTypes from 'prop-types';

const ForecastItem = (
    {
        date,
        cityname,
        weatherId,
        temp_celsius,
        temp_max,
        temp_min,
        description
    }) => {
    const [weatherIcon, setWeatherIcon] = useState('');

    const setIcon = (weatherId) =>{
        switch (true) {
            case weatherId >= 200 && weatherId < 232:
                setWeatherIcon("wi-thunderstorm")
                break;
            case weatherId >= 300 && weatherId <= 321:
                setWeatherIcon("wi-sleet")
                break;
            case weatherId >= 500 && weatherId <= 521:
                setWeatherIcon("wi-storm-showers")
                break;
            case weatherId >= 600 && weatherId <= 622:
                setWeatherIcon("wi-snow")
                break;
            case weatherId >= 701 && weatherId <= 781:
                setWeatherIcon("wi-fog")
                break;
            case weatherId === 800:
                setWeatherIcon("wi-day-sunny")
                break;
            case weatherId >= 801 && weatherId <= 804:
                setWeatherIcon("wi-day-fog")
                break;
            default:
                setWeatherIcon("wi-day-fog")
        }
    };

    useEffect(()=>{
        setIcon(weatherId)
    },[weatherId]);

    return (
        <div className="text-white">
            <div className="row">
                <div className="col">
                    <h3>{calculateDate(date)}</h3>
                    <h5 className="py-4">
                        <i className={`wi ${weatherIcon} display-1`} />
                    </h5>
                </div>
            </div>
            <div className="row">
                    <div className="col p-5">
                        {/* Get Celsius */}
                        {temp_celsius ? (
                            <h2 className="py-2">{calCelsius(temp_celsius)}&deg;</h2>
                        ) : null}

                        {/* show max and min temp */}
                        {minMaxTemp(calCelsius(temp_min), calCelsius(temp_max))}

                        {/* Weather description */}
                        <h4 className="py-3">
                            {description.charAt(0).toUpperCase() +
                            description.slice(1)}
                        </h4>
                    </div>
            </div>
        </div>
    );
};

const calculateDate = (more) =>{
    let now = new Date();
    now.setDate(now.getDate()+more);

    let dd = now.getDate();
    let mm = now.getMonth()+1;

    if(mm<10)
        mm = "0"+mm;

    return dd+"/"+mm;
}

const calCelsius = (temp)=> {
    let cell = Math.floor(temp - 273.15);
    return cell;
}

const minMaxTemp = (min,max) => {
    if(min && max){
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
}

ForecastItem.propTypes = {
    date: PropTypes.number.isRequired,
    weatherId: PropTypes.number.isRequired,
    cityname: PropTypes.string.isRequired,
    temp_celsius: PropTypes.number.isRequired,
    temp_max: PropTypes.number.isRequired,
    temp_min: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
};

export default ForecastItem;
