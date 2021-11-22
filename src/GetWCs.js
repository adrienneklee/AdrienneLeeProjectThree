import axios from "axios";
import NeighbourhoodCard from "./NeighbourhoodCard";

const baseURL = 'https://www.refugerestrooms.org/api/v1/restrooms/by_location';


const GetWCs = (props) => {
// const [shopDetails, setShopDetails] = useState([]);
const {name, lat, lng, update} = props

const getData = () => {
    axios({
        url: baseURL,
        params: {
            per_page: 9,
            unisex: true,
            lat: lat,
            lng: lng }
        
    }).then((response) => {
        // setShopDetails(response.data);
        update(response.data)
    });

}
return (
<>    
    <section>
        <button onClick={getData}>{name}</button>
    </section>

    {/* <section>
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
    </section> */}
</>
)

}

export default GetWCs;