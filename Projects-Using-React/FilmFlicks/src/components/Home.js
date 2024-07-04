import React from "react";
import Sidenav from "./templates/Sidenav";
import TopNav from "./templates/TopNav";

const Home = () => {
  return (
    <>
      <Sidenav />
      <div className="w-[80%] h-full ">
        <TopNav />
      </div>
    </>
  );
};

export default Home;
