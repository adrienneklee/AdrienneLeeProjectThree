import { useState } from "react";
import axios from "axios";
import NeighbourhoodWCs from './NeighbourhoodWCs';

const Parkdale = () => {
    const [shopDetails, setShopDetails] = useState([]);

    const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

    const parkdaleParams = { lat: '43.6465', lng: '-79.4637' };

    const button = () => {
        axios({
            url: baseURL,
            params: parkdaleParams,
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }


    return (
        <div>
            <button onClick={button}>Parkdale</button>

            <h3>{ }</h3>
            {shopDetails.map(shop => {
                return (
                    <NeighbourhoodWCs
                        key={shop.id}
                        name={shop.name}
                        address={shop.street}
                        info={shop.comment}
                    />
                )
            })

            }
        </div>
    )
}

export default Parkdale;