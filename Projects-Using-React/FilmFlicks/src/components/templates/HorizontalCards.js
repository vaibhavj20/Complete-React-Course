import React from "react";
import { Link } from "react-router-dom";
import noimage from "../../utils/images/noimage.jpg";

const HorizontalCards = ({ data }) => {
  return (
    <div className="w-full flex overflow-x-auto mb-5 p-5 ">
      {data.length > 0 ? (
        data.map((item, index) => (
          <Link
            to={`/${item.media_type}/details/${item.id}`}
            key={index}
            className="min-w-[18%] h-[38vh] bg-zinc-900 mr-5 mb-5 overflow-hidden relative p-2 rounded"
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <img
              className="w-full h-[45%] object-cover"
              src={
                item.backdrop_path || item.profile_path || item.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      item.backdrop_path ||
                      item.profile_path ||
                      item.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <div className="text-white p-3 flex flex-col justify-between">
              <h1 className="text-lg font-bold mb-2 truncate">
                {item.name ||
                  item.title ||
                  item.original_name ||
                  item.original_title}
              </h1>
              <p className="text-sm text-gray-300 leading-snug">
                {item.overview.length > 100
                  ? `${item.overview.slice(0, 100)}...`
                  : item.overview}
                <span className="text-zinc-500"> more</span>
              </p>
            </div>
            <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity duration-300"></div>
          </Link>
        ))
      ) : (
        <h1 className="text-3xl text-white font-black text-center mt-5">
          Nothing to show
        </h1>
      )}
    </div>
  );
};

export default HorizontalCards;
