import React from "react";
import { useQuery } from "react-query";

import { CardProps, Params } from "./types";

const fetchPokemonInfo = async (props: Params) => {
  const [, { name }] = props.queryKey;
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const data = await res.json();

  return {
    name: data?.name,
    image: data?.sprites?.other["official-artwork"]?.front_default,
    hp: data?.stats[0]?.base_stat,
    attack: data?.stats[1]?.base_stat,
  };
};

const Card: React.FC<CardProps> = ({ name }) => {
  const { data } = useQuery(["pokemon", { name }], fetchPokemonInfo, {
    keepPreviousData: true,
  });

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <img className="bg-cover bg-center h-56 p-4" src={data?.image} alt="Bulbasaur" loading="lazy" />
      <div className="p-4">
        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{data?.name}</p>
      </div>
      <div className="flex p-4 border-t border-gray-300 text-gray-700">
        <div className="flex-1 inline-flex items-center">
          <p>
            <span className="text-gray-900 font-bold">{data?.hp}</span>
            <span>HP</span>
          </p>
        </div>
        <div className="flex-1 inline-flex items-center">
          <p>
            <span className="text-gray-900 font-bold">{data?.attack}</span>
            <span>Attack</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
