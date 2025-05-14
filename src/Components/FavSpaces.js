// src/Components/FavSpaces.js

import { database } from '../firebase/config';
import { ref, onValue, push, remove } from 'firebase/database';
import { useState, useEffect } from 'react';

function FavSpaces() {
    const [favourites, setFavourites] = useState([]);
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (userInput.trim() === '') return;

        const dbRef = ref(database, 'favourites');
        push(dbRef, userInput);
        setUserInput('');
    };

    useEffect(() => {
        const dbRef = ref(database, 'favourites');

        onValue(dbRef, (snapshot) => {
            const data = snapshot.val();
            const newState = [];

            for (let key in data) {
                newState.push({
                    favSpace: data[key],
                    spaceID: key
                });
            }

            setFavourites(newState);
        });
    }, []);

    const removeSpace = (removeWC) => {
        const dbRef = ref(database, `favourites/${removeWC}`);
        remove(dbRef);
    };

    return (
        <section className="favSpacesContainer">
            <h2>Save A Personal List of Safe Spaces to come back to:</h2>

            <form onSubmit={handleSubmit}>
                <label htmlFor="favSpace" className="sr-only">
                    Add your favourite Safe Space:
                </label>
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
                {favourites.map((favourite) => (
                    <li key={favourite.spaceID}>
                        <p>{favourite.favSpace}</p>
                        <button
                            onClick={() => removeSpace(favourite.spaceID)}
                            className="specialButton"
                        >
                            Remove Space
                        </button>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FavSpaces;
