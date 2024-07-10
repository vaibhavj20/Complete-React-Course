import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import TrendingShimmer from "./templates/TrendingShimmer";

const Movie = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("now_playing");
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getMovie = async () => {
    try {
      const { data } = await axios.get(`/movie/${category}?page=${page}`);

      if (data.results.length > 0) {
        setMovie((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (movie.length === 0) {
      getMovie();
    } else {
      setPage(1);
      setMovie([]);
      getMovie();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return movie.length > 0 ? (
    <div className="w-screen h-screen bg-[#2C2B34]">
      <div className="px-8 py-4 w-full flex items-center justify-between">
        <div className="flex items-center space-x-4 mr-12">
          <div className="bg-[#232325] rounded-full flex items-center justify-center w-12 h-12">
            <i
              onClick={() => navigate(-1)}
              className="font-bold text-[19px] text-white p-3 hover:text-purple-400 ri-arrow-left-line cursor-pointer"
            ></i>
          </div>
          <h1 className="text-2xl text-white font-bold">
            Movie{" "}
            <small className="ml-2 text-lg text-zinc-600">({category})</small>
          </h1>
        </div>
        <TopNav />
        <div className="ml-auto flex space-x-2">
          <Dropdown
            title="Category"
            options={["popular", "top_rated", "upcoming", "now_playing"]}
            func={(e) => {
              setCategory(e.target.value);
            }}
            customClass="text-sm"
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={movie.length}
        next={getMovie}
        hasMore={hasMore}
        loader={
          <h1 className="h-10 text-center font-bold text-[#6556CD] bg-[#1F1E24]">
            Loading...
          </h1>
        }
        endMessage={<h1 className="text-center text-white">No more items</h1>}
      >
        <Cards data={movie} title="movie" />
      </InfiniteScroll>
    </div>
  ) : (
    <TrendingShimmer />
  );
};

export default Movie;
