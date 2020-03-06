import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import Card from './components/card'
import App from './components/App'



class WeatherApp extends Component{

    state = {
        place: null,
        weather:[{id:0,main:"N/A",description:"N/A"}],
        main:{temp:0,feels_like:0,temp_min:0,temp_max:0,pressure:0,humidity:0},
        wind:{speed:0,deg:0},
        country:"N/A",
        coordinatesLive: {latitude:null,longitude:null},
        logo:""
        }
      
    
    onGeolocateSuccess=(coordinates)=> {
        
        let p2 = new Promise((resolve,reject)=>{
          const { latitude, longitude } = coordinates.coords;
          console.log('Found coordinates: ', latitude, longitude);
          setTimeout(()=>{fetch("https://fcc-weather-api.glitch.me/api/current?lat="+String(latitude)+"&lon="+String(longitude))
          .then(data => data.json())
          .then(data => this.setState({
                                      place: data.name,
                                      weather: data.weather,
                                      main: data.main,
                                      wind: data.wind,
                                      country:data.sys.country,
                                      coordinatesLive:{latitude:Math.round(latitude),longitude:Math.round(longitude)},
                                      logo:data.icon
                                  }))
          .catch(console.log(this.state))

          },1500)
          
            
        })
        p2.then(()=>{
          // const {latitude,longitude} = this.state.coordinatesLive
          console.log("Completed")
        })
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
    
        
    
    geolocate(){
        if (window.navigator && window.navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(this.onGeolocateSuccess, this.onGeolocateError);
            return this.onGeolocateSuccess
        }
      }

        // "sys":{"type":1,"id":7616,"message":0.0043,"country":"JP","sunrise":1499369792,"sunset":1499421666}
    
    componentDidMount(){

      let p1 = new Promise((resolve,reject)=>{
        this.geolocate()
        resolve();
      })


        // this.geolocate()     
        // const {latitude,longitude} = this.state.coordinatesLive
        // console.log("isthisworking",latitude,longitude)
        // console.log(latitude)
        // // console.log("https://fcc-weather-api.glitch.me/api/current?lat="+String(latitude)+"&lon="+String(longitude))
        // if(latitude != 0){

        // fetch("https://fcc-weather-api.glitch.me/api/current?lat="+String(latitude)+"&lon="+String(longitude))
        // .then(data => data.json())
        // .then(data => this.setState({
        //                             place: data.name,
        //                             weather: data.weather,
        //                             main: data.main,
        //                             wind: data.wind,
        //                             country:data.sys.country,
        //                             coordinatesLive:{latitude:latitude,longitude:longitude}
        //                         }))
        // .catch(console.log)
        // }
      
        
        
      
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
