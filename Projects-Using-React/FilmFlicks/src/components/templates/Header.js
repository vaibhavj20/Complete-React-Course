import React from "react";
import { Link } from "react-router-dom";

const Header = ({ data }) => {
  // console.log(data);
  return (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)) ,url(https://image.tmdb.org/t/p/original/${
          data.backdrop_path || data.profile_path || data.poster_path
        })`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="w-full h-[50vh] flex flex-col justify-center items-start p-[5%] pt-[10%]"
    >
      <h1 className="w-[70%] text-[43px] font-black text-white ">
        {data.name || data.title || data.original_name || data.original_title}
      </h1>
      <p className="w-[70%] mt-5 mb-3 text-white">
        {data.overview.slice(0, 200)}...
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          className="text-blue-400"
        >
          more
        </Link>
      </p>
      <p className="text-white">
        <i className="text-yellow-500  ri-megaphone-fill"></i>{" "}
        {data.release_date || "No Information"}
        <i className="ml-5 text-yellow-500 ri-disc-fill"></i>{" "}
        {data.media_type.toUpperCase()}
      </p>
      <Link className=" bg-[#6556CD] hover:bg-[#4e40aa] p-3 rounded text-white  mt-5 ">
        Watch Trailer
      </Link>
    </div>
  );
};

export default Header;
