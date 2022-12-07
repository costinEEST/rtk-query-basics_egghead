export function PokemonDetails({ name }: { name: string }) {
  const listFormatter = {
    format: (list: string[]) =>
      list.reduce((acc, curr) => acc + curr + ";", ""),
  };

  // https://pokeapi.co/api/v2/pokemon/1
  const data = {
    name: "bulbasaur",
    id: 1,
    sprites: {
      front_default:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    },
    height: 7,
    weight: 69,
    types: [
      {
        slot: 1,
        type: { name: "grass", url: "https://pokeapi.co/api/v2/type/12/" },
      },
      {
        slot: 2,
        type: { name: "poison", url: "https://pokeapi.co/api/v2/type/4/" },
      },
    ],
  };

  return (
    <article>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <ul>
        <li>id: {data.id}</li>
        <li>height: {data.height}</li>
        <li>weight: {data.weight}</li>
        <li>
          types:
          {listFormatter.format(data.types.map((item) => item.type.name))}
        </li>
      </ul>
    </article>
  );
}
