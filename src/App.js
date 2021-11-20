// When the user enters the page, state items will hold neighbourhood names in Toronto 
// Each neighbourhood holds the required parameters (lat and long) use for the API endpoint
// Each state is attached to an event handler -OnClick, that calls a local method that fetches the 3rd party API data
// 6 components containing washroom locations are mounted to the DOM

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShopsDisplay from './ShopsDisplay';
import NeighbourhoodWCs from './NeighbourhoodWCs';

function App() {

  const [safeSpace, setSafeSpaces] = useState([]);

  // // Chinatown button
  // const [chinatown, setChinatown] = useState([]);

  // // Entertainment district button
  // const [entertainment, setEntertainment] = useEffect([]);

  // // Bellwoods button
  // const [bellwoods, setBellwoods] = useEffect([]);

  // //  Annex button
  // const [annex, setAnnex] = useEffect([]);

  // // Riverdale button
  // const [riverdale, setRiverdale] = useEffect([]);

  // // Parkdale button
  // const [parkdale, setParkdale] = useEffect([]);

   //  Event Handlers
  const handleClick = () => {
    console.log(`I was clicked`)
    setSafeSpaces(!safeSpace);


  }

  useEffect(() => {
    if (safeSpace) {

    }

  })
  const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

  useEffect(() => {
    axios({
      url: baseURL,
      params: {
        lat: '43.6509',
        lng: '-79.3972'
      },
    }).then((response) => {
      console.log(response.data)
      setSafeSpaces(response.data);
    });
  }, []);


  return (
    <>
      <header className="App wrapper">
          <h1>Safe Spaces Toronto</h1>
          <h2>A web application that seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals in the Toronto Area.</h2>
          <h2>Data provided by the Refuge Restrooms API.</h2>
      </header>

      <main>

        <aside>
          <h3>Where are you looking for relief?</h3>
          <p>Pick a neighbourhood to generate safe spaces to go:</p>
          <img src="" alt="" />
          <ShopsDisplay />
        </aside>

        <div className="buttonContainer">

          <button onClick={ handleClick } >Chinatown</button>
          <button onClick={ handleClick } >Entertainment District</button>
          <button onClick={ handleClick } >Trinity Bellwoods</button>
          <button onClick={ handleClick } >The Annex</button>
          <button onClick={ handleClick } >Riverdale</button>
          <button onClick={ handleClick } >High Park</button>
        </div>

      </main>
      {
        safeSpace.map(space => {
          return (
            <NeighbourhoodWCs
              key={space.id}
              name={space.name}
              address={space.street}
              info={space.comment}
            />  
          )
        })
      }


    </>
  )
}

export default App;
