// * Hardcoded array of object Name, Lat, Long 
    // * const neighbourhoods = [{ name: "", lat: "", long: ""}]
// * map through 'neighbourhoods' array
// * and for each item render a Neighbourhoods component and pass neighbourhood info as a prop


import NeighbourhoodData from "./NeighbourhoodData";
import NeighbourhoodCard from "./NeighbourhoodCard";



function App() {

  return (
    <>
    <header>
    <h1>Safe Spaces Toronto</h1>
    {/* <MainPage/> */}
     <NeighbourhoodData/> 
    </header>
    
    <NeighbourhoodCard/>
    </>
  )


}

export default App;
