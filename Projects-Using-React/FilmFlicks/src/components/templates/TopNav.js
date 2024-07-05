import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../utils/images/noimage.jpg";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      console.log(data.results);
      setSearches(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="text-zinc-400 text-[23px] ri-search-line"></i>
      <div className="flex items-center w-[50%] mx-10">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className="w-full text-zinc-200 p-2 text-lg outline-none border-none bg-transparent"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="cursor-pointer text-zinc-400 text-[23px] ri-close-fill ml-2"
          ></i>
        )}
      </div>
      <div className="absolute w-[55%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded shadow-lg">
        {searches.map((search, index) => (
          <Link
            key={index}
            className="font-semibold text-zinc-600 bg-zinc-200 w-full p-4 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300"
          >
            <img
              className="w-[10vh] h-[10vh] rounded mr-5 object-cover"
              src={
                search.backdrop_path ||
                search.profile_path ||
                search.poster_path
                  ? `https://image.tmdb.org/t/p/original/${
                      search.backdrop_path ||
                      search.profile_path ||
                      search.poster_path
                    }`
                  : noimage
              }
              alt=""
            />
            <span>
              {search.name ||
                search.title ||
                search.original_name ||
                search.original_title}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TopNav;
