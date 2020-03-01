import React,{Component} from 'react';
import ReactDOM from 'react-dom';

import JSON from './weatherdata.json'
import Card from './components/card'
import App from './components/App'



class WeatherApp extends Component{

    state = {
        weatherdata : JSON, 
    }

    render(){
        return(
            <div>
                <App/>
                {/* <input></input> */}
                {/* <Card data={this.state.weatherdata}/> */}
            
            </div>
            )
    }

}



ReactDOM.render(<WeatherApp />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
