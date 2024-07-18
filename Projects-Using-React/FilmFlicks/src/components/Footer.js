// import React from "react";
// import { Link } from "react-router-dom";

// const Footer = () => {
//   const currentYear = new Date().getFullYear();

//   return (
//     <footer className="bg-[#16161A] text-secondary static bottom-0">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
//         <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {/* App Name and Information */}
//           <div className="mb-8 md:mb-0">
//             <h2 className="text-2xl font-bold text-secondary mb-4">
//               FilmFlicks
//             </h2>
//             <p className="text-sm text-gray-400">
//               Your ultimate destination for movies and TV shows.
//             </p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>
//                 <Link to="/" className="hover:text-secondary transition-colors">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/movie"
//                   className="hover:text-secondary transition-colors"
//                 >
//                   Movies
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/tv"
//                   className="hover:text-secondary transition-colors"
//                 >
//                   TV Shows
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/about"
//                   className="hover:text-secondary transition-colors"
//                 >
//                   About Us
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Legal Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Legal</h3>
//             <ul className="space-y-2 text-gray-400">
//               <li>
//                 <Link
//                   to="/terms"
//                   className="hover:text-secondary transition-colors"
//                 >
//                   Terms of Service
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/privacy"
//                   className="hover:text-secondary transition-colors"
//                 >
//                   Privacy Policy
//                 </Link>
//               </li>
//               <li>
//                 <Link
//                   to="/cookies"
//                   className="hover:text-secondary transition-colors"
//                 >
//                   Cookie Policy
//                 </Link>
//               </li>
//             </ul>
//           </div>

//           {/* Social Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
//             <div className="flex space-x-4">
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-xl"
//               >
//                 <i className="ri-facebook-fill"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-xl"
//               >
//                 <i className="ri-twitter-fill"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-xl"
//               >
//                 <i className="ri-instagram-fill"></i>
//               </a>
//               <a
//                 href="#"
//                 className="text-gray-400 hover:text-white transition-colors text-xl"
//               >
//                 <i className="ri-youtube-fill"></i>
//               </a>
//             </div>
//           </div>
//         </div>

//         {/* Copyright */}
//         <div className="border-t border-gray-700 mt-8 text-sm text-center text-gray-500">
//           <p className="py-6">
//             &copy; {currentYear} FilmFlicks. All rights reserved.
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#16161A] text-white static bottom-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* App Name and Information */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold text-white mb-4">FilmFlicks</h2>
            <p className="text-[15px] text-gray-400">
              Your ultimate destination for movies and TV shows.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/movie"
                  className="hover:text-white transition-colors"
                >
                  Movies
                </Link>
              </li>
              <li>
                <Link to="/tv" className="hover:text-white transition-colors">
                  TV Shows
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Legal</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link
                  to="/terms"
                  className="hover:text-white transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  to="/privacy"
                  className="hover:text-white transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  to="/cookies"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Connect With Us
            </h3>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <i className="ri-facebook-fill"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <i className="ri-twitter-fill"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <i className="ri-instagram-fill"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-lg"
              >
                <i className="ri-youtube-fill"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 mt-8 text-[16px] text-center text-gray-400">
          <p className="py-6">
            &copy; {currentYear} FilmFlicks. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
