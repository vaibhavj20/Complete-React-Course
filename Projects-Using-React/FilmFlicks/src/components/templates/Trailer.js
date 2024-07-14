import React from "react";
import ReactPlayer from "react-player";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import NotFound from "./NotFound";

const Trailer = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytVideo = useSelector((state) => state[category].info.videos);

  return (
    <div className="top-0 left-0 bg-[rgba(0,0,0,.9)] z-[100] fixed w-screen h-screen flex items-center justify-center overflow-hidden">
      {ytVideo ? (
        <div>
          <button
            onClick={() => navigate(-1)}
            className="text-white absolute text-2xl font-bold p-2 hover:text-purple-400 ri-close-fill cursor-pointer rounded-full bg-black bg-opacity-50 right-[5%] top-[5%]"
          />
          <ReactPlayer
            height={550}
            width={1000}
            url={`https://www.youtube.com/watch?v=${ytVideo.key}`}
          />
        </div>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default Trailer;
