import React from 'react';
import { render } from 'react-dom';

import '../css/styles.css'

const Card = function(props){
    console.log("props", props.props.coordinatesLive)
    
    return(
        <div>
            <h1 class="header">Weather Information</h1>
               
            <div class="container">
                <div class="item-1">Latitude: {props.props.coordinatesLive.latitude}</div>
                <div class="item-2">Longitude: {props.props.coordinatesLive.longitude}</div>
                <div class="item-3">Place: {props.props.place}, {props.props.country}</div>
                <div class="item-4">Weather: {props.props.weather[0]['main']}</div>
                <div class="item-5">Wind: {props.props.wind.speed}</div>
                <div class="item-6">
                        <li>Temperature: {props.props.main.temp} °C </li>
                        <li>Feels Like: {props.props.main.feels_like} °C</li>
                        <li>Temperature Max: {props.props.main.temp_min} °C</li>
                        <li>Temperature Min: {props.props.main.temp_max}  °C</li>
                        <li>Humidity: {props.props.main.humidity}</li>
                        <li>Pressure: {props.props.main.pressure}</li>
                </div>
    
        {/* <ul>
            <li>Longitude:{t['lon']}</li>
        </ul> */}
    </div>
    </div>
    )
}

export default Card;