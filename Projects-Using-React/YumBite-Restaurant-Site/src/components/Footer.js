// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "..logo-img/logo3.png";

// const Footer = () => {
//   const handleEmailSubmit = (event) => {
//     event.preventDefault();
//     alert("Thank you for subscribing!");
//   };

//   return (
//     <footer className="footer">
//       <div className="container">
//         <div className="row">
//           <div className="col">
//             <div className="footer-logo">
//               <img src={logo} alt="Your Logo" />
//               <span>GoYum</span>
//             </div>
//             <p className="footer-description">
//               Delivering Deliciousness to Your Doorstep.
//             </p>
//           </div>
//           <div className="col">
//             <h4 className="footer-title">Links</h4>
//             <ul className="footer-list">
//               <li>
//                 <Link to="/about">About Us</Link>
//               </li>
//               <li>
//                 <Link to="/contact">Contact Us</Link>
//               </li>
//               <li>
//                 <Link to="/faq">FAQ</Link>
//               </li>
//               <li>
//                 <a href="/about">Blog</a>
//               </li>
//             </ul>
//           </div>
//           <div className="col">
//             <h4 className="footer-title">Stay Connected</h4>
//             <p className="footer-email">
//               Subscribe to our newsletter for updates and promotions.
//             </p>
//             <form onSubmit={handleEmailSubmit} className="footer-form">
//               <input
//                 type="email"
//                 name="email"
//                 placeholder="Enter your email"
//                 required
//               />
//               <button type="submit">Subscribe</button>
//             </form>
//           </div>
//         </div>
//       </div>
//       <div className="copyright">
//         <p>&copy; {new Date().getFullYear()} GoYum | All Rights Reserved.</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo-img/logo3.png";

const Footer = () => {
  const handleEmailSubmit = (event) => {
    event.preventDefault();
    alert("Thank you for subscribing!");
  };

  return (
    <footer className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-6">
        <div className="flex flex-col items-start">
          <div className="flex items-center mb-4">
            <img src={logo} alt="Your Logo" className="h-16 w-auto" />
          </div>
          <p className="text-gray-600">
            Delivering Deliciousness to Your Doorstep.
          </p>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">Links</h4>
          <ul className="space-y-2">
            <li>
              <Link
                to="/about"
                className="text-gray-600 hover:text-Medium-Brown transition duration-300"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="text-gray-600 hover:text-Medium-Brown transition duration-300"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/faq"
                className="text-gray-600 hover:text-Medium-Brown transition duration-300"
              >
                FAQ
              </Link>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-600 hover:text-Medium-Brown transition duration-300"
              >
                Blog
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-lg font-semibold mb-4 text-gray-800">
            Stay Connected
          </h4>
          <p className="text-gray-600 mb-4">
            Subscribe to our newsletter for updates and promotions.
          </p>
          <form onSubmit={handleEmailSubmit} className="flex">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="p-3 border border-gray-300 rounded-l bg-white text-gray-800 flex-grow focus:outline-none focus:border-Medium-Brown"
            />
            <button
              type="submit"
              className="bg-Medium-Brown text-white p-3 rounded-r hover:bg-orange-600 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
      <div className="mt-8 border-t border-gray-300 pt-4 text-center">
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} YumBite | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
