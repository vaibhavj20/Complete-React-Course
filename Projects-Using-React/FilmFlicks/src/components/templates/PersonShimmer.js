import React from "react";

const PersonShimmer = () => {
  return (
    <div className="px-[10%] w-screen h-[250vh] bg-[#1F1E24]">
      <nav className="h-[10vh] w-full max-w-7xl  flex justify-start items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-[#2c2b2f] rounded-full animate-pulse"></div>
      </nav>

      <div className="w-full flex">
        <div className="w-[30%]">
          <div className="shadow-lg rounded-lg h-[96vh] md:h-[50vh] bg-[#2c2b2f] animate-pulse" />
          <hr className="w-[260px] mt-10 mb-5 border-none h-[2px] bg-[#2c2b2f] animate-pulse" />
          <div className="text-xl text-white flex gap-x-5">
            <div className="rounded-full bg-[#2c2b2f] animate-pulse w-12 h-12" />
            <div className="rounded-full bg-[#2c2b2f] animate-pulse w-12 h-12" />
            <div className="rounded-full bg-[#2c2b2f] animate-pulse w-12 h-12" />
            <div className="rounded-full bg-[#2c2b2f] animate-pulse w-12 h-12" />
          </div>
          <div className=" my-5 animate-pulse" />
          <div className=" animate-pulse" />
          <div className=" bg-[#2c2b2f] animate-pulse h-5 w-32 rounded-md" />
          <div className=" mt-3 animate-pulse" />
          <div className="bg-[#2c2b2f] animate-pulse h-5 w-32 rounded-md" />
          <div className=" mt-3 animate-pulse" />
          <div className=" bg-[#2c2b2f] animate-pulse h-5 w-32 rounded-md" />
          <div className="  mt-3 animate-pulse" />
          <div className="bg-[#2c2b2f] animate-pulse h-5 w-32 rounded-md" />
          <div className="mt-3 animate-pulse" />
          <div className=" bg-[#2c2b2f] animate-pulse h-5 w-32 rounded-md" />
        </div>

        <div className="w-[70%] ml-[5%]">
          <div className="bg-[#2c2b2f] rounded animate-pulse w-[250px] h-5 mb-6"></div>
          <div className="bg-[#2c2b2f] rounded animate-pulse w-[180px] h-5 mb-6"></div>
          <div className="bg-[#2c2b2f] rounded animate-pulse w-[850px] h-40 mb-6"></div>
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

          {/* List of Items */}
          <div className=" w-full h-[50vh] mt-5 overflow-x-hidden overflow-y-auto shadow-xl border-2 border-zinc-700 p-5">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className="bg-[#2c2b2f] rounded-md p-2 mb-4 animate-pulse h-10"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonShimmer;
