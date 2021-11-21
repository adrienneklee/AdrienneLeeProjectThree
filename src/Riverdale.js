import { useState } from "react";
import axios from "axios";
import NeighbourhoodWCs from './NeighbourhoodWCs';

const Riverdale = () => {
    const [shopDetails, setShopDetails] = useState([]);

    const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

    const riverdaleParams = { lat: '43.6790', lng: '-79.3449' };

    const button = () => {
        axios({
            url: baseURL,
            params: riverdaleParams,
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }


    return (
        <div>
            <button onClick={button}>Riverdale</button>

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

export default Riverdale;