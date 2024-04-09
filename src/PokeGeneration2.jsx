import { useEffect, useState } from "react";

const PokeGeneration2 = () => {
const [gen2,setGen2] = useState([])

useEffect(() => {
    fetch("https://pokebuildapi.fr/api/v1/pokemon/generation/2")
    .then(response => response.json())
    .then(data => setGen2(data))
    .catch(error => console.log("Error fetching Gen2",error))
},[])

return (
<div>
<h2>Generation 2</h2>
<ul>
{gen2.slice(0, 10).map((pokemon, index) => (
        <li key={index}>
            <img src={pokemon.image} alt={pokemon.name} />
            <p>Name: {pokemon.name}</p>
        </li>
    ))}
</ul>
</div>
);
};

export default PokeGeneration2;