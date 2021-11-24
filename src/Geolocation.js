import axios from "axios";
import { useState } from "react";
import NeighbourhoodCard from "./NeighbourhoodCard";

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
}

function Geolocation () {
    const [location, setLocation] = useState([]);
    
        if (navigator.geolocation) {
            navigator.permissions
                .query({ name: 'geolocation' })
                .then(function (result) {
        if (result.state === 'granted') {
            // console.log(result.state);
            navigator.geolocation.getCurrentPosition(success);
        } else if (result.state === 'prompt') {
            navigator.geolocation.getCurrentPosition(success, errors, options)
            // console.log(result.state);
        } else if (result.state === 'denied') {
        }
        result.onchange = function () {
            // console.log(result.state)
        };
        });

        } else {
            alert('sorry not available')
        };

function success(pos) {
    const crd = pos.coords;
    // console.log(`Your current position is:`);
    // console.log(`Latitude: ${crd.latitude}`);
    // console.log(`Longitude: ${crd.longitude}`)
    const userLat = crd.latitude;
    const userLng = crd.longitude;
    // console.log(`this is lat`, userLat);
    // console.log(`this is long`, userLng);

    const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

    // const userData = async () => {
    axios({
        url: baseURL,
        params: {
            per_page: 1,
            unisex: true,
            lat: userLat,
            lng: userLng
        }
    }).then((response) => {
        // console.log(response.data[0].name)
        setLocation(response.data)
    }).catch(error => console.error('Error fetching data:', error))
    // }
}

function errors(err) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
}

    return(
        <div>
            <h2>Your Closest Safe Space is:</h2>
            {location.map(shop => {
                return (
                    <NeighbourhoodCard
                    key={shop.id}
                    name={shop.name}
                    address={shop.street}
                    info={shop.comment}/>
                )
            })
            }
        </div>
    )
};

export default Geolocation;

    
