import { CDN_URL } from "../utils/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCaretDown,
  faChevronDown,
  faStar,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
{
  /* <FontAwesomeIcon icon="fa-solid fa-star" style={{ color: "#FFD43B" }} />; */
}

const RestaurantCard = (props) => {
  const { resData } = props;
  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwo,
    sla: { deliveryTime },
  } = resData?.info;

  return (
    <div className="p-3 m-5 w-[270px] rounded-xl shadow-md bg-white hover:shadow-xl font-Poppins ">
      <img
        className="rounded-lg max-h-[150px] w-[300px]"
        src={CDN_URL + cloudinaryImageId}
        alt="res-logo"
      ></img>
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="pb-4 text-sm text-gray-800 mb-4">{cuisines.join(", ")}</h4>

      <div className="flex ">
        <h4 className="pr-3 font-medium">
          <FontAwesomeIcon icon={faStar} style={{ color: "#228B22" }} />{" "}
          {avgRating}
        </h4>
        <h4 className="pr-3 font-medium">{costForTwo}</h4>
        <h4 className="pr-3 font-medium">{deliveryTime} min</h4>
      </div>
      {/* <h4>{avgRating} Stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} minutes</h4> */}
    </div>
  );
};
// const RestaurantCard = (props) => {
//   const { resData } = props;
//   const {
//     cloudinaryImageId,
//     name,
//     cuisines,
//     avgRating,
//     costForTwo,
//     sla: { deliveryTime },
//   } = resData?.info;

//   return (
//     <div className="p-4 m-4 w-[250px] bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
//       <img
//         className="rounded-lg h-[150px] w-full object-cover mb-4"
//         src={CDN_URL + cloudinaryImageId}
//         alt="res-logo"
//       />
//       <h3 className="font-bold text-xl mb-2 text-gray-800">{name}</h3>
//       <h4 className="text-sm text-gray-600 mb-4">{cuisines.join(", ")}</h4>

//       <div className="flex items-center justify-between text-sm text-gray-600">
//         <div className="flex items-center">
//           <FontAwesomeIcon icon={faStar} className="text-green-500 mr-1" />
//           <span>{avgRating}</span>
//         </div>
//         <div>{costForTwo}</div>
//         <div>{deliveryTime} min</div>
//       </div>
//     </div>
//   );
// };

//higher order component
//it takes input -RestaurantCard =>op will be => RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label>Promoted</label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
