import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";

import CardsShimmer from "./templates/CardsShimmer";

const Trending = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("all");
  const [duration, setDuration] = useState("day");
  const [trending, setTrending] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getTrending = async () => {
    try {
      const { data } = await axios.get(
        `/trending/${category}/${duration}?page=${page}`
      );

      if (data.results.length > 0) {
        setTrending((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (trending.length === 0) {
      getTrending();
    } else {
      setPage(1);
      setTrending([]);
      getTrending();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category, duration]);

  return trending.length > 0 ? (
    <div className="w-screen h-screen bg-[#2C2B34]">
      <div className="px-8 py-4 w-full flex items-center justify-between">
        <div className="flex items-center space-x-4 mr-12">
          <div className="bg-[#232325] rounded-full flex items-center justify-center w-12 h-12">
            <i
              onClick={() => navigate(-1)}
              className=" text-[19px] font-bold text-white p-3 hover:text-purple-400 ri-arrow-left-line cursor-pointer"
            ></i>
          </div>
          <h1 className="text-2xl text-white font-bold">Trending</h1>
        </div>
        <TopNav />
        <div className="ml-auto flex space-x-2">
          <Dropdown
            title="Category"
            options={["movie", "tv", "all"]}
            func={(e) => {
              setCategory(e.target.value);
            }}
            customClass="text-sm"
          />
          <Dropdown
            title="Duration"
            options={["week", "day"]}
            func={(e) => {
              setDuration(e.target.value);
            }}
            customClass="text-sm"
          />
        </div>
      </div>

      <InfiniteScroll
        dataLength={trending.length}
        next={getTrending}
        hasMore={hasMore}
        loader={
          <h1 className="h-10 text-center font-bold text-[#6556CD] bg-[#1F1E24]">
            Loading...
          </h1>
        }
        endMessage={<h1 className="text-center text-white">No more items</h1>}
      >
        <Cards data={trending} title={category} />
      </InfiniteScroll>
    </div>
  ) : (
    <CardsShimmer />
  );
};

export default Trending;
