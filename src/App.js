// When the user enters the page, state items will hold neighbourhood names in Toronto 
// Each neighbourhood holds the required parameters (lat and long) use for the API endpoint
// Each state is attached to an event handler -OnClick, that calls a local method that fetches the 3rd party API data
// 6 components containing washroom locations are mounted to the DOM

import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import ShopsDisplay from './ShopsDisplay';
import Chinatown from './Chinatown';


function App() {

  // const [safeSpaces, setSafeSpaces] = useState([]);
  const [safeSpace, setSafeSpaces] = useState([]);
  const [safeChinatown, setChinatown] = useState([]);
  const handleChinatown = () => {
    // when the button is clicked map and display shop array
    // setChinatown();
    // Chinatown();
    // <Chinatown />

  }

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
          </aside>

          <div className="buttonContainer">
            {/* <ShopsDisplay /> */}

            <button onClick={ handleChinatown } >Chinatown</button>
            <button>Entertainment District</button>
            <button>Trinity Bellwoods</button>
            <button>The Annex</button>
            <button>Riverdale</button>
            <button>High Park</button>
          </div>

      </main>
    </>

  )
}

export default App;
