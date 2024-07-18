// import axios from "../../utils/axios";
// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import noimage from "../../utils/images/noimage.jpg";

// const TopNav = () => {
//   const [query, setQuery] = useState("");
//   const [searches, setSearches] = useState([]);

//   const GetSearches = async () => {
//     try {
//       const { data } = await axios.get(`/search/multi?query=${query}`);
//       setSearches(data.results);
//     } catch (error) {
//       console.log("Error :", error);
//     }
//   };

//   useEffect(() => {
//     GetSearches();
//   }, [query]);

//   return (
//     <div className="flex items-center w-full max-w-3xl relative p-4  mx-auto">
//       <i className="text-zinc-400 text-[23px] ri-search-line"></i>
//       <div className="flex items-center w-full mx-4 relative">
//         <input
//           onChange={(e) => setQuery(e.target.value)}
//           value={query}
//           type="text"
//           className="w-full text-zinc-200 p-2 text-lg outline-none border-none bg-transparent "
//           placeholder="Search anything"
//         />
//         {query.length > 0 && (
//           <i
//             onClick={() => setQuery("")}
//             className="cursor-pointer text-zinc-400 text-[23px] ri-close-fill ml-2"
//           ></i>
//         )}
//         {query.length > 0 && (
//           <div className="absolute w-full max-w-[calc(100%-1.9rem)] max-h-[50vh] bg-zinc-200 top-[100%] left-0 overflow-auto rounded shadow-lg z-10 mt-2">
//             {searches.map((search, index) => (
//               <Link
//                 to={`/${search.media_type}/details/${search.id}`}
//                 key={index}
//                 className="font-semibold text-zinc-600 bg-zinc-200 w-full p-4 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300"
//               >
//                 <img
//                   className="w-[10vh] h-[10vh] rounded mr-5 object-cover"
//                   src={
//                     search.backdrop_path ||
//                     search.profile_path ||
//                     search.poster_path
//                       ? `https://image.tmdb.org/t/p/original/${
//                           search.backdrop_path ||
//                           search.profile_path ||
//                           search.poster_path
//                         }`
//                       : noimage
//                   }
//                   alt=""
//                 />
//                 <span>
//                   {search.name ||
//                     search.title ||
//                     search.original_name ||
//                     search.original_title}
//                 </span>
//               </Link>
//             ))}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default TopNav;

import axios from "../../utils/axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import noimage from "../../utils/images/noimage.jpg";

const TopNav = () => {
  const [query, setQuery] = useState("");
  const [searches, setSearches] = useState([]);

  const GetSearches = async () => {
    try {
      const { data } = await axios.get(`/search/multi?query=${query}`);
      setSearches(data.results);
    } catch (error) {
      console.log("Error :", error);
    }
  };

  useEffect(() => {
    GetSearches();
  }, [query]);

  return (
    <div className="flex items-center w-full max-w-3xl relative p-4 mx-auto">
      <i className="text-zinc-400 text-[23px] ri-search-line"></i>
      <div className="flex items-center w-full mx-4 relative">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className="w-full text-zinc-200 p-2 text-lg outline-none border-none bg-transparent "
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="cursor-pointer text-zinc-400 text-[23px] ri-close-fill ml-2"
          ></i>
        )}
        {query.length > 0 && (
          <div className="absolute w-full max-w-[calc(100%-1.9rem)] max-h-[50vh] bg-zinc-900 top-[100%] left-0 overflow-auto rounded shadow-lg z-10 mt-2">
            {searches.map((search, index) => (
              <Link
                to={`/${search.media_type}/details/${search.id}`}
                key={index}
                className="font-semibold text-zinc-200 bg-zinc-900 w-full p-4 flex justify-start items-center border-b-2 border-zinc-800 hover:text-white hover:bg-zinc-800"
              >
                <img
                  className="w-[10vh] h-[10vh] rounded mr-5 object-cover"
                  src={
                    search.backdrop_path ||
                    search.profile_path ||
                    search.poster_path
                      ? `https://image.tmdb.org/t/p/original/${
                          search.backdrop_path ||
                          search.profile_path ||
                          search.poster_path
                        }`
                      : noimage
                  }
                  alt=""
                />
                <span>
                  {search.name ||
                    search.title ||
                    search.original_name ||
                    search.original_title}
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TopNav;
