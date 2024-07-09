import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <div className="w-[20%] h-full border-r-2 border-zinc-400 p-8">
      <h1 className="text-3xl text-white font-bold mb-4">
        <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
        <span className="">FilmFlicks</span>
      </h1>

      <nav className="flex flex-col text-zinc-400 text-lg gap-4">
        <h1 className="text-white font-semibold text-xl mt-5 mb-3">
          New Feeds
        </h1>

        <Link
          to="/trending"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="mr-2 ri-fire-fill"></i>
          Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="mr-2 ri-bard-fill"></i>
          Popular
        </Link>
        <Link
          to="/movie"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="mr-2 ri-movie-2-fill"></i>
          Movies
        </Link>
        <Link
          to="/tvShows"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2"
        >
          <i className="mr-2 ri-tv-2-fill"></i>
          Tv Shows
        </Link>
        <Link
          to="/peoples"
          className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2 mb-5"
        >
          <i className="mr-2 ri-team-fill"></i>
          People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-zinc-400" />

      <nav className="flex flex-col text-zinc-400 text-lg gap-4">
        <h1 className="text-white font-semibold text-xl mt-8 mb-2">
          Website Information
        </h1>

        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="mr-2 ri-information-2-fill"></i>
          About
        </Link>
        <Link className="hover:bg-[#6556CD] hover:text-white duration-300 rounded-lg p-2">
          <i className="mr-2 ri-phone-fill"></i>
          Contact
        </Link>
      </nav>
    </div>
  );
};

export default SideNav;
