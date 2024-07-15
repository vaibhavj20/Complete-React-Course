import React from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import noImageAvailable from "../../utils/images/noimage.jpg";

const Cards = ({ data, title }) => {
  const getColor = (value) => {
    if (value >= 70) return "#77dd77";
    if (value >= 30) return "#f8e71c";
    return "#ff6961";
  };

  return (
    <div className="flex flex-wrap justify-center w-full h-full p-8 bg-[#1F1E24]">
      {data.map((card, index) => (
        <Link
          to={`/${card.media_type || title}/details/${card.id}`}
          key={index}
          className="w-60 m-4 bg-[#2b2a31] hover:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 relative"
        >
          <img
            className="h-[320px] w-full object-cover object-center"
            src={
              card.poster_path || card.backdrop_path || card.profile_path
                ? `https://image.tmdb.org/t/p/original/${
                    card.poster_path || card.backdrop_path || card.profile_path
                  }`
                : noImageAvailable
            }
            alt={card.title || card.name || "No Image Available"}
          />
          <div className="p-6 bg-[#454449] relative">
            <h1 className="text-xl text-white font-bold truncate">
              {card.name ||
                card.title ||
                card.original_name ||
                card.original_title}
            </h1>
            <p className="text-sm text-gray-400">
              {new Date(
                card.release_date || card.first_air_date
              ).toLocaleDateString(undefined, {
                year: "numeric",
                month: "short",
                day: "numeric",
              })}
            </p>
            {card.vote_average !== undefined && card.vote_average !== null && (
              <div className="absolute top-[-30px] right-[185px]">
                <div className="bg-black rounded-full w-12 h-12 flex items-center justify-center">
                  <div className="w-10 h-10">
                    <CircularProgressbar
                      value={card.vote_average * 10}
                      text={`${(card.vote_average * 10).toFixed()}%`}
                      styles={buildStyles({
                        textSize: "28px",
                        textColor: "#fff",
                        pathColor: getColor(card.vote_average * 10),
                        trailColor: "#d6d6d6",
                      })}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Cards;
