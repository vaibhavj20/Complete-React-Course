// import React from "react";
// // import { Link } from "react-router-dom";
// // import Dropdown from "./Dropdown";

// const HorizontalCards = ({ data }) => {
//   console.log(data);

//   return (
//     <div className="w-full flex overflow-y-hidden mb-5 p-5">
//       {data.map((data, index) => (
//         <div key={index} className="min-w-[17%] bg-zinc-900 mr-5 mb-5 ">
//           <img
//             className="w-full h-[45%] object-cover"
//             src={`https://image.tmdb.org/t/p/original/${
//               data.backdrop_path || data.profile_path || data.poster_path
//             })`}
//             alt=""
//           />
//           <div className=" text-white p-3 h-[55%]">
//             {" "}
//             <h1 className=" text-xl font-semibold ">
//               {data.name ||
//                 data.title ||
//                 data.original_name ||
//                 data.original_title}
//             </h1>
//             <p className=" ">
//               {data.overview.slice(0, 50)}...
//               <span className="text-zinc-500">more</span>
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default HorizontalCards;

import React from "react";
import { Link } from "react-router-dom";

const HorizontalCards = ({ data }) => {
  //console.log(data);

  return (
    <div className="w-full flex overflow-x-auto mb-5 p-5">
      {data.map((data, index) => (
        <Link
          to={`/${data.media_type}/details/${data.id}`}
          key={index}
          className="min-w-[17%] bg-zinc-900 mr-5 mb-5  overflow-hidden"
        >
          <img
            className="w-full h-[45%] object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              data.backdrop_path || data.profile_path || data.poster_path
            }`}
            alt=""
          />
          <div className="text-white p-3 flex flex-col justify-between">
            <h1 className="text-lg font-bold mb-2 truncate">
              {data.name ||
                data.title ||
                data.original_name ||
                data.original_title}
            </h1>
            <p className="text-sm text-gray-300 leading-snug">
              {data.overview.length > 100
                ? `${data.overview.slice(0, 100)}...`
                : data.overview}
              <span className="text-zinc-500"> more</span>
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HorizontalCards;
