import { useState } from "react";
import axios from "axios";
import NeighbourhoodWCs from './NeighbourhoodWCs';

const Bellwoods = () => {
    const [shopDetails, setShopDetails] = useState([]);

    const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';

    const bellwoodsParams = { lat: '43.6501', lng: '-79.4171' };

    const button = () => {
        axios({
            url: baseURL,
            params: bellwoodsParams,
        }).then((response) => {
            console.log(response.data)
            setShopDetails(response.data);
        });
    }


    return (
        <div>
            <button onClick={button}>Trinity Bellwoods</button>

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

export default Bellwoods;