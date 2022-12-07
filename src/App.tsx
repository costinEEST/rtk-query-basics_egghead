import { useState } from "react";
import { PokemonDetails } from "./PokemonDetails";
import { PokemonList } from "./PokemonList";

export function App() {
  const [pokemon, setPokemon] = useState<string>("bulbasaur");

  return (
    <div className="">
      <header>
        <h1>My PokeDex</h1>
      </header>
      <main>
        {pokemon ? (
          <>
            <PokemonDetails name={pokemon} />
            <button onClick={() => setPokemon("")}>back</button>
          </>
        ) : (
          <PokemonList onPokemonSelected={() => {}} />
        )}
      </main>
    </div>
  );
}
