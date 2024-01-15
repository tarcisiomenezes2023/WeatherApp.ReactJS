import React from 'react'
import './WeatherApp.css'
import { useState, useEffect } from 'react';
import search_icon from '../Assets/search.png';
import cloud_icon from '../Assets/cloud.png';
import drizzie_icon from '../Assets/drizzie.png';
import humidity_icon from '../Assets/humidity.png';
import rain_icon from '../Assets/rain.png';
import clear_icon from '../Assets/clear.png';
import snow_icon from '../Assets/snow.png';
import wind_icon from '../Assets/wind.jpg';

const WeatherApp = () => {

    let api_key ="07df4f8622fa19d907ee2a3aaf8b1abf";

    const search = () => {
        const element = document.getElementsByClassName("cityInput")
        if (element[0].value ==="") {
            return 0;
        }
        let url = `https://api.openweathermap.org/data/2.5/weather?lat=${element[0].value}44.34&lon=10.99&appid=${api_key}`;

        let response =  fetch(url);
        let data = response.json();
        const humidity =document.getElementByClassName("humidity-percent");
        const wind =document.getElementByClassName("wind-rate");
        const temprature =document.getElementByClassName("weather-temp");
        const location =document.getElementByClassName("weather-location");

        humidity[0].innerHTML = data.main.humidity;
        wind[0].innerHTML = data.wind.speed;
        temprature[0].innerHTML = data.main.temp;
        location[0].innerHTML = data.name;
    }

  return (
    <div className='container'>
      <div className='top-bar'>
        <input type='text' className='cityInput' placeholder="search"></input>
        <img src={search_icon} alt='' className='searchIcon'></img>
      </div>
      <div className='weather-image'>
        <img src={cloud_icon} alt=''></img>
      </div>
      <div className='weather-temp'>24°c</div>
      <div className='weather-location'>London</div>
      <div className='data-container'>
        <div className='element'>
            <img src={humidity_icon} alt='' className='icon'></img>
            <div className='data'>
                <div className='humidity-percent'></div>
                <div className='text'>Himidity</div>
            </div>
        </div>
        <div className='element'>
            <img src={wind_icon} alt='' className='icon'></img>
            <div className='data'>
                <div className='wind-rate'>18 km/h</div>
                <div className='text'>Wind Speed</div>
            </div>
        </div>
      </div>
    </div>
    
  )
}

export default WeatherApp

