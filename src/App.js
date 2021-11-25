import './App.css';
import neighbourhoods from "./neighbourhoods";
import { useState } from "react";
import GetWCs from "./Components/GetWCs";
import NeighbourhoodCard from "./Components/NeighbourhoodCard";
import FavSpaces from './Components/FavSpaces';
import Geolocation from './Components/Geolocation';

function App() {

  const [data, setData] = useState([]);
  const update = data => setData(data)

  return (
  <>  
  <header className="wrapper">

    <img src="/assets/sitting.svg" alt="A drawing of a person sitting." className="headerPic"/>
    <h1>Safe Spaces</h1>

    <h2>A web application that seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals in the Toronto Area.</h2>

    <h3>Data provided by the Refuge Restrooms API.</h3>

  </header>

  <main className="wrapper">

    <section className="flexContainer">

      <aside>
        <h3>Where are you looking for relief?</h3>
        <p>Allow Safe Spaces to access your location to find a safe restroom near you, or pick a neighbourhood to generate a list of restrooms in that area:</p>
        <img src="/assets/pregnant.svg" alt="A drawing of a pregnant person sprinting." />
      </aside>

      <Geolocation />

    </section>

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

    <section className="favContainer">
      <img src="/assets/divas.svg" alt="A drawing of three people chatting." className="favPic"/>
      
      <FavSpaces />
    </section>

  </main>

  <footer className="wrapper">
    <p>Created at Juno College of Technology</p>
  </footer>

  </>  
  )
}

export default App;
