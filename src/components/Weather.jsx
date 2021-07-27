import React, { useState } from 'react'
import Forecast from './Forecast';
import axios from 'axios';
import "../styles/style.css";
import { toast } from 'react-toastify';

// console.log(process.env);
const Weather = () => {
    const [weather, setWeather] = useState({
        city:"",
        country:"",
    })
    
    const [forecast, setForecast] = useState([]);
    
    const handleChange = e => {
        setWeather({ ...weather, [e.target.name]: e.target.value });
    };
    // console.log(weather);
    const {city,country} = weather;
    
    const handleSubmit = async e => {
        e.preventDefault();
        const URL = `${process.env.REACT_APP_API_URL}?q=${weather.city},${weather.country}&appid=${process.env.REACT_APP_API_KEY}`;
    try {
        if (weather.city == "") {
            toast.info("Please Enter values");
        }else{
            const data = await fetch(URL)
            .then((apiData) => {
                // console.log(apiData);
                return apiData.json();
            })
            .then((data) => (data))
            setForecast(
                {
                    data : data
                }
            );
            // console.log(data);
            // const data = await axios(URL)
            // setForecast({data:data});
        }
    } catch (err) {
        toast.error(err);
    }
}

    return (
        <div className="container">
            <img id="img-1" src="./img1.jpg" alt="img" height="50%" />
            <h1>weather app</h1>
            <div className="content">
            <form onSubmit={handleSubmit} className="con-content" >
                {/* <h2>Enter your City Name to get the Weather Forecast</h2><br /> */}
                <input type="text" name="city" placeholder="Enter Your City" value={ city } onChange={handleChange} />
                {/* <input type="text" name="country" placeholder="Enter Your Country" value={ country } onChange={handleChange} /> */}
                <button className="getWeather">Submit</button>
            </form>
            </div>
            <div className="add-info">
                   <p><a target="_blank" href="https://vigneshmr06.000webhostapp.com/">Vignesh M R @2021</a></p>
                </div>
            {
                forecast.data !=undefined  ? <div><Forecast data={forecast.data} /></div> : null //conditional rendering , passing forecast.data as props
            }
        </div>
    )
}

export default Weather
