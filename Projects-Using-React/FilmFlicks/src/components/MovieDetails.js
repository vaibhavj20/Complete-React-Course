import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { asyncloadmovie, removeMovie } from "../store/actions/movieActions";
import { useEffect } from "react";

const MovieDetails = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(asyncloadmovie(id));
    return () => {
      dispatch(removeMovie());
    };
  });

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
      className="w-screen h-screen px-[10%]"
    >
      <nav className="w-full text-zinc-400">
        <Link
          onClick={() => navigate(-1)}
          className=" text-[19px] font-bold text-white p-3 hover:text-purple-400 ri-arrow-left-line cursor-pointer"
        ></Link>
        <a href="">
          <i class="ri-external-link-fill"></i>
        </a>
        <a href="">
          <i class="ri-earth-fill"></i>
        </a>

        <a href="">imdb</a>
      </nav>
    </div>
  );
};

export default MovieDetails;
