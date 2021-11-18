import { useEffect, useState } from 'react';
import axios from 'axios';

function Chinatown() {
    const [chinatownSpaces, setChinatownSpaces] = useState([]);
    
    useEffect(() => {
        axios({
            url: 'https://www.refugerestrooms.org/api/v1/restrooms/by_location?page=1&per_page=10&offset=0&lat=43.6509&lng=-79.3972',
            method: 'GET',
            dataResponse: 'json',
        }).then((response) => {
            console.log(response);
            setChinatownSpaces(response.data);
        });
    }, []);
    return
    (
        chinatownSpaces.map((space) => {
            return (
                <div>
                    <h3>{space.name}</h3>
                    <p>{space.street}</p>
                    <p>{space.comment}</p>
                </div>
            )

        })
    )
}

export default Chinatown;