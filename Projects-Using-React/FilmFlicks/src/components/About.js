// import React from "react";
// import { Link, useNavigate } from "react-router-dom";

// const AboutUs = () => {
//   document.title = "FilmBox | About";
//   const navigate = useNavigate();

//   return (
//     <div className="bg-[#1F1E24] text-white min-h-screen">
//       <div className="max-w-[88%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         {/* Back Button */}
//         <button
//           onClick={() => navigate(-1)}
//           className="text-xl font-bold p-2 hover:text-purple-400 ri-arrow-left-line cursor-pointer rounded-full bg-black bg-opacity-50"
//         />

//         {/* Title Section */}
//         <h1 className="text-2xl sm:text-4xl font-semibold text-center mt-4 sm:mt-0 mb-6 flex gap-x-5 items-center justify-center">
//           <span>About</span>
//           <span className="font-bold text-purple-400 inline-flex gap-x-2 items-center">
//             <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
//             FilmBox
//           </span>
//         </h1>

//         {/* Introduction */}
//         <div className="mb-12">
//           <p className="text-lg text-[15px] text-white text-medium text-center max-w-[58rem] mx-auto">
//             FilmBox is your ultimate destination for exploring the world of
//             cinema and television. We provide a comprehensive platform for movie
//             and TV show enthusiasts to discover, track, and enjoy their favorite
//             content.
//           </p>
//         </div>

//         {/* Features Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="flex flex-col bg-zinc-900 rounded-lg shadow-md p-6">
//             <i className="ri-film-fill text-3xl mb-4 text-purple-400"></i>
//             <h2 className="text-xl font-bold mb-2">Extensive Movie Database</h2>
//             <p className="text-gray-400">
//               Access information on thousands of movies, from classics to the
//               latest releases.
//             </p>
//           </div>

//           <div className="flex flex-col bg-zinc-900 rounded-lg shadow-md p-6">
//             <i className="ri-tv-2-fill text-3xl mb-4 text-purple-400"></i>
//             <h2 className="text-xl font-bold mb-2">TV Show Tracker</h2>
//             <p className="text-gray-400">
//               Keep up with your favorite TV shows, track episodes, and discover
//               new series.
//             </p>
//           </div>

//           <div className="flex flex-col bg-zinc-900 rounded-lg shadow-md p-6">
//             <i className="ri-star-fill text-3xl mb-4 text-purple-400"></i>
//             <h2 className="text-xl font-bold mb-2">Ratings & Reviews</h2>
//             <p className="text-gray-400">
//               Read and contribute to user ratings and reviews for movies and TV
//               shows.
//             </p>
//           </div>

//           <div className="flex flex-col bg-zinc-900 rounded-lg shadow-md p-6">
//             <i className="ri-community-fill text-3xl mb-4 text-purple-400"></i>
//             <h2 className="text-xl font-bold mb-2">Community</h2>
//             <p className="text-gray-400">
//               Join a community of film enthusiasts, share recommendations, and
//               discuss your favorite content.
//             </p>
//           </div>
//         </div>

//         {/* Mission Statement */}
//         <div className="mt-16">
//           <h2 className="text-2xl font-semibold text-center mb-4">
//             Our Mission
//           </h2>
//           <p className="text-center text-[15px] text-gray-400 max-w-3xl mx-auto">
//             At FilmBox, our mission is to connect people through the power of
//             storytelling in film and television. We strive to create a platform
//             that not only informs but also inspires a deeper appreciation for
//             the art of cinema and TV.
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "./Footer";

const AboutUs = () => {
  document.title = "FilmFlicks | About";
  const navigate = useNavigate();

  return (
    <div className="bg-[#1F1E24] text-white min-h-screen">
      <div className="max-w-[88%] mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="text-xl font-bold p-2 hover:text-purple-400 ri-arrow-left-line cursor-pointer rounded-full bg-black bg-opacity-50"
        />

        {/* Title Section */}
        <h1 className="text-2xl sm:text-3xl font-semibold text-center mt-4 sm:mt-0 mb-6 flex gap-x-5 items-center justify-center">
          <span>About</span>
          <span className="font-bold text-[#6556CD] inline-flex  items-center">
            <i className="text-[#6556CD] ri-tv-fill mr-2"></i>
            FilmFlicks
          </span>
        </h1>

        {/* Introduction */}
        <div className="mb-12">
          <p className="text-base sm:text-lg text-white text-medium text-center max-w-[58rem] mx-auto">
            FilmFlicks is your ultimate destination for exploring the world of
            cinema and television. We provide a comprehensive platform for movie
            and TV show enthusiasts to discover, track, and enjoy their favorite
            content.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex flex-col bg-zinc-900 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
            <i className="ri-film-fill text-3xl mb-4 text-[#6556CD]"></i>
            <h2 className="text-xl font-bold mb-2">Extensive Movie Database</h2>
            <p className="text-gray-400 text-[16px]">
              Access information on thousands of movies, from classics to the
              latest releases.
            </p>
          </div>

          <div className="flex flex-col bg-zinc-900 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
            <i className="ri-tv-2-fill text-3xl mb-4 text-[#6556CD]"></i>
            <h2 className="text-xl font-bold mb-2">TV Show Tracker</h2>
            <p className="text-gray-400 text-[16px]">
              Keep up with your favorite TV shows, track episodes, and discover
              new series.
            </p>
          </div>

          <div className="flex flex-col bg-zinc-900 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
            <i className="ri-star-fill text-3xl mb-4 text-[#6556CD]"></i>
            <h2 className="text-xl font-bold mb-2">Ratings & Reviews</h2>
            <p className="text-gray-400 text-[16px]v">
              Read and contribute to user ratings and reviews for movies and TV
              shows.
            </p>
          </div>

          <div className="flex flex-col bg-zinc-900 rounded-lg shadow-md p-6 transform hover:scale-105 transition duration-300">
            <i className="ri-community-fill text-3xl mb-4 text-[#6556CD]"></i>
            <h2 className="text-xl font-bold mb-2">Community</h2>
            <p className="text-gray-400 text-[16px]">
              Join a community of film enthusiasts, share recommendations, and
              discuss your favorite content.
            </p>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16">
          <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4">
            Our Mission
          </h2>
          <p className="text-center text-base sm:text-lg text-white max-w-3xl mx-auto">
            At FilmFlicks, our mission is to connect people through the power of
            storytelling in film and television. We strive to create a platform
            that not only informs but also inspires a deeper appreciation for
            the art of cinema and TV.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
