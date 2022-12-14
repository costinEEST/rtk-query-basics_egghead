import { usePokemonDetailQuery } from ".";

const listFormatter = new Intl.ListFormat("en-GB", {
  style: "short",
  type: "conjunction",
});

export function PokemonDetails({ name }: { name: string }) {
  const { data, isLoading, isError } = usePokemonDetailQuery({ id: "1" });

  if (isLoading) return <>Loading..</>;

  if (isError) return <>Error</>;

  return data ? (
    <article>
      <h2>{data.name}</h2>
      <img src={data.sprites.front_default} alt={data.name} />
      <ul>
        <li>id: {data.id}</li>
        <li>height: {data.height}</li>
        <li>weight: {data.weight}</li>
        <li>
          types:
          {listFormatter.format(
            data.types.map((item: { type: { name: string } }) => item.type.name)
          )}
        </li>
      </ul>
    </article>
  ) : null;
}
