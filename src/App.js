import './App.css';
import neighbourhoods from "./neighbourhoods";
import { useState } from "react";
import GetWCs from "./GetWCs";
import NeighbourhoodCard from "./NeighbourhoodCard";
import FavSpaces from './FavSpaces';
import Geolocation from './Geolocation';

function App() {

  const [data, setData] = useState([]);
  const update = data => setData(data)

 return (
  <>  
  <header className="wrapper">
  <h1>Safe Spaces Toronto</h1>
  <h2>A web application that seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals in the Toronto Area.</h2>
  <h2>Data provided by the Refuge Restrooms API.</h2>
  
  </header>

  <main className="wrapper">
    <div className="flexContainer">
      <aside>
        <h3>Where are you looking for relief?</h3>
        <p>Pick a neighbourhood to generate a list of washrooms designated as safe spaces to go:</p>
        <img src="/assets/divas.svg" alt="A drawing of three people chatting." />
      </aside>
      
      <div className="buttonContainer">
        {neighbourhoods.map(neighbourhood => (
          <GetWCs
            key={neighbourhood.id}
            name={neighbourhood.name}
            lat={neighbourhood.lat}
            lng={neighbourhood.lng}
            update={update}
          />
        ))}
      </div>
    </div>
    <section className="listContainer">
      {data.map(shop => {
        return (
          <NeighbourhoodCard
          key={shop.id}
          name={shop.name}
          address={shop.street}
          info={shop.comment}
          />
        )
      })
      }
    </section>

    <section>
      <FavSpaces />
      <Geolocation />
    </section>
  </main>

  <footer className="wrapper">
    <p>Created at Juno College of Technology</p>
  </footer>

  </>  
    )
}

export default App;
