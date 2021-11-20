import { useEffect, useState } from "react";
import axios from "axios";

function Chinatown() {
    const [safeSpaces, setSafeSpaces] = useState([]);
    const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

    useEffect(() => {
        axios({
            url: baseURL,
            params: {
                lat: '43.6509',
                lng: '-79.3972'
            },
        }).then((response) => {
            console.log(response.data)
            setSafeSpaces(response.data);
        });
    }, []);

    return (
        <section>
            {safeSpaces.map((spaces) => {
                return(
                <section key={spaces.id}>   
                    <h3>{spaces.name}</h3>
                    {/* <p>{spaces.street}</p>
                    <p>{spaces.comment}</p> */}
                </section>   
                );
            })}

        </section>
    )
}

export default Chinatown; 