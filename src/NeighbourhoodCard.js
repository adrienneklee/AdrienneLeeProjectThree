function NeighbourhoodCard(props) {
    return (
    <div>    
        <h3>{props.name}</h3>
        <p>{props.address}</p>
        <p>{props.info}</p>
        
    </div>
    )
}

export default NeighbourhoodCard;