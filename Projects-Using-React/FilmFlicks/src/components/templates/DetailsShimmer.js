import React from "react";

const DetailsShimmer = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col items-center justify-start px-4 py-10 overflow-y-hidden bg-[#1F1E24]"
      // style={{
      //   background:
      //     "linear-gradient(rgba(0,0,0,.4),rgba(0,0,0,.7),rgba(0,0,0,.9))",
      //   backgroundSize: "cover",
      // }}
    >
      {/* Navigation */}
      <nav className="w-full max-w-7xl text-white flex justify-start items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#2c2b2f] rounded-full animate-pulse"></div>
        <div className="w-12 h-12 bg-[#2c2b2f] rounded-full animate-pulse"></div>
        <div className="w-12 h-12 bg-[#2c2b2f] rounded-full animate-pulse"></div>
        <div className="w-12 h-12 bg-[#2c2b2f] rounded-full animate-pulse"></div>
      </nav>

      {/* Movie Details Container */}
      <div className="w-full max-w-7xl bg-black bg-opacity-70 p-8 rounded-lg flex flex-col md:flex-row items-start gap-8 relative">
        <div className="w-64 h-96 bg-[#2c2b2f] rounded-lg animate-pulse"></div>
        <div className="flex flex-col space-y-4 flex-1">
          <div className="bg-[#2c2b2f] rounded animate-pulse w-2/3 h-12"></div>
          <div className="bg-[#2c2b2f] rounded animate-pulse w-1/2 h-6"></div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="w-14 h-14 bg-[#2c2b2f] rounded-full animate-pulse"></div>
            <div className="flex flex-col items-center">
              <span className="bg-[#2c2b2f] rounded animate-pulse w-14 h-6 mb-2"></span>
              <span className="bg-[#2c2b2f] rounded animate-pulse w-14 h-6"></span>
            </div>
            <div className="bg-[#2c2b2f] rounded animate-pulse w-2/3 h-6"></div>
          </div>
          <div className="bg-[#2c2b2f] rounded animate-pulse w-full h-6 mt-2"></div>
          <div className="bg-[#2c2b2f] rounded animate-pulse w-full h-24"></div>
          <div className="mt-5 p-1.5 w-[20%] rounded flex">
            <span className="w-[170px] bg-[#2c2b2f] rounded animate-pulse h-10"></span>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <hr className="mt-10 mb-5 h-0.5 bg-[#2c2b2f]" />
      <div className="bg-[#2c2b2f] rounded animate-pulse w-[250px] h-9 mb-6"></div>
      <div className="w-full max-w-7xl animate-pulse">
        <div className="w-full flex overflow-x-auto mb-5 p-5">
          {[1, 2, 3, 4, 5].map((_, index) => (
            <div
              key={index}
              className="min-w-[19%] bg-[#2c2b2f] mr-5 mb-5 overflow-hidden rounded-lg flex flex-col"
            >
              <div className="w-full h-[150px] bg-[#2c2b2f] rounded-t-lg animate-pulse"></div>
              <div className="p-3 flex-1">
                <div className="mb-2 bg-[#2c2b2f] rounded animate-pulse h-6"></div>
                <div className="bg-[#2c2b2f] rounded animate-pulse"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DetailsShimmer;
