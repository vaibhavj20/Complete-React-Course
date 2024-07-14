import React from "react";

const Loading = () => {
  return (
    <div className="flex h-screen w-screen bg-[#1F1E24]">
      {/* Side Navigation Shimmer */}
      <div className="w-[20%] h-full border-r-2 border-zinc-700 p-8">
        <div className="w-3/4 h-10 bg-[#3D3B42] animate-pulse mb-4"></div>
        <div className="flex flex-col text-lg gap-4">
          <div className=" mt-5 w-[210px] h-6 bg-[#3D3B42] rounded animate-pulse mb-3"></div>
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="w-[200px] h-8 bg-[#3D3B42] rounded animate-pulse mb-3"
            ></div>
          ))}
          <hr className="border-none h-[1px] bg-zinc-700 mb-3" />
          <div className="w-[210px] h-6 bg-[#3D3B42] rounded animate-pulse mb-3"></div>
          {[...Array(2)].map((_, i) => (
            <div
              key={i}
              className="w-[200px] h-8 bg-[#3D3B42] rounded animate-pulse mb-3"
            ></div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto">
        <div className="w-full flex flex-col items-center justify-start ">
          {/* Top Navigation Shimmer */}
          <nav className="w-full text-white flex justify-center items-center gap-4 mb-5 mt-6">
            <div className="w-12 h-12 bg-[#3D3B42] rounded-full animate-pulse"></div>
            <div className="w-1/2 h-12 bg-[#3D3B42] rounded-full animate-pulse"></div>
          </nav>

          {/* Header Shimmer */}
          <div className="w-full h-[46vh] flex flex-col justify-center items-start  pt-[2%] mb-8 bg-[#191819]">
            <div className="w-[70%] h-12 bg-[#3D3B42] rounded animate-pulse mb-4 ml-6"></div>
            <div className="w-[60%] h-6 bg-[#3D3B42] rounded animate-pulse mb-3  ml-6"></div>
            <div className="w-[40%] h-6 bg-[#3D3B42] rounded animate-pulse mb-5  ml-6"></div>
            <div className="w-32 h-10 bg-[#3D3B42] rounded animate-pulse  ml-6"></div>
          </div>

          <div className="flex space-x-[640px] ">
            <div className="w-[250px] h-11 bg-[#3D3B42] rounded"></div>
            <div className="w-[290px] h-11 bg-[#3D3B42] rounded"></div>
          </div>

          <div className="w-full mt-[4vh]">
            <div className="w-full flex overflow-x-auto p-5">
              {[...Array(5)].map((_, index) => (
                <div
                  key={index}
                  className="min-w-[19%] bg-[#3D3B42] mr-5 mb-5 overflow-hidden rounded-lg flex flex-col animate-pulse"
                >
                  <div className="w-full h-[200px] bg-[#3D3B42] rounded-t-lg"></div>
                  <div className="p-3 flex-1"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
