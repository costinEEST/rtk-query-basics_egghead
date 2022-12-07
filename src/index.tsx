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

const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://pokeapi.co/api/v2/" }),
  endpoints: (build) => ({
    pokemonList: build.query({
      query: () => "pokemon?limit=9",
    }),
    pokemonDetail: build.query({
      query: (id: string) => `pokemon/${id}`,
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
