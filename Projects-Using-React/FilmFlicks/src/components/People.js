import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TopNav from "./templates/TopNav";
import Dropdown from "./templates/Dropdown";
import axios from "../utils/axios";
import Cards from "./templates/Cards";
import InfiniteScroll from "react-infinite-scroll-component";
import TrendingShimmer from "./templates/TrendingShimmer";

const People = () => {
  const navigate = useNavigate();
  const [category, setCategory] = useState("popular");
  const [person, setPerson] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const getPerson = async () => {
    try {
      const { data } = await axios.get(`/person/${category}?page=${page}`);

      if (data.results.length > 0) {
        setPerson((prevState) => [...prevState, ...data.results]);
        setPage(page + 1);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const refreshHandler = () => {
    if (person.length === 0) {
      getPerson();
    } else {
      setPage(1);
      setPerson([]);
      getPerson();
    }
  };

  useEffect(() => {
    refreshHandler();
  }, [category]);
  return person.length > 0 ? (
    <div className="w-screen h-screen bg-[#2C2B34]">
      <div className="px-8 py-4 w-full flex items-center justify-between">
        <div className="flex items-center space-x-4 mr-12">
          <div className="bg-[#232325] rounded-full flex items-center justify-center w-12 h-12">
            <i
              onClick={() => navigate(-1)}
              className=" font-bold text-[19px] text-white p-3 hover:text-purple-400 ri-arrow-left-line cursor-pointer"
            ></i>
          </div>
          <h1 className="text-2xl text-white font-bold">Peoples</h1>
        </div>
        <TopNav />
        <div className="ml-auto flex space-x-2"></div>
      </div>

      <InfiniteScroll
        dataLength={person.length}
        next={getPerson}
        hasMore={hasMore}
        loader={
          <h1 className="h-10 text-center font-bold text-[#6556CD] bg-[#1F1E24]">
            Loading...
          </h1>
        }
        endMessage={<h1 className="text-center text-white">No more items</h1>}
      >
        <Cards data={person} title="person" />
      </InfiniteScroll>
    </div>
  ) : (
    <TrendingShimmer />
  );
};

export default People;
