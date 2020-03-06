import React from 'react';
import { render } from 'react-dom';

import '../css/styles.css'

var iconObject = {
	Thunderstorm : "http://openweathermap.org/img/wn/11n@2x.png",
	Drizzle : "http://openweathermap.org/img/wn/09d@2x.png",
	Snow : "http://openweathermap.org/img/wn/13d@2x.png",
	Clear : "http://openweathermap.org/img/wn/01d@2x.png",
	Clouds : "http://openweathermap.org/img/wn/04d@2x.png",
	Mist : "http://openweathermap.org/img/wn/50d@2x.png",
	Smoke : "http://openweathermap.org/img/wn/50d@2x.png",
	Haze : "http://openweathermap.org/img/wn/50d@2x.png",
	Dust : "http://openweathermap.org/img/wn/50d@2x.png",
	Fog : "http://openweathermap.org/img/wn/50d@2x.png",
	Sand : "http://openweathermap.org/img/wn/50d@2x.png",
	Ash : "http://openweathermap.org/img/wn/50d@2x.png",
	Squall : "http://openweathermap.org/img/wn/50d@2x.png",
	Tornado : "http://openweathermap.org/img/wn/50d@2x.png",
	Rain : "http://openweathermap.org/img/wn/09d@2x.png"
};


const Card = function(props){
    var currentIcon = iconObject[props.props.weather[0]['main']];

    return(
        <div>
            
               
            <div class="jumbotron text-center">
            <h1 class="page-header text-center">Weather Information</h1>
                <div className="lead m-3 text-dark">
                <div class="item-1">Latitude: {props.props.coordinatesLive.latitude}</div>
                <div class="item-2">Longitude: {props.props.coordinatesLive.longitude}</div>
                
                <div class="item-4">Weather: {props.props.weather[0]['main']}</div>
                <div class="item-5">Wind: {props.props.wind.speed} m/s</div>
                <div class="item-6">
                        <li>Temperature: {props.props.main.temp} °C </li>
                        <li>Feels Like: {props.props.main.feels_like} °C</li>
                        <li>Temperature Max: {props.props.main.temp_min} °C</li>
                        <li>Temperature Min: {props.props.main.temp_max}  °C</li>
                        <li>Humidity: {props.props.main.humidity} %</li>
                        <li>Pressure: {props.props.main.pressure} hpa</li>
                        <div class="item-3"><img src={currentIcon}></img></div>
                </div>
                </div>
                
    
        {/* <ul>
            <li>Longitude:{t['lon']}</li>
        </ul> */}
    </div>
    </div>
    )
}

export default Card;