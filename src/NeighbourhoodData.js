import neighbourhoods from "./neighbourhoods";
import NeighbourhoodCard from "./NeighbourhoodCard";
import GetWCs from "./GetWCs";

function NeighbourhoodData() {

    return (
    <div>
        {neighbourhoods.map(neighbourhood => (
        <>    
            <NeighbourhoodCard 
            key={neighbourhood.id}
            name={neighbourhood.name}
            lat={neighbourhood.lat}
            lng={neighbourhood.lng}
            />
            
            <GetWCs
            key={neighbourhood.id}
            name={neighbourhood.name}
            lat={neighbourhood.lat}
            lng={neighbourhood.lng}
            />
        </>    
        ))}
    

    </div>
    )
    
}

export default NeighbourhoodData;