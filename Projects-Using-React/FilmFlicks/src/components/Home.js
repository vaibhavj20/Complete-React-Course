import React, { useEffect, useState } from "react";
import SideNav from "./templates/SideNav";
import TopNav from "./templates/TopNav";
import axios from "../utils/axios";
import Header from "./templates/Header";
import HorizontalCards from "./templates/HorizontalCards";
import Dropdown from "./templates/Dropdown";
import HomeShimmer from "./HomeShimmer";

const Home = () => {
  const [wallpaper, setWallpaper] = useState(null);
  const [trendingdata, setTrendingData] = useState(null);

  const [category, setCategory] = useState("all");

  const getHeaderWallpaper = async () => {
    try {
      const { data } = await axios.get(`/trending/all/day`);
      // console.log(data);
      // setWallpaper(data.results);
      let randomData =
        data.results[(Math.random() * data.results.length).toFixed()];
      setWallpaper(randomData);
      // console.log(randomData);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  const getTrending = async () => {
    try {
      const { data } = await axios.get(`/trending/${category}/day`);
      // console.log(data);
      // setWallpaper(data.results);
      setTrendingData(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    getTrending();
    !wallpaper && getHeaderWallpaper();
  }, [category]);

  return wallpaper && trendingdata ? (
    <>
      <SideNav />
      <div className="w-[80%] h-full overflow-auto overflow-x-hidden">
        <TopNav />
        <Header data={wallpaper} />
        <div className=" flex justify-between p-5">
          <h1 className="text-3xl font-semibold text-zinc-400 ">Trending</h1>

          <Dropdown
            title="Filter"
            options={["tv", "movie", "all"]}
            func={(e) => setCategory(e.target.value)}
          />
        </div>
        <HorizontalCards data={trendingdata} />
      </div>
    </>
  ) : (
    <HomeShimmer />
  );
};

export default Home;
