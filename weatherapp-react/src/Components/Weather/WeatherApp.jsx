import React, { useState, useEffect } from 'react';
import './WeatherApp.css';
import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloud.png';
import humidity_icon from '../Assets/humidity.png';
import wind_icon from '../Assets/wind.jpg';

const WeatherApp = () => {
    const [weatherData, setWeatherData] = useState({
        humidity: '',
        windSpeed: '',
        temperature: '',
        location: ''
    });

    let api_key = "07df4f8622fa19d907ee2a3aaf8b1abf";

    const search = async () => {
        const element = document.getElementsByClassName("cityInput");
        if (element[0].value === "") {
            return 0;
        }
        
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${element[0].value}&appid=${api_key}`;
        let response = await fetch(url);

        if (response.ok) {
            let data = await response.json();

            setWeatherData({
                humidity: `Humidity: ${data.main.humidity}%`,
                windSpeed: `Wind Speed: ${data.wind.speed} km/h`,
                temperature: `${data.main.temp}°C`,
                location: `Location: ${data.name}`
            });
        } else {
           window.alert('Error fetching weather data');
        }
    };

    useEffect(() => {
      /* Fetch weather data iniatilly when the components mounts */
      search();

      const intervalId = setInterval(search, 900000);
      return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='container'>
            <div className='top-bar'>
                <input type='text' className='cityInput' placeholder="search"></input>
                <img src={search_icon} alt='' className='searchIcon' onClick={search}></img>
            </div>
            <div className='weather-image'>
                <img src={cloud_icon} alt=''></img>
            </div>
            <div className='weather-temp'>{weatherData.temperature}</div>
            <div className='weather-location'>{weatherData.location}</div>
            <div className='data-container'>
                <div className='element'>
                    <img src={humidity_icon} alt='' className='icon'></img>
                    <div className='data'>
                        <div className='humidity-percent'>{weatherData.humidity}</div>
                        <div className='text'>Humidity</div>
                    </div>
                </div>
                <div className='element'>
                    <img src={wind_icon} alt='' className='icon'></img>
                    <div className='data'>
                        <div className='wind-rate'>{weatherData.windSpeed}</div>
                        <div className='text'>Wind Speed</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherApp;


