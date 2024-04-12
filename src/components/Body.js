import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
// import { useEffect } from "react";
import { useState } from "react";

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

  const [restaurantList, setrestaurantList] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // console.log("Button was clicked");

            //filter logic
            const filteredList = restaurantList.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(restaurantList);
            setrestaurantList(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} />
          <RestaurantCard resData={resList[1]} />
          <RestaurantCard resData={resList[2]} />
          <RestaurantCard resData={resList[3]} />
          <RestaurantCard resData={resList[4]} />
          <RestaurantCard resData={resList[5]} />
          <RestaurantCard resData={resList[6]} />
          <RestaurantCard resData={resList[7]} /> */}

        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
