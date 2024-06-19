// import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

// const Card = (props) => {
//   let review = props.review;
//   return (
//     <div className="flex flex-col md:relative">
//       <div className="absolute top-[-7rem] z-[10] mx-auto">
//         <img
//           src={review.image}
//           className="rounded-full w-[140px] h-[140px] z-25 object-fill"
//         />
//         <div className="w-[140px] h-[140px] bg-red-900 rounded-full absolute top-[-6px] z-[-10] left-[10px]"></div>
//       </div>

//       <div className="text-center mt-7">
//         <p className="tracking-wider font-bold text-2xl capitalize">
//           {review.name}
//         </p>
//         <p className=" text-red-500 uppercase text-sm mt-1">{review.job}</p>
//       </div>

//       <div className="text-red-700 mx-auto mt-5">
//         <FaQuoteLeft />
//       </div>

//       <div className="text-center mt-4 text-slate-500 ">{review.text}</div>
//       <div className="text-red-700 mx-auto mt-5">
//         <FaQuoteRight />
//       </div>
//     </div>
//   );
// };

// export default Card;

import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";

const Card = (props) => {
  const { review } = props;

  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-[-80px]">
        <img
          src={review.image}
          className="rounded-full w-[140px] h-[140px] object-cover border-4 border-red-900"
          alt={review.name}
        />
      </div>

      <div className="text-center mt-16">
        <p className="tracking-wider font-bold text-2xl capitalize mt-4">
          {review.name}
        </p>
        <p className="text-red-500 uppercase text-sm mt-1">{review.job}</p>
      </div>

      <div className="text-red-700 mx-auto mt-4">
        <FaQuoteLeft />
      </div>

      <div className="text-center mt-2 text-slate-500 px-4">
        <p className="leading-relaxed">{review.text}</p>
      </div>

      <div className="text-red-700 mx-auto mt-4">
        <FaQuoteRight />
      </div>
    </div>
  );
};

export default Card;
