// import React from "react";
// import { Link } from "react-router-dom";

// const Cards = ({ data }) => {
//   console.log(data);
//   return (
//     <div className="flex flex-wrap justify-center w-full h-full p-8 bg-[#1F1E24]">
//       {data.map((card, index) => (
//         <Link
//           key={index}
//           className="w-60 m-4 bg-[#2b2a31] hover:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"
//         >
//           <img
//             className="h-80 w-full object-cover"
//             src={`https://image.tmdb.org/t/p/original/${
//               card.profile_path || card.poster_path || card.backdrop_path
//             }`}
//             alt={card.title || card.name}
//           />
//           <div className="p-4 bg-[#454449] flex justify-between">
//             <h1 className="text-lg text-white font-semibold truncate">
//               {card.name ||
//                 card.title ||
//                 card.original_name ||
//                 card.original_title}
//             </h1>
//             <div className="text-white bg-yellow-400 rounded-full w-7 h-7 text-center">
//               {(card.vote_average * 10).toFixed()}
//             </div>
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Cards;

/*-----------------------------------------------trainer -above---------------------------------*/

// import React from "react";
// import { Link } from "react-router-dom";

// const Cards = ({ data }) => {
//   console.log(data);
//   return (
//     <div className="flex flex-wrap justify-center w-full h-full p-8 bg-[#1F1E24]">
//       {data.map((card, index) => (
//         <Link
//           key={index}
//           className="w-60 m-4 bg-[#2b2a31] hover:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 relative"
//         >
//           <img
//             className="h-80 w-full object-cover"
//             src={`https://image.tmdb.org/t/p/original/${
//               card.profile_path || card.poster_path || card.backdrop_path
//             }`}
//             alt={card.title || card.name}
//           />
//           <div className="p-4 bg-[#454449]">
//             <h1 className="text-xl text-white font-bold truncate">
//               {card.name ||
//                 card.title ||
//                 card.original_name ||
//                 card.original_title}
//             </h1>
//           </div>
//           {card.vote_average && (
//             <div className="absolute top-2 right-2 text-white bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center text-lg font-semibold shadow-md">
//               {(card.vote_average * 10).toFixed()}%
//             </div>
//           )}
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Cards;

/** ----------------------GPT------------------------------------ BELOW -----------*/
// import React from "react";
// import { Link } from "react-router-dom";

// const Cards = ({ data }) => {
//   return (
//     <div className="flex flex-wrap justify-center w-full h-full p-8 bg-gradient-to-b from-gray-900 to-black">
//       {data.map((card, index) => (
//         <Link
//           key={index}
//           className="relative w-60 m-4 bg-[#1F1E24] rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300"
//         >
//           <div className="relative">
//             <img
//               className="h-80 w-full object-cover"
//               src={`https://image.tmdb.org/t/p/original/${
//                 card.profile_path || card.poster_path || card.backdrop_path
//               }`}
//               alt={card.title || card.name}
//             />
//             {card.vote_average && (
//               <div className="absolute top-2 right-2 text-white bg-yellow-400 rounded-full w-12 h-12 flex items-center justify-center text-lg font-semibold shadow-md">
//                 {(card.vote_average * 10).toFixed()}%
//               </div>
//             )}
//           </div>
//           <div className="p-4 bg-[#2b2a31] rounded-b-lg">
//             <h1 className="text-xl text-white font-bold truncate">
//               {card.name ||
//                 card.title ||
//                 card.original_name ||
//                 card.original_title}
//             </h1>
//             {card.release_date && card.release_date && (
//               <div className="mt-2 flex justify-between items-center">
//                 <span className="text-gray-400 text-sm">
//                   {card.release_date ? card.release_date.split("-")[0] : ""}
//                 </span>
//                 <span className="text-yellow-400 font-semibold">
//                   {card.vote_count} votes
//                 </span>
//               </div>
//             )}
//           </div>
//         </Link>
//       ))}
//     </div>
//   );
// };

// export default Cards;
/**-----------------------------------yeh ab below wala jo space de raha card woh sambhal raha ahun  */
import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ data, title }) => {
  console.log(title);

  return (
    <div className="flex flex-wrap justify-center w-full h-full p-8 bg-[#1F1E24]">
      {data.map((card, index) => (
        <Link
          to={`/${data.media_type || title}/details/${card.id}`}
          key={index}
          className="w-60 m-4 bg-[#2b2a31] hover:bg-gray-700 rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 relative"
        >
          <img
            className="h-80 w-full object-cover"
            src={`https://image.tmdb.org/t/p/original/${
              card.profile_path || card.poster_path || card.backdrop_path
            }`}
            alt={card.title || card.name}
          />
          <div className="p-4 bg-[#454449]">
            <h1 className="text-xl text-white font-bold truncate">
              {card.name ||
                card.title ||
                card.original_name ||
                card.original_title}
            </h1>
          </div>
          {card.vote_average !== undefined && card.vote_average !== null && (
            <div className="absolute top-2 right-2 text-white bg-yellow-400 rounded-full w-11 h-11 flex items-center justify-center text-lg font-semibold shadow-md">
              {`${(card.vote_average * 10).toFixed()}%`}
            </div>
          )}
        </Link>
      ))}
    </div>
  );
};

export default Cards;
