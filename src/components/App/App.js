import React from 'react';
import Card from '../Card/Card';
import data from '../../data/heroes.json';
import './App.css';

function App() {
    return (
        <div className="box">
            {data.map((i) => (
                <Card
                    key={i.id}
                    name={i.name}
                    universe={i.universe}
                    alterego={i.alterego}
                    occupation={i.occupation}
                    friends={i.friends}
                    superpowers={i.superpowers}
                    url={i.url}
                    info={i.info}
                />
            ))}
        </div>
    );
}
export default App;
