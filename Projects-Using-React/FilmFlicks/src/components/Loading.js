import React from "react";

const Loading = () => {
  return (
    <div className="animate-pulse w-full h-full flex">
      {/* Left Part (Search Bar) */}
      <div className="w-1/5 h-full bg-gray-800 p-4 flex flex-col justify-center items-center">
        <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
        <div className="w-20 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-24 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-40 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-0.5 bg-gray-300 my-4"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
        <div className="w-1/2 h-4 bg-gray-300 rounded mb-2"></div>
      </div>

      {/* Right Part (Rectangular Container and Cards) */}
      <div className="w-4/5 h-full bg-gray-800 p-4 flex flex-col">
        {/* Rectangular Container */}
        <div className="w-full h-36 bg-gray-300 rounded-lg mb-4"></div>

        {/* Horizontal Line of Cards */}
        <div className="flex flex-wrap justify-between">
          <div className="w-1/4 h-24 bg-gray-300 rounded-lg mb-4"></div>
          <div className="w-1/4 h-24 bg-gray-300 rounded-lg mb-4"></div>
          <div className="w-1/4 h-24 bg-gray-300 rounded-lg mb-4"></div>
          <div className="w-1/4 h-24 bg-gray-300 rounded-lg mb-4"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
