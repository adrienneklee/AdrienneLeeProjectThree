// List Shops Display

// - useEffect to prompt axios call on page load
// - parameters entered to set lat and long of neighbourhoods
// - chain .then to pass relevant information from JSON object
//      - register info as shopDetails using setState
//          - [shopDetails setShopDetails]
// - chain .catch to handle errors
// -dependency array

import { useState, useEffect } from "react";
import axios from "axios";

const ShopsDisplay = () => {
    const [shopDetails, setShopDetails] = useState([]);
    const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

    // Axios call to get shop details in Chinatown
    useEffect(() => {
        axios({
            url: baseURL,
            params: {
                lat: '43.6509',
                lng: '-79.3972'
            },
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }, []);
    // Axios call to get shop details in Entertainment District
    useEffect(() => {
        axios({
            url: baseURL,
            params: {
                lat: '43.6466',
                lng: '-79.3905'
            },
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }, []);

    // Axios call to get shop details for Trinity Bellwoods
    useEffect(() => {
        axios({
            url: baseURL,
            params: {
                lat: '43.6501',
                lng: '-79.4171'
            },
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }, []);

    // Axios call to get shop details for The Annex
    useEffect(() => {
    axios({
        url: baseURL,
        params: {
            lat: '43.6707',
            lng: '-79.3930'
        },
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }, []);

    // Axios call to get shop details for Riverdale
    useEffect(() => {
        axios({
            url: baseURL,
            params: {
                lat: '43.6790',
                lng: '-79.3449'
            },
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }, []);

    // Axios call to get shop details for Parkdale/ High Park
    useEffect(() => {
        axios({
            url: baseURL,
            params: {
                lat: '43.6465',
                lng: '-79.4637'
            },
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }, []);


    return (
        <div>
            <h3>{}</h3>
        </div>

    )




};

export default ShopsDisplay;