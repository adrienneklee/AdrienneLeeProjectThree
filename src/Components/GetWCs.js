// Axios API call to Refuge Washroom API
// Required parameters (Latitude and Longitude) passed through props from Parent App.js and saved in reusable variable
// Event Handler updates data to call on App.js page to display results - pass state through function so rendered NeighbourhoodCards will mount below Buttons Container on MainPage (instead of below each Button)

import axios from 'axios';

const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

const GetWCs = (props) => {
const {name, lat, lng, update} = props

const getData = async () => {
    axios({
        url: baseURL,
        params: {
            per_page: 9,
            unisex: true,
            lat: lat,
            lng: lng
        }
    }).then((response) => {       
        update(response.data)
    }).catch(error => console.error('Error fetching data:', error))
}

return (
    <div>
        <button onClick={getData}>{name}</button>
    </div>
    )
}

export default GetWCs;