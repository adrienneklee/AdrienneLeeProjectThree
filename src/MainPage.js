import './App.css';
import { useState } from 'react';
import Chinatown from './Chinatown';
import Entertainment from './Entertainment';
import Bellwoods from './Bellwoods';
import Annex from './Annex';
import Riverdale from './Riverdale';
import Parkdale from './APIcall';
import NeighbourhoodWCs from './NeighbourhoodWCs';

const MainPage =() => {
    const [safeSpace, setSafeSpaces] = useState([]);
    return(
        <>
        <header className="App wrapper">
            <h1>Safe Spaces Toronto</h1>
            <h2>A web application that seeks to provide safe restroom access for transgender, intersex, and gender nonconforming individuals in the Toronto Area.</h2>
            <h2>Data provided by the Refuge Restrooms API.</h2>
        </header>
        <main>
            <aside>
                <h3>Where are you looking for relief?</h3>
                <p>Pick a neighbourhood to generate safe spaces to go:</p>
            </aside>
            <div className="buttonContainer">
                    <Chinatown />
                    <Entertainment />
                    <Bellwoods />
                    <Annex />
                    <Riverdale />
                    <Parkdale />
            </div>
        
            {/* <section>
        {
        safeSpace.map(space => {
            return (
                <NeighbourhoodWCs
                    key={space.id}
                    name={space.name}
                    address={space.street}
                    info={space.comment}
                />
            
                    )
                })
            }
            </section> */}
        </main>
        </>
    )
}

export default MainPage;