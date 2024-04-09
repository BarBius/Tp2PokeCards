import React, { useEffect, useState } from "react";
import "./PokeGeneration.css"; 

const PokeGeneration = ({ generation }) => {
    const [pokemonList, setPokemonList] = useState([]);

    useEffect(() => {
        fetch(`https://pokebuildapi.fr/api/v1/pokemon/generation/${generation}`)
            .then(response => response.json())
            .then(data => setPokemonList(data))
            .catch(error => console.log("Error fetching", error));
    }, [generation]);

    return (
        <div>
            <h2>Generation {generation}</h2>
            <div className="pokemon-card-container">
                {pokemonList.slice(0, 10).map((pokemon, index) => (
                    <div className="pokemon-card" key={index}>
                        <img className="pokemon-image" src={pokemon.image} alt={pokemon.name} />
                        <p className="pokemon-name">Name: {pokemon.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PokeGeneration;
