// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// import { CDN_URL } from "../utils/constants";

// const ItemList = ({ items }) => {
//   const dispatch = useDispatch();

//   const addItemHandler = (item) => {
//     //dispatch an action
//     dispatch(addItem(item));
//   };

//   return (
//     <div className="font-Poppins">
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between
//           "
//         >
//           <div className="w-9/12">
//             <div className="py-2">
//               <span className="block">{item.card.info.name}</span>
//               <span>
//                 ₹
//                 {item.card.info.price
//                   ? item.card.info.price / 100
//                   : item.card.info.defaultPrice / 100}
//               </span>
//             </div>
//             <p className="text-xs">{item.card.info.description}</p>
//           </div>
//           <div className="w-3/12 p-4">
//             <div className="absolute">
//               <button
//                 className="p-2 mx-[45px] rounded-lg bg-black text-white shadow-lg "
//                 onClick={() => addItemHandler(item)}
//               >
//                 Add +
//               </button>
//             </div>
//             <img src={CDN_URL + item.card.info.imageId} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };
// export default ItemList;

// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// import { CDN_URL } from "../utils/constants";

// const ItemList = ({ items }) => {
//   const dispatch = useDispatch();

//   const addItemHandler = (item) => {
//     //dispatch an action
//     dispatch(addItem(item));
//   };

//   return (
//     <div className="font-Poppins container mx-auto p-4">
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="p-3 m-3 border-gray-200 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex"
//         >
//           <div className="w-8/12">
//             <div className="py-1">
//               <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
//               <span className="block text-md font-medium text-gray-600">
//                 ₹
//                 {item.card.info.price
//                   ? item.card.info.price / 100
//                   : item.card.info.defaultPrice / 100}
//               </span>
//             </div>
//             <p className="text-xs text-gray-500">
//               {item.card.info.description}
//             </p>
//           </div>
//           <div className="w-4/12 relative">
//             <img
//               src={CDN_URL + item.card.info.imageId}
//               alt={item.card.info.name}
//               className="w-full h-32 object-cover rounded-lg"
//             />
//             <button
//               className="absolute bottom-2 left-1/2 transform -translate-x-1/2 p-1 px-3 rounded-lg bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300"
//               onClick={() => addItemHandler(item)}
//             >
//               Add +
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;

// import { useDispatch } from "react-redux";
// import { addItem } from "../utils/cartSlice";
// import { CDN_URL } from "../utils/constants";

// const ItemList = ({ items }) => {
//   const dispatch = useDispatch();

//   const addItemHandler = (item) => {
//     //dispatch an action
//     dispatch(addItem(item));
//   };

//   return (
//     <div className="font-Poppins container mx-auto p-4">
//       {items.map((item) => (
//         <div
//           key={item.card.info.id}
//           className="p-3 m-3 border-gray-200 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex"
//         >
//           <div className="w-8/12">
//             <div className="py-1">
//               <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
//               <span className="block text-md font-medium text-gray-600">
//                 ₹
//                 {item.card.info.price
//                   ? item.card.info.price / 100
//                   : item.card.info.defaultPrice / 100}
//               </span>
//             </div>
//             <p className="text-xs text-gray-500">
//               {item.card.info.description}
//             </p>
//           </div>
//           <div className="w-4/12 relative flex items-center">
//             <img
//               src={CDN_URL + item.card.info.imageId}
//               alt={item.card.info.name}
//               className="w-full h-24 object-cover rounded-lg"
//             />
//             <button
//               className="absolute bottom-2 left-1/2 transform -translate-x-1/2 p-1 px-3 rounded-lg bg-blue-600 text-white shadow-lg hover:bg-blue-700 transition-colors duration-300"
//               onClick={() => addItemHandler(item)}
//             >
//               Add +
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ItemList;

import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  const dispatch = useDispatch();

  const addItemHandler = (item) => {
    // dispatch an action
    dispatch(addItem(item));
  };

  return (
    <div className="font-Poppins container mx-auto p-4">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-3 m-3 border-gray-200 border rounded-lg shadow-md bg-white hover:shadow-lg transition-shadow duration-300 flex justify-between"
        >
          <div className="w-8/12 pr-4">
            <h3 className="text-lg font-semibold">{item.card.info.name}</h3>
            <div className="py-1 text-md font-medium text-gray-600">
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </div>
            <p className="text-sm text-gray-500">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-4/12 relative flex items-center">
            <img
              src={CDN_URL + item.card.info.imageId}
              alt={item.card.info.name}
              className="w-full h-28 object-cover rounded-lg"
            />
            <button
              className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 rounded-full bg-Medium-Brown text-white shadow-lg hover:bg-Dark-Brown transition-colors duration-300"
              onClick={() => addItemHandler(item)}
            >
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
