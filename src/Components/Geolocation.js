// Geolocation function includes STATE that updates as the user grants permission
// if-else statement asks permission from the user if location can be accessed
// useEffect is used to ensure permission call is only requested once
// If permission is granted, Success function is run
// User's Latitude and Longitude are saved in variables
// User coordinates are used as params for API call
// Return passes props to NeighbourhoodCard 
// Geolocation is rendered to App.js 

import axios from "axios";
import { useEffect, useState } from "react";
import NeighbourhoodCard from "./NeighbourhoodCard";

const options = {
    enableHighAccuracy: true,
    timeout: 5000,
}

function Geolocation () {
    const [location, setLocation] = useState([]);
    useEffect(()=> {
        if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(success, errors, options)
        console.log(`success message:`, success)

        } else {
            alert('Sorry this function is not available without your location.  Please select a neighbourhood for Safe Spaces.')
        };
    }, []);

    function success(pos) {
        const crd = pos.coords;

        const userLat = crd.latitude;
        const userLng = crd.longitude;
        
        const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

        axios({
            url: baseURL,
            params: {
                per_page: 1,
                unisex: true,
                lat: userLat,
                lng: userLng
            }
        }).then((response) => {
            setLocation(response.data)
        }).catch(error => console.error('Error fetching data:', error))

    }

    function errors(err) {
        console.warn(`ERROR(${err.code}): ${err.message}`);
    }

    return(
        <div className="userContainer">
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
