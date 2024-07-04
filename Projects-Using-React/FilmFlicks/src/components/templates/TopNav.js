// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const TopNav = () => {
//   const [query, setquery] = useState("");
//   console.log(query);
//   return (
//     <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
//       <i class=" text-zinc-400 text-3xl ri-search-line"></i>
//       <input
//         onChange={(e) => setquery(e.target.value)}
//         value={query}
//         type="text"
//         className="w-[50%] text-zinc-200 mx-10 p-5 text-xl outline-none border-none bg-transparent"
//         placeholder="Search anything"
//       />
//       {query.length > 0 && (
//         <i
//           onClick={() => setquery("")}
//           class="cursor-pointer text-zinc-400 text-3xl ri-close-fill"
//         ></i>
//       )}

//       <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded">
//         <Link className="font-semibold text-zinc-600 bg-zinc-200 w-[100%] p-10 flex justify-start  border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300">
//           <img src="" alt="" />
//           <span>Hello Everyone</span>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TopNav;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const TopNav = () => {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <div className="w-full h-[10vh] relative flex justify-start items-center ml-[15%]">
      <i className="text-zinc-400 text-xl ri-search-line"></i>
      <div className="flex items-center w-[50%] mx-10">
        <input
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          type="text"
          className="w-full text-zinc-200 p-2 text-lg outline-none border-none bg-transparent"
          placeholder="Search anything"
        />
        {query.length > 0 && (
          <i
            onClick={() => setQuery("")}
            className="cursor-pointer text-zinc-400 text-xl ri-close-fill ml-2"
          ></i>
        )}
      </div>
      <div className="absolute w-[50%] max-h-[50vh] bg-zinc-200 top-[90%] overflow-auto rounded shadow-lg">
        <Link className="font-semibold text-zinc-600 bg-zinc-200 w-full p-4 flex justify-start items-center border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300">
          <img src="" alt="" className="mr-2" />
          <span>Hello Everyone</span>
        </Link>
      </div>
    </div>
  );
};

export default TopNav;
