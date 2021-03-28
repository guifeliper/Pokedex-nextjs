import React from "react";
import { useQuery } from "react-query";

import { CardProps, Params } from "./types";

const fetchPokemonInfo = async (props: Params) => {
  const [, { name }] = props.queryKey;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  return res.json();
};

const Card: React.FC<CardProps> = ({ name }) => {
  const { data, status } = useQuery(["pokemon", { name }], fetchPokemonInfo, {
    keepPreviousData: true,
  });
  console.log(data);

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <img
        className="bg-cover bg-center h-56 p-4"
        src={data.sprites.other["official-artwork"].front_default}
        alt="Bulbasaur"
        loading="lazy"
      />
      <div className="p-4">
        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{data.name}</p>
      </div>
      <div className="flex p-4 border-t border-gray-300 text-gray-700">
        <div className="flex-1 inline-flex items-center">
          <p>
            <span className="text-gray-900 font-bold">{data.stats[0].base_stat}</span>{" "}
            {data.stats[0].stat.name}
          </p>
        </div>
        <div className="flex-1 inline-flex items-center">
          <p>
            <span className="text-gray-900 font-bold">{data.stats[1].base_stat}</span>{" "}
            {data.stats[1].stat.name}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
