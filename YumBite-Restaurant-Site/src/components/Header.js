import { LOGO_URL } from "../utils/constants";
// import { useState, useEffect } from "react";
import { useEffect, useState, useContext } from "react";

import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import img from "../logo-img/logo3.png";

const Header = () => {
  // let btnName = "Login";
  const [btnNameReact, setBtnNameReact] = useState("Login");

  console.log("Header render");
  const onlineStatus = useOnlineStatus();

  // useEffect(() => {
  //   console.log("useEffect called");
  // }, [btnNameReact]);

  const { loggedInUser } = useContext(UserContext);

  //selector - selector is a hook in react
  //subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  return (
    // <div className="flex justify-between shadow-md font-Poppins bg-brown text-white bg-Medium-Brown">
    //   <div className="logo-container">
    //     <img className="w-36 pl-[30px]" src={LOGO_URL} />
    //   </div>
    //   <div className="flex items-center">
    //     <ul className="flex p-4 m-4">
    //       <li className="p-4">Online Status:{onlineStatus ? "✅" : "🔴"}</li>
    //       <li className="p-4">
    //         {" "}
    //         <Link to="/">Home</Link>
    //       </li>
    //       <li className="p-4">
    //         <Link to="/about"> About Us</Link>
    //       </li>
    //       <li className="p-4">
    //         <Link to="/contact">Contact Us</Link>
    //       </li>
    //       <li className="p-4">
    //         <Link to="/grocery">Grocery</Link>
    //       </li>

    //       <li className="p-4 font-bold bg-faintBrown rounded-lg ">
    //         <Link to="/cart">Cart - ({cartItems.length}) items</Link>
    //       </li>

    //       <button
    //         className="btn"
    //         onClick={() => {
    //           btnNameReact === "Login"
    //             ? setBtnNameReact("Logout")
    //             : setBtnNameReact("Login");
    //           // setBtnNameReact("Logout");
    //           // console.log(btnNameReact);
    //           // console.log(btnName);
    //         }}
    //       >
    //         {btnNameReact}
    //       </button>
    //       <li className="p-4 font-bold">{loggedInUser}</li>
    //     </ul>
    //   </div>
    // </div>
    <div className="flex justify-between shadow-md font-Poppins bg-brown  ">
      <div className="logo-container">
        <img className="w-[250px] pl-[30px] mt-7" src={img} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="p-4 font-medium">
            Online Status:{onlineStatus ? "✅" : "🔴"}
          </li>
          <li className="p-4 font-medium">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 font-medium">
            <Link to="/about"> About Us</Link>
          </li>
          <li className="p-4 font-medium">
            <Link to="/contact">Contact Us</Link>
          </li>
          {/* <li className="p-4 font-medium">
            <Link to="/grocery">Grocery</Link>
          </li> */}

          <li className="p-4 font-medium">
            <Link
              to="/cart"
              className=" bg-Medium-Brown p-3 rounded-lg hover:bg-Dark-Brown hover:shadow-lg transition duration-300 ease-in-out text-white "
            >
              <FontAwesomeIcon icon={faCartShopping} className="pr-1" /> Your
              Cart{" "}
              <span className="bg-Faint-Brown m-2 p-2 rounded-full">
                {cartItems.length}
              </span>
            </Link>
          </li>

          {/* <button
            className="btn bg-Dark-Brown rounded-lg p-2 m-1 "
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button> */}
          <button
            className="bg-Medium-Brown rounded-lg pl-2 pr-2 pt-2 pb-2 m-2 hover:bg-Dark-Brown hover:shadow-lg transition duration-300 ease-in-out text-white font-medium"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
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
