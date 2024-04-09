import React, { useState } from 'react';

const PokemonSearch = () => {
const [pokemonName, setPokemonName] = useState('');
const [pokemonData, setPokemonData] = useState(null);
const [error, setError] = useState('');

const handleInputChange = event => {
setPokemonName(event.target.value);
};

const handleSubmit = async event => {
event.preventDefault();

try {
    const response = await fetch(`https://pokebuildapi.fr/api/v1/pokemon/${pokemonName}`);
    if (!response.ok) {
    throw new Error('Pokemon not found');
    }
    const data = await response.json();
    setPokemonData(data);
    setError('');
} catch (error) {
    setPokemonData(null);
    setError(error.message);
}
};

return (
<div>
    <form onSubmit={handleSubmit}>
    <input
        type="text"
        placeholder="Enter Pokemon name"
        value={pokemonName}
        onChange={handleInputChange}
    />
    <button type="submit">Search</button>
    </form>
    {pokemonData && (
    <div>
        <h2>{pokemonData.name}</h2>
        <img src={pokemonData.image} alt={pokemonData.name} />
        {pokemonData.stats && (
        <div>
            <p>HP: {pokemonData.stats.HP}</p>
            <p>Attack: {pokemonData.stats.attack}</p>
            <p>Defense: {pokemonData.stats.defense}</p>
            <p>Special Attack: {pokemonData.stats.special_attack}</p>
            <p>Special Defense: {pokemonData.stats.special_defense}</p>
            <p>Speed: {pokemonData.stats.speed}</p>
        </div>
        )}
    </div>
    )}
    {error && <p>{error}</p>}
</div>
);
};

export default PokemonSearch;
