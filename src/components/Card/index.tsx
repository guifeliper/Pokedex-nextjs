import React from "react";
import { CardProps } from "./types";

const Card: React.FC<CardProps> = ({ name, url }) => {
  console.log(url);

  return (
    <div className="bg-white shadow-xl rounded-lg overflow-hidden">
      <img
        className="bg-cover bg-center h-56 p-4"
        src="https://pokeres.bastionbot.org/images/pokemon/1.png"
        alt="Bulbasaur"
        loading="lazy"
      />
      <div className="p-4">
        <p className="uppercase tracking-wide text-sm font-bold text-gray-700">{name}</p>
      </div>
      <div className="flex p-4 border-t border-gray-300 text-gray-700">
        <div className="flex-1 inline-flex items-center">
          <p>
            <span className="text-gray-900 font-bold">3</span> HP
          </p>
        </div>
        <div className="flex-1 inline-flex items-center">
          <p>
            <span className="text-gray-900 font-bold">2</span> Attack
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
