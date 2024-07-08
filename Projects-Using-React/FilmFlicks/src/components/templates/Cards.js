import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data }) => {
  return (
    <div className="flex flex-wrap justify-center w-full h-full p-8 bg-[#1F1E24]">
      {data.map((card, index) => (
        <Link
          key={index}
          className="w-60 m-4 bg-gray-800 hover:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
        >
          <img
            className="h-80 w-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.profile_path || card.poster_path || card.backdrop_path
            }`}
            alt={card.title || card.name}
          />
          <div className="p-4 bg-gray-800">
            <h1 className="text-lg text-white font-semibold truncate">
              {card.name ||
                card.title ||
                card.original_name ||
                card.original_title}
            </h1>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
