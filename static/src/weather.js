import React, { Component } from 'react';

require('./weather.css');

class DisplayTemp extends Component{
render(){
    var {Temp, Name, Description, Wind, Humidity, weather} = this.props;
    if(Temp==='Loading'){
      return <div className='loading'>Loading Your Local Weather...</div>
    }
    else {
      return(
        <div className='display-weather'>
        <div class="container">
          <h2>
            <i class="location"> {Name} </i>
            <br></br>
            <i class="temperature">{Temp} &#176;F</i>
            <br></br>
            <i class="location">{weather}</i>
            
            <br></br>
            <i class="humidity">{Humidity}% Humidity</i>
            <br></br>
            <i class="humidity">Wind Speed: {Wind} mph</i>

            
          </h2>
        </div>
        </div>
      )
    }
}
}
export default DisplayTemp;