import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Card from './components/card'
import App from './components/App'



class WeatherApp extends Component{

    state = {
        coord: { lat: 0, lon: 0 },
        place: 'My City',
        weather:[{id:0,main:"N/A",description:"N/A"}],
        main:{temp:0,feels_like:0,temp_min:0,temp_max:0,pressure:0,humidity:0},
        wind:{speed:0,deg:0},
        country:"N/A",
        coordinatesLive: {latitude:0,longitude:0}
        }

    onGeolocateSuccess=(coordinates)=> {
        const { latitude, longitude } = coordinates.coords;
        // console.log("These are coords:: ",coordinates.coords)
        console.log('Found coordinates: ', latitude, longitude);
        this.setState({coordinatesLive: {latitude:latitude,longitude:longitude}})
      }

    onGeolocateError = (error) => {
        console.warn(error.code, error.message); 
        if (error.code === 1) {
          console.log("they said no")
        } else if (error.code === 2) {
          console.log("position unavailable")
        } else if (error.code === 3) {
          console.log("timeout")
        }
      }
    
        
    
    async geolocate(){
        if (window.navigator && window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.onGeolocateSuccess, this.onGeolocateError);
            // return this.onGeolocateSuccess
        }
      }
    
    
    
        // "sys":{"type":1,"id":7616,"message":0.0043,"country":"JP","sunrise":1499369792,"sunset":1499421666}
    componentDidMount=()=>{
        this.geolocate()
    }
 
    componentDidMount(){
        const {latitude,longitude} = this.state.coordinatesLive
        console.log("isthisworking",latitude,longitude)
        console.log(latitude)
        // console.log("https://fcc-weather-api.glitch.me/api/current?lat="+String(latitude)+"&lon="+String(longitude))
        fetch("https://fcc-weather-api.glitch.me/api/current?lat="+String(latitude)+"&lon="+String(longitude))
        .then(data => data.json())
        .then(data => this.setState({coord: data.coord,
                                    place: data.name,
                                    weather: data.weather,
                                    main: data.main,
                                    wind: data.wind,
                                    country:data.sys.country,
                                    coordinatesLive:{latitude:latitude,longitude:longitude}
                                }))
        .catch(console.log)
        // console.log("ComponentDidMount",this.state.apidata.length)
    }
    

    render(){
        return(
                <div>
                    <Card props={this.state}/>
                </div>
                )
        
        }
        

}

ReactDOM.render(<WeatherApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
