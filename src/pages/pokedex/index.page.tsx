import React from "react";
import Link from "next/link";

import { IPokemon, PokedexProps } from "./types";

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon");
  const data = await res.json();

  return {
    props: { pokemons: data.results },
  };
};
const Pokedex: React.FC<PokedexProps> = ({ pokemons }) => {
  return (
    <div>
      <h1>All Pokemons</h1>
      {pokemons &&
        pokemons.map((pokemon: IPokemon) => (
          <div>
            <h3>{pokemon.name}</h3>
          </div>
        ))}
    </div>
  );
};

export default Pokedex;
