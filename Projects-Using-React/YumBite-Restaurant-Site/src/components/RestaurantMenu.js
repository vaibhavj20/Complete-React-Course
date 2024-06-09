// // import { useEffect, useState } from "react";
// import Shimmer from "./Shimmer";
// import { useParams } from "react-router-dom";
// import useRestaurantMenu from "../utils/useRestaurantMenu";
// import RestaurantCategory from "./RestaurantCategory";
// import { useState } from "react";
// import Shimmer2 from "./Shimmer2";

// const RestaurantMenu = () => {
//   // const [resInfo, setResInfo] = useState(null);
//   // const params = useParams();
//   // console.log(params);

//   const { resdId } = useParams();

//   const resInfo = useRestaurantMenu(resdId);
//   const [showIndex, setShowIndex] = useState(null);

//   // useEffect(() => {
//   //   fetchMenu();
//   // }, []);

//   // const fetchMenu = async () => {
//   //   const data = await fetch(MENU_API + resdId);
//   //   console.log(MENU_API + resdId);
//   //   const json = await data.json();

//   //   console.log(json);
//   //   setResInfo(json.data);
//   // };

//   if (!resInfo) return <Shimmer2 />;

//   const { name, cuisines, costForTwoMessage } =
//     resInfo?.cards[2]?.card?.card?.info;

//   const { itemCards } =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

//   // console.log(itemCards);
//   // console.log("Vaby");
//   // console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

//   const categories =
//     resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
//       (c) =>
//         c.card?.["card"]?.["@type"] ===
//         "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
//     );
//   console.log("printing categories");
//   console.log(categories);

//   return (
//     <div className="text-center font-Poppins">
//       <h1 className="font-bold my-6 text-2xl">{name}</h1>
//       <p className="font-bold text-lg">
//         {cuisines.join(",")} - {costForTwoMessage}
//       </p>
//       {categories.map((category, index) => (
//         //controlled components
//         <RestaurantCategory
//           key={category?.card?.card?.title}
//           data={category?.card?.card}
//           showItems={index === showIndex ? true : false}
//           setShowIndex={() => setShowIndex(index)}
//         />
//       ))}
//     </div>
//   );
// };

// export default RestaurantMenu;

import Shimmer2 from "./Shimmer2";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const { resdId } = useParams();
  const resInfo = useRestaurantMenu(resdId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer2 />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info;
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.["card"]?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="container mx-auto font-Poppins">
      <div className="bg-white shadow-md rounded-lg p-6 mb-6 text-center mt-4">
        <h1 className="font-bold text-2xl mb-2 text-Medium-Brown ">{name}</h1>
        <p className="text-lg text-gray-700 mb-4">
          {cuisines.join(", ")} - {costForTwoMessage}
        </p>
      </div>
      {categories.map((category, index) => (
        <div key={category?.card?.card?.title} className="mb-4">
          <RestaurantCategory
            data={category?.card?.card}
            showItems={index === showIndex}
            setShowIndex={() => setShowIndex(index)}
          />
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
