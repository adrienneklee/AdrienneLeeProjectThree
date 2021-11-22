// * Hardcoded array of object Name, Lat, Long 
    // * const neighbourhoods = [{ name: "", lat: "", long: ""}]
// * map through 'neighbourhoods' array
// * and for each item render a Neighbourhoods component and pass neighbourhood info as a prop

import neighbourhoods from "./neighbourhoods";
// import NeighbourhoodData from "./NeighbourhoodData";
import { useState } from "react";
import GetWCs from "./GetWCs";
import NeighbourhoodCard from "./NeighbourhoodCard";




function App() {

  const [data, setData] = useState([]);
  const update = data => setData(data)
  console.log(update);

    return (
    <>  
    <header>
    <h1>Safe Spaces Toronto</h1>

    </header>

      <div>
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
    </>  
    )


}

export default App;
