import React from 'react';
import Card from '../Card/Card';
import data from '../../data/heroes.json';
import './App.css';

function App() {
    console.log(typeof data);
    return (
        <React.Fragment>
            <Card
                name={data[1].name}
                universe={data[1].universe}
                alterego={data[1].alterego}
                occupation={data[1].occupation}
                friends={data[1].friends}
                superpowers={data[1].superpowers}
                url={data[1].url}
                info={data[1].info}
            />
            ;
            {data.map((i) => {
                <Card
                    name={i.name}
                    universe={i.universe}
                    alterego={i.alterego}
                    occupation={i.occupation}
                    friends={i.friends}
                    superpowers={i.superpowers}
                    url={i.url}
                    info={i.info}
                />;
            })}
        </React.Fragment>
    );
}

export default App;
