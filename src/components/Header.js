import { LOGO_URL } from "../utils/constants";
// import { useState, useEffect } from "react";
import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Header render");
  const onlineStatus = useOnlineStatus();

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);

  const { loggedInUser } = useContext(UserContext);

  return (
    <div className="flex justify-between shadow-md ">
      <div className="logo-container">
        <img className="w-36 pl-[30px]" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
          <li className="p-4">
            {" "}
            <Link to="/">Home</Link>
          </li>
          <li className="p-4">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="p-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="p-4">Cart</li>
          <button
            className="btn"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              // setBtnNameReact("Logout");
              // console.log(btnNameReact);
              // console.log(btnName);
            }}
          >
            {btnNameReact}
          </button>
          <li className="p-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
