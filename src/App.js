
import './App.css';
import PokeGeneration from './PokeGeneration1';
import PokemonSearch from './SearchPok';

function App() {
  return (
    <div className="App">
      <PokemonSearch/>
      <PokeGeneration generation={1} />
<PokeGeneration generation={2} />
<PokeGeneration generation={3} />
    </div>
  );
}

export default App;
