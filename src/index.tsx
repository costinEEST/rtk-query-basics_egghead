import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import {
  createApi,
  ApiProvider,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

import { App } from "./App";

import reportWebVitals from "./reportWebVitals";

import "./index.css";

const mockPokemonListing = {
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

const mockPokemonDetail = {
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

const simulateLoading = () =>
  new Promise((resolve) => setTimeout(resolve, 1500));

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (build) => ({
    pokemonList: build.query({
      async queryFn() {
        await simulateLoading();

        return {
          data: mockPokemonListing,
        };
      },
    }),
    pokemonDetail: build.query({
      async queryFn() {
        await simulateLoading();

        return {
          data: mockPokemonDetail,
        };
      },
    }),
  }),
});

export const { usePokemonListQuery, usePokemonDetailQuery } = api;

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <StrictMode>
    <ApiProvider api={api}>
      <App />
    </ApiProvider>
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
