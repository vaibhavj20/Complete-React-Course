import React from "react";

const CardsShimmer = () => {
  return (
    <div className="animate-pulse w-full h-full overflow-y-hidden">
      <div className="flex items-center bg-[#2b2a31] p-4 mb-4 h-[110px] animate-pulse">
        <div className="ml-5 w-12 h-12 bg-[#454449] rounded-full "></div>
        <div className="w-[190px] ml-6 h-10 bg-[#454449] rounded mr-5 "></div>
        <div className="w-[600px] ml-6 h-10 bg-[#454449] rounded mr-6 "></div>
        <div className="ml-6 w-[200px] h-10 bg-[#454449] rounded "></div>
        <div className="ml-6 w-[200px] h-10 bg-[#454449] rounded "></div>
      </div>

      <div className="flex flex-wrap justify-center w-full p-8 bg-[#1F1E24]">
        {Array(10)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="w-60 m-4 bg-[#2b2a31] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 relative"
            >
              <div className="h-[320px] w-full bg-[#2b2a31] animate-pulse"></div>

              <div className="p-6 bg-[#454449] relative">
                <div className="h-6 w-3/4 bg-[#3e3c46] animate-pulse mb-2"></div>
                <div className="h-4 w-1/2 bg-[#3e3c46] animate-pulse"></div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CardsShimmer;
