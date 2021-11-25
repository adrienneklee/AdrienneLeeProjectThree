// Component to display each Neighbourhood results
// Child to Geolocation and App.js

function NeighbourhoodCard(props) {

    return (
    <ul className="cardContainer">    
        <li><h3>{props.name}</h3></li>
        <li><p>{props.address}</p></li>
        <li><p className="info">{props.info}</p></li>     
    </ul>
    )
}

export default NeighbourhoodCard;