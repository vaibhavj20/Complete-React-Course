import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import HorizontalCards from "./templates/HorizontalCards";

import { asyncloadperson, removePerson } from "../store/actions/personActions";
import Dropdown from "./templates/Dropdown";
import PersonShimmer from "./templates/PersonShimmer";

const PersonDetails = () => {
  const { info } = useSelector((state) => state.person);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { id } = useParams();

  const [category, setCategory] = useState("movie");
  const [readMore, setReadMore] = useState(false);

  useEffect(() => {
    dispatch(asyncloadperson(id));
    return () => {
      dispatch(removePerson());
    };
  }, [id]);

  const toggleReadMore = () => {
    setReadMore(!readMore);
  };

  return info ? (
    <div className="px-[10%] w-screen h-[250vh] bg-[#1F1E24]">
      <nav className="h-[10vh] w-full max-w-7xl text-white flex justify-start items-center gap-4 mb-8">
        <button
          onClick={() => navigate(-1)}
          className="text-xl font-bold p-2 hover:text-purple-400 ri-arrow-left-line cursor-pointer rounded-full bg-black bg-opacity-50"
        />
      </nav>

      <div className="w-full flex">
        <div className="w-[30%]">
          <img
            className="shadow-lg rounded-lg h-[96vh] md:h-[50vh] object-cover"
            src={`https://image.tmdb.org/t/p/original/${info.detail.profile_path}`}
            alt=""
          />
          <hr className="w-[260px] mt-10 mb-5 border-none h-[2px] bg-zinc-500" />
          <div className="text-xl text-white flex gap-x-5">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
              className="rounded-full bg-black bg-opacity-50 p-2"
            >
              <i className="ri-earth-fill text-xl hover:text-purple-400"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.facebook.com/${info.externalid.facebook_id}`}
              className="rounded-full bg-black bg-opacity-50 p-2"
            >
              <i className="ri-facebook-circle-fill text-xl hover:text-blue-500"></i>
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.instagram.com/${info.externalid.instagram_id}`}
              className="rounded-full bg-black bg-opacity-50 p-2"
            >
              <i className="ri-instagram-fill text-xl hover:text-pink-500"></i>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={`https://www.twitter.com/${info.externalid.twitter_id}`}
              className="rounded-full bg-black bg-opacity-50 p-2"
            >
              <i className="ri-twitter-x-fill text-xl hover:text-blue-400"></i>
            </a>
          </div>
          <h1 className="text-xl text-white font-semibold my-5">Person Info</h1>
          <h1 className="text-md text-white font-semibold">Known For</h1>
          <h1 className="text-md text-zinc-400">
            {info.detail.known_for_department}
          </h1>
          <h1 className="text-md text-white font-semibold mt-3">Gender</h1>
          <h1 className="text-md text-zinc-400">
            {info.detail.gender === 2 ? "Male" : "Female"}
          </h1>
          <h1 className="text-md text-white font-semibold mt-3">Birthday</h1>
          <h1 className="text-md text-zinc-400">{info.detail.birthday}</h1>
          <h1 className="text-md text-white font-semibold mt-3">Deathday</h1>
          <h1 className="text-md text-zinc-400">
            {info.detail.deathday ? info.detail.deathday : "Still Alive"}
          </h1>
          <h1 className="text-md text-white font-semibold mt-3">
            Place Of Birth
          </h1>
          <h1 className="text-md text-zinc-400">
            {info.detail.place_of_birth}
          </h1>
          <h1 className="text-md text-white font-semibold mt-3">
            Also Known As
          </h1>
          <div className="text-md text-zinc-400">
            {info.detail.also_known_as.map((name, i) => (
              <p className="mt-1" key={i}>
                {name}
              </p>
            ))}
          </div>
        </div>

        <div className="w-[80%] ml-[5%]">
          <h1 className="text-4xl text-white my-5 font-black">
            {info.detail.name}
          </h1>
          <h1 className="text-lg text-white font-semibold">Biography</h1>
          <p className="text-zinc-400 mt-3">
            {readMore
              ? info.detail.biography
              : `${info.detail.biography.split(" ").slice(0, 50).join(" ")}...`}
          </p>
          <button
            onClick={toggleReadMore}
            className="text-purple-400 hover:text-purple-600 mt-2"
          >
            {readMore ? "Read Less" : "Read More"}
          </button>

          <h1 className="mt-5 text-md text-white font-semibold">Known For</h1>
          <HorizontalCards data={info.combinedCredits.cast} />

          <div className="w-full flex justify-between">
            <h1 className="mt-5 text-lg text-white font-semibold">Acting</h1>
            <Dropdown
              title="Category"
              options={["tv", "movie"]}
              func={(e) => setCategory(e.target.value)}
            />
          </div>

          <div className="list-disc text-zinc-400 w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl border-2 border-zinc-700 p-5">
            {info[category + "Credits"].cast.map((c, i) => (
              <Link
                to={`/${category}/details/${c.id}`}
                className="block mb-4"
                key={i}
              >
                <div className="hover:bg-[#4A4A4A] p-2 rounded-md">
                  <h2 className="text-md font-bold text-white">
                    {c.name || c.title || c.original_name || c.original_title}
                  </h2>
                  {c.character && (
                    <p className="text-sm text-zinc-500">
                      Character Name: {c.character}
                    </p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <PersonShimmer />
  );
};

export default PersonDetails;
