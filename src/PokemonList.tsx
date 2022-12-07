import { usePokemonListQuery } from ".";

export function PokemonList({
  onPokemonSelected,
}: {
  onPokemonSelected: (name: string) => void;
}) {
  const { data, isLoading, isError } = usePokemonListQuery();

  if (isLoading) return <>Loading..</>;

  if (isError) return <>Error</>;

  return data ? (
    <article>
      <h2>Overview</h2>
      <ol start={1}>
        {data.results.map(({ name }: { name: string }) => (
          <li key={name}>
            <button onClick={() => onPokemonSelected(name)}>{name}</button>
          </li>
        ))}
      </ol>
    </article>
  ) : null;
}
