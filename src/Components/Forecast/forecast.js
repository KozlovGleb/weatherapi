import React, { useState } from 'react';
import Conditions from './Conditions/conditions';
const Forecast = () => {
    let [responseObj, setResponseObj] = useState({});
    function getForecast(){
        fetch("https://community-open-weather-map.p.rapidapi.com/weather?q=seattle", {
            "method": "GET",
            "headers": {
                "x-rapidapi-key": "65c106723cmshe91fff065bf2259p13e7b1jsn2a4ea3aef624",
                "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com"
            }
        })
        .then(response => response.json())
       .then(response => {
           setResponseObj(response)
       })
        .catch(err => {
            console.error(err);
        });
    }
    return (
<div>
           <h2>Find Current Weather Conditions</h2>
           <div>
               {JSON.stringify(responseObj)}
           </div>
           <button onClick={getForecast}>Get Forecast</button>
           <Conditions
               responseObj={responseObj}
               />
       </div>
    )
}
export default Forecast;