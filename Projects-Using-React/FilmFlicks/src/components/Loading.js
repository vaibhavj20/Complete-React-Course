// import React from "react";

// const Loading = () => {
//   return (
//     <div>
//       <div className="w-[20%] h-full ">
//         {/*left container sidenav */}
//         <div className="">Hello Guys</div>
//         <p></p>
//         <p></p>
//         <p></p>
//         <p></p>
//         <p></p>

//         <hr></hr>
//         <div></div>
//         <p></p>
//         <p></p>
//       </div>
//       {/*right container */}
//       <div className="w-[80%] ">
//         <div></div>
//         <div>
//           <p></p>
//           <p></p>
//           <p></p>
//           <p></p>
//         </div>
//         <div>
//           <div></div>
//           <div></div>
//         </div>
//         <div>
//           <p></p>
//           <p></p>
//           <p></p>
//           <p></p>
//           <p></p>
//           <p></p>
//           <p></p>
//           <p></p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Loading;
import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen">
      {/* Left Container (SideNav) */}
      <div className="w-[20%] h-full border-r-2 border-zinc-400 p-8">
        {/* Logo placeholder */}
        <div className="h-12 w-12 bg-gray-300 rounded-full mb-4 animate-pulse"></div>

        {/* Navigation buttons placeholder */}
        <div className="space-y-2">
          <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
        </div>

        {/* Divider */}
        <hr className="border-none h-[1px] bg-zinc-400 my-4" />

        {/* Website information placeholder */}
        <div className="space-y-2">
          <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
          <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
        </div>
      </div>

      {/* Right Container (Main Content Area) */}
      <div className="flex-1 h-full overflow-auto">
        {/* Placeholder content */}
        <div className="p-8">
          {/* Section 1 */}
          <div className="mb-8">
            <div className="h-12 w-12 bg-gray-300 rounded-full mb-4 animate-pulse"></div>
            <div className="h-8 w-full bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Section 2 */}
          <div className="mb-8">
            <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
            <div className="h-8 bg-gray-300 rounded animate-pulse"></div>
          </div>

          {/* Section 3 */}
          <div className="flex space-x-5">
            <div className="w-[150px] h-[200px] bg-gray-300 rounded overflow-hidden animate-pulse"></div>
            <div className="w-[150px] h-[200px] bg-gray-300 rounded overflow-hidden animate-pulse"></div>
            <div className="w-[150px] h-[200px] bg-gray-300 rounded overflow-hidden animate-pulse"></div>
            {/* Add more placeholders as needed */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
