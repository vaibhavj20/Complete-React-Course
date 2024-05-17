import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
// import { useEffect } from "react";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  //normal js variable
  // let restaurantList = [
  //   {
  //     info: {
  //       id: "274781",
  //       name: "Mealful Rolls - India's Biggest Rolls",
  //       cloudinaryImageId: "0d959f87516479195952893fa26b11c9",
  //       locality: "Patel Narayana Reddy Layout",
  //       areaName: "Koramangala 6th Block",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Fast Food", "Snacks", "North Indian", "Desserts"],
  //       avgRating: 4.3,
  //     },
  //   },
  //   {
  //     info: {
  //       id: "390057",
  //       name: "NH1 Bowls - Highway To North",
  //       cloudinaryImageId:
  //         "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/10/5f68e8aa-d84f-4e27-9740-29a287c1f78b_390057.jpg",
  //       locality: "6th Block",
  //       areaName: "Koramangala",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["North Indian", "Punjabi", "Home Food"],
  //       avgRating: 3.5,
  //       parentId: "22452",
  //       avgRatingString: "4.5",
  //     },
  //   },
  //   {
  //     info: {
  //       id: "622030",
  //       name: "MOJO Pizza - 2X Toppings",
  //       cloudinaryImageId: "59b64f9bb67234987652437f21d379c2",
  //       locality: "Patel Narayana Reddy Layout",
  //       areaName: "Koramangala",
  //       costForTwo: "₹250 for two",
  //       cuisines: ["Pizzas", "Italian", "Fast Food", "Desserts"],
  //       avgRating: 4.5,
  //       parentId: "11329",
  //       avgRatingString: "4.5",
  //     },
  //   },
  // ];

  // local state variable

  const [restaurantList, setrestaurantList] = useState([]);

  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  // console.log(restaurantList);

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      //"https://www.swiggy.com/mapi/homepage/getCards?lat=19.9974533&lng=73.78980229999999"
    );

    const json = await data.json();

    // console.log(json);
    setrestaurantList(
      //optional chaining
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  //conditional rendering

  //we can clud both the code in return
  // if (restaurantList.length === 0) {
  //   return <Shimmer />;
  // }

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return (
      <h1>Looks like you're offline ! Please check your internet connection</h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(UserContext);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body max-w-[1180] m-auto">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            className="searchBox border border-solid border-black"
            value={searchText}
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />

          <button
            className="px-4 py-2 bg-orange-100 m-4 rounded-lg"
            onClick={() => {
              //filter the restaurants cards and update the UI
              console.log(searchText);

              const filteredRestaurants = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );

              setFilteredRestaurant(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center ">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              // console.log("Button was clicked");

              //filter logic

              const filteredList = restaurantList.filter(
                (res) => res.info.avgRating > 4
              );

              console.log(filteredList);

              setFilteredRestaurant(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>

        {/** live username */}
        <div className=" m-4 p-4 flex items-center ">
          <label className="p-2">User Name: </label>
          <input
            className="border border-black p-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap ">
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} /> */}

        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {" "}
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant} />
            ) : (
              <RestaurantCard resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
