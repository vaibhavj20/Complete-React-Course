// import React, { useState } from "react";
// import Card from "./Card";
// import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// const Testimonials = (props) => {
//   let reviews = props.reviews;
//   const [index, setIndex] = useState(0);

//   function leftShiftHandler() {
//     if (index - 1 < 0) {
//       setIndex(reviews.length - 1);
//     } else {
//       setIndex(index - 1);
//     }
//   }

//   function rightShiftHandler() {
//     if (index + 1 >= reviews.length) {
//       setIndex(0);
//     } else {
//       setIndex(index + 1);
//     }
//   }

//   function surpriseHandler() {
//     let randomIndex = Math.floor(Math.random() * reviews.length);
//     setIndex(randomIndex);
//   }

//   return (
//     <div className="w-[45vw] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 shadow-md hover:shadow-xl rounded-md">
//       <Card review={reviews[index]} />
//       <div className=" flex text-3xl mt-10 gap-3 text-red-800 font-bold text-center mx-auto">
//         <button
//           onClick={leftShiftHandler}
//           className="cursor-pointer hover:text-red-600"
//         >
//           <FiChevronLeft />
//         </button>

//         <button
//           onClick={rightShiftHandler}
//           className="cursor-pointer hover:text-red-600"
//         >
//           <FiChevronRight />
//         </button>
//       </div>
//       <div className="mt-5">
//         <button
//           onClick={surpriseHandler}
//           className="bg-red-800 hover:bg-red-900 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
//         >
//           Surprise Me
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Testimonials;

import React, { useState } from "react";
import Card from "./Card";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Testimonials = (props) => {
  const { reviews } = props;
  const [index, setIndex] = useState(0);

  const leftShiftHandler = () => {
    setIndex((index - 1 + reviews.length) % reviews.length);
  };

  const rightShiftHandler = () => {
    setIndex((index + 1) % reviews.length);
  };

  const surpriseHandler = () => {
    const randomIndex = Math.floor(Math.random() * reviews.length);
    setIndex(randomIndex);
  };

  return (
    <div className="w-full max-w-[85vw] md:max-w-[65vw] lg:max-w-[55vw] xl:max-w-[60vw] bg-white flex flex-col justify-center items-center mt-8 p-4 md:p-6 lg:p-8 xl:p-10 shadow-md rounded-md">
      <Card review={reviews[index]} />
      <div className="flex mt-6 gap-3 text-3xl text-red-800 font-bold justify-center">
        <button
          onClick={leftShiftHandler}
          className="cursor-pointer hover:text-red-600"
        >
          <FiChevronLeft />
        </button>
        <button
          onClick={rightShiftHandler}
          className="cursor-pointer hover:text-red-600"
        >
          <FiChevronRight />
        </button>
      </div>
      <div className="mt-4">
        <button
          onClick={surpriseHandler}
          className="bg-red-800 hover:bg-red-900 transition-all duration-200 cursor-pointer px-8 py-2 rounded-md font-bold text-white text-lg"
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
};

export default Testimonials;
