import axios from "axios";
import { useState } from "react";
import NeighbourhoodCard from "./NeighbourhoodCard";

const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';


const GetWCs = (props) => {
const [shopDetails, setShopDetails] = useState([]);
const {name, lat, lng} = props
const neighbourhoodParams = {lat: lat, lng: lng}

const getData = () => {
    axios({
        url: baseURL,
        per_page: 6,
        unisex: true,
        params: neighbourhoodParams,
    }).then((response) => {
        console.log(response)
        setShopDetails(response.data);
    });

}
return (
<>    
    <section>
        <button onClick={getData}>{name}</button>
    </section>

    <section>
        {shopDetails.map(shop => {
            return (
                <NeighbourhoodCard
                    key={shop.id}
                    name={shop.name}
                    address={shop.street}
                    info={shop.comment}
                />

            )

        })

        }
    </section>
</>
)

}

export default GetWCs;