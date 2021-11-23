import firebase from './firebase';
import { useState, useEffect } from 'react';

function FavSpaces() {
    const [favourites, setFavourites] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const dbRef = firebase.database().ref();
        dbRef.push(userInput);
        setUserInput('');
    }

    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const newState = [];
            const data = response.val();

            for (let property in data) {
            // console.log(data[property])
            newState.push({
                favSpace: data[property],
                spaceID: property,

            })
            }

            setFavourites(newState);

        })
    }, [])

    const removeSpace = (removeWC) => {
        const dbRef = firebase.database().ref();
        dbRef.child(removeWC).remove();    }
    
    return(
    <section className="favSpacesContainer">
        <h2>Save A Personal List of Safe Spaces:</h2>
        <form onSubmit={handleSubmit}>
            <label htmlFor="favSpace" className="sr-only">Add your favourite Safe Space:</label>
            <input
                type="text"
                id="favSpace"
                placeholder="Add business name here"
                onChange={handleChange}
                value={userInput}
            />

            <button className="specialButton">Add Space</button>
        </form>
        <ul>
            {
                favourites.map((favourite) => {
                    return (
                    <li key={favourite.spaceID}>
                        <p>{favourite.favSpace}</p>
                        {/* <p>{favourite.spaceName}</p>
                        <p>{favourite.spacePlace}</p>
                        <p>{favourite.spaceDes}</p> */}
                        <button onClick={ () => removeSpace(favourite.spaceID)}className="specialButton">Remove Space</button>
                    </li>
                    )
                })
            }
        </ul>


    </section>
    )
}

export default FavSpaces;
