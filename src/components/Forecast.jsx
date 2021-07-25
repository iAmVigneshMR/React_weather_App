import React, { Fragment } from 'react'
import { toast } from 'react-toastify';
import "../styles/style2.css"

const Forecast = (props) => {
    // console.log("props",props);
    const { data } = props;
    // console.log(data);

const iconURL = `http://openweathermap.org/img/wn/${data.cod != 404 ? data.weather[0].icon : null}.png`;
// const iconURL = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;

return (
    <Fragment>
    <div className="container1"> 
    <div className="content2">
        {
        data.cod != 404 ? 
            <Fragment>
                <div className="con-container1"> 
                    <div className="block1">
                    <p>{data.name}, {data.sys.country} Weather </p>
                    As of <span>{new Date().toLocaleTimeString()}</span>
                    <p className="h1">{Math.round(data.main.temp - 273.15)} <sup>o</sup>
                    </p>
                    <p>{data.weather[0].description}</p>
                    </div>
                    
                    <div className="block2">
                    <img src={iconURL} alt="icon" height="101px" height="120px" /><br />
                    <span className="temp"><i class="fas fa-temperature-low"></i> {Math.round(data.main.temp_max - 273.15)}<sup>o</sup>/{Math.round(data.main.temp_min - 273.15)}<sup>o</sup> c</span>
                    </div>
                    
                    <div className="block3">
                        <h2>Additional info</h2>
                        <p>humidity : <span>{data.main.humidity} %</span></p>
                        <p>pressure : <span>{data.main.pressure} hPa</span></p>
                        <p>visibility : <span>{data.visibility / 1000} Km</span></p>
                        <p>wind : <span>{Math.floor((data.wind.speed * 18) / 5)} km/hr</span></p>
                        <p>wind direction : <span>
                      {data.wind.deg}
                      <sup>o</sup> deg
                    </span></p>
                    </div>

                </div>
            </Fragment>
          : 
       toast.error(data.message)
    }
    </div>
    </div>
    </Fragment>
)
}
export default Forecast
