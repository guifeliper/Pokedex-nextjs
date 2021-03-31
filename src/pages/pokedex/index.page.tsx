import React from "react";

import { IPokemon, PokedexProps } from "./types";
import { Card } from "components";
import generateUniqueID from "lib/generateUniqueID";

export const getStaticProps = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
  const data = await res.json();

  return {
    props: { pokemons: data.results },
  };
};
const Pokedex: React.FC<PokedexProps> = ({ pokemons }) => {
  return (
    <div>
      <h1 className="text-3xl text-blue-800 m-2 font-extrabold">All Pokemons</h1>
      <div className="grid grid-cols-4 gap-4">
        {pokemons && pokemons.map((pokemon: IPokemon) => <Card key={generateUniqueID()} {...pokemon} />)}
      </div>
    </div>
  );
};

export default Pokedex;
