import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Link,
  Outlet,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";
import { asyncloadtv } from "../store/actions/tvActions";
import HorizontalCards from "./templates/HorizontalCards";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DetailsShimmer from "./templates/DetailsShimmer";
import { removeTv } from "../store/reducers/tvSlice";

const TvDetails = () => {
  const { pathname } = useLocation();
  const { info } = useSelector((state) => state.tv);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();
  console.log(info);

  useEffect(() => {
    dispatch(asyncloadtv(id));
    return () => {
      dispatch(removeTv());
    };
  }, [id]);

  return info ? (
    <div
      style={{
        background: `linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="relative w-screen h-[150vh] flex flex-col items-center justify-start px-4 py-10 bg-black"
    >
      {/* Navigation */}
      <nav className="w-full max-w-7xl text-white flex justify-start items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-2xl font-bold p-2 hover:text-purple-400 ri-arrow-left-line cursor-pointer rounded-full bg-black bg-opacity-50"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={info.detail.homepage}
          className="rounded-full bg-black bg-opacity-50 p-2"
        >
          <i className="ri-external-link-fill text-2xl hover:text-purple-400"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
          className="rounded-full bg-black bg-opacity-50 p-2"
        >
          <i className="ri-earth-fill text-2xl hover:text-purple-400"></i>
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}
          className="rounded-full bg-black bg-opacity-50 p-2"
        >
          <p className="font-bold hover:text-purple-400">IMDb</p>
        </a>
      </nav>

      {/* Movie Details Container */}
      <div className="w-full max-w-7xl bg-black bg-opacity-70 p-8 rounded-lg flex flex-col md:flex-row items-start gap-8 text-white relative">
        <img
          className="shadow-lg rounded-lg h-96 md:h-[50vh] object-cover"
          src={`https://image.tmdb.org/t/p/original/${
            info.detail.poster_path || info.detail.backdrop_path
          }`}
          alt=""
        />
        <div className="flex flex-col space-y-4 flex-grow">
          <h1 className="text-4xl font-black">
            {info.detail.name ||
              info.detail.title ||
              info.detail.original_name ||
              info.detail.original_title}
            <span className="text-2xl font-bold text-zinc-300 ml-2">
              ({info.detail.first_air_date.split("-")[0]})
            </span>
          </h1>
          <h1 className="text-xl font-semibold italic text-zinc-300">
            {info.detail.tagline}
          </h1>
          <div className="flex flex-wrap items-center gap-1">
            <div className="w-14 h-14">
              <CircularProgressbar
                value={info.detail.vote_average * 10}
                text={`${(info.detail.vote_average * 10).toFixed()}%`}
                styles={buildStyles({
                  textSize: "28px",
                  textColor: "#fff",
                  pathColor: "#f8e71c",
                  trailColor: "#d6d6d6",
                  textStyle: {
                    fontWeight: "bold",
                  },
                })}
                className="hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-semibold text-lg">User</span>
              <span className="font-semibold text-lg">Score</span>
            </div>
            <h1 className="ml-4 flex items-center text-zinc-200">
              {info.detail.genres.map((g) => g.name).join(", ")}
              <span className="mx-2">•</span>
              {info.detail.first_air_date}
              <span className="mx-2">•</span>
              {info.detail.runtime} min
            </h1>
          </div>
          <h1 className="text-xl">Overview</h1>
          <hr className="text-zinc-500" />
          <p>{info.detail.overview}</p>
          <Link
            className="font-bold p-3 w-[20%] rounded bg-purple-600 hover:bg-purple-700 text-white flex items-center"
            to={`${pathname}/trailer`}
          >
            <i className="ri-play-fill mr-2"></i> Play Trailer
          </Link>
        </div>
        <div className="absolute top-8 right-8 bg-[#40cd2a66] text-white font-extrabold py-2 px-4 rounded shadow-lg">
          {info.detail.status}
        </div>

        {/* Social Media Links */}
        <div className="absolute bottom-8 right-8 flex space-x-4">
          {info.externalid.facebook_id && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              className="rounded-full bg-black bg-opacity-50 p-2"
            >
              <i className="ri-facebook-fill text-2xl hover:text-blue-600"></i>
            </a>
          )}
          {info.externalid.instagram_id && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              className="rounded-full bg-black bg-opacity-50 p-2"
            >
              <i className="ri-instagram-fill text-2xl hover:text-pink-500"></i>
            </a>
          )}
          {info.externalid.twitter_id && (
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://twitter.com/${info.externalid.twitter_id}`}
              className="rounded-full bg-black bg-opacity-50 p-2"
            >
              <i className="ri-twitter-fill text-2xl hover:text-blue-400"></i>
            </a>
          )}
        </div>
      </div>

      {/* Recommendations */}
      <hr className="mt-10 mb-5 border-none h-0.5 bg-zinc-200" />
      <h1 className="text-3xl font-semibold text-white mb-5 text-left">
        Recommendations
      </h1>
      <div className="w-full max-w-7xl">
        <HorizontalCards
          data={
            info.recommendations.length > 0
              ? info.recommendations
              : info.similar
          }
        />
      </div>

      <Outlet />
    </div>
  ) : (
    <DetailsShimmer />
  );
};

export default TvDetails;
