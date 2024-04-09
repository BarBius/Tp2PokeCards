import React, { useEffect, useState } from "react";

const PokeGeneration3 = () => {
    const [gen3, setGen3] = useState([]);

    useEffect(() => {
        fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/3")
            .then(response => response.json())
            .then(data => setGen3(data))
            .catch(error => console.log("Error fetching Gen3", error));
    }, []);

    return (
        <div>
            <ul>
                {gen3.slice(0, 10).map((pokemon, index) => (
                    <li key={index}>
                        <h2>Generation 3</h2>
                        <img src={pokemon.image} alt={pokemon.name} />
                        <p>Name: {pokemon.name}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PokeGeneration3;
