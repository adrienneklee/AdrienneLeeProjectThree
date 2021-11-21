import { useState } from "react";
import axios from "axios";
import NeighbourhoodWCs from './NeighbourhoodWCs';

const Annex = () => {
    const [shopDetails, setShopDetails] = useState([]);

    const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

    const annexParams = { lat: '43.6707', lng: '-79.3930' };

    const button = () => {
        axios({
            url: baseURL,
            params: annexParams,
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }


    return (
        <div>
            <button onClick={button}>The Annex</button>

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

export default Annex;