// When the user enters the page, state items will hold neighbourhood names in Toronto 
// Each neighbourhood holds the required paraments (lat and long) use for the API endpoint
// Each state is attached to an event handler -OnClick, that calls a local method that fetches the 3rd party API data
// 6 components containing washroom locations are mounted to the DOM

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  // Chinatown Call
  const [safeSpaces, setSafeSpaces ] = useState([]);
  useEffect(() => {
    axios({
      url: 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=6&offset=0&lat=43.6509&lng=-79.3972',
      method: 'GET',
      dataResponse: 'json',
    }).then((response) => {
      console.log(response);
      setSafeSpaces(response.data);
    });
  }, []);


  return (
    <div className="App">
      <h1>Safe Spaces Toronto</h1>
      <h2>A web application that seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals in the Toronto Area.</h2>
      <h2>Data provided by the Refuge Restrooms API.</h2>

      {safeSpaces.map((space)=> {
        return (
          <h3>{space.name}</h3>
        )
      })};
    </div>

  
    
  
  )
}

export default App;
