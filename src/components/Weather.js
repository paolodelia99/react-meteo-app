import React from 'react';

const Weather = props => {
    return (
        <div className="container text-light">
            <div className="Card">
                <h1 className="text-white py-3">{props.cityname}</h1>
                <h5 className="py-4">
                    <i className={`wi ${props.weatherIcon} display-1`} />
                </h5>

                {/* Get Celsius */}
                {props.temp_celsius ? (
                    <h1 className="py-2">{props.temp_celsius}&deg;</h1>
                ) : null}

                {/* show max and min temp */}
                {minMaxTemp(props.temp_min, props.temp_max)}

                {/* Weather description */}
                <h4 className="py-3">
                    {props.description.charAt(0).toUpperCase() +
                    props.description.slice(1)}
                </h4>
                <br/>
                {props.cityname ? (<button className="btn btn-warning" >Add to Favourites</button>):null}
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

export default Weather;
