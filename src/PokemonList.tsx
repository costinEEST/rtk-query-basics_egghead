export function PokemonList({
  onPokemonSelected,
}: {
  onPokemonSelected: (x: string) => void;
}) {
  // https://pokeapi.co/api/v2/pokemon?limit=9
  const data = {
    count: 1154,
    next: "https://pokeapi.co/api/v2/pokemon?offset=9&limit=9",
    previous: null,
    results: [
      { name: "bulbasaur", url: "https://pokeapi.co/api/v2/pokemon/1/" },
      { name: "ivysaur", url: "https://pokeapi.co/api/v2/pokemon/2/" },
      { name: "venusaur", url: "https://pokeapi.co/api/v2/pokemon/3/" },
      { name: "charmander", url: "https://pokeapi.co/api/v2/pokemon/4/" },
      { name: "charmeleon", url: "https://pokeapi.co/api/v2/pokemon/5/" },
      { name: "charizard", url: "https://pokeapi.co/api/v2/pokemon/6/" },
      { name: "squirtle", url: "https://pokeapi.co/api/v2/pokemon/7/" },
      { name: "wartortle", url: "https://pokeapi.co/api/v2/pokemon/8/" },
      { name: "blastoise", url: "https://pokeapi.co/api/v2/pokemon/9/" },
    ],
  };

  return (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.results.map(({ name }) => (
          <li key={name}>
            <button onClick={() => onPokemonSelected(name)}>{name}</button>
          </li>
        ))}
      </ol>
    </article>
  );
}
