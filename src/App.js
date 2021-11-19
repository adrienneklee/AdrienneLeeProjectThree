// When the user enters the page, state items will hold neighbourhood names in Toronto 
// Each neighbourhood holds the required parameters (lat and long) use for the API endpoint
// Each state is attached to an event handler -OnClick, that calls a local method that fetches the 3rd party API data
// 6 components containing washroom locations are mounted to the DOM

// Endpoint (Chinatown):
// Endpoint (Entertainment District): https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=43.6466&lng=-79.3905
// Endpoint (Trinity Bellwoods): https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=43.6501&lng=-79.4171
// Endpoint (The Annex): https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&unisex=false&lat=43.6707&lng=-79.3930
// Endpoint (Riverdale): https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&unisex=false&lat=43.6707&lng=-79.3930

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';



function App() {
   // const url = new URL('https://www.refugerestrooms.org/api/v1/restrooms/by_location');
  const [safeSpaces, setSafeSpaces] = useState([]);

  useEffect(()=> {
    axios({
    url: 'https://www.refugerestrooms.org/api/v1/restrooms/by_location',
    params: {
        lat: '43.6509',
        lng: '-79.3972'
    },

  }).then((response)=>{
    console.log(response)
    setSafeSpaces(response.data);
    

  });
  
  }, []);

  return (
    <div className="App">
      <h1>Safe Spaces Toronto</h1>
      <h2>A web application that seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals in the Toronto Area.</h2>
      <h2>Data provided by the Refuge Restrooms API.</h2>

      {safeSpaces.map((space) => {
        return (
          <>
          <h3>{space.name}</h3>
          <h4>{space.street}</h4>
          {/* <p>{space.directions}</p> */}
          </>
        );
      })}



    </div>




  )
}


  // })

  // const [safeSpaces, setSafeSpaces] = useState([]);

  // CHINATOWN
  // useEffect(() => {
    // url.search = new URLSearchParams({
    //   lat: '43.6509',
    //   lng: '-79.3972'
    // });


    // fetch(url)
    //   .then((response) => {
    //     return response.json();
    //   })
    //   .then((data) => {
    //     return data.map((item) => {
    //       const name = item.name;
    //       const address = item.street;
    //       const description = item.directions

    //       console.log(name, address, description);
    //     })

    //   });

  // }, []);
 


export default App;
