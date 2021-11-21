import { useState } from "react";
import axios from "axios";
import NeighbourhoodWCs from './NeighbourhoodWCs';

const Entertainment = () => {
    const [shopDetails, setShopDetails] = useState([]);

    const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

    const entertainmentParams = { lat: '43.6466', lng: '-79.3905' };

    const button = () => {
        axios({
            url: baseURL,
            params: entertainmentParams,
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }


    return (
        <div>
            <button onClick={button}>Entertainment District</button>

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

export default Entertainment;