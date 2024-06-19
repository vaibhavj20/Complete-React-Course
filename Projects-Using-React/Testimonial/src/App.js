// import Testimonials from "./components/Testimonials";
// import reviews from "./data";

// function App() {
//   return (
//     <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200 ">
//       <div className="text-center">
//         <h1 className="text-4xl font-bold ">Our Testimonials</h1>
//         <div className="bg-red-800 h-[4px] w-[140px] mt-1 mx-auto"></div>
//         <Testimonials reviews={reviews} />
//       </div>
//     </div>
//   );
// }

// export default App;

import Testimonials from "./components/Testimonials";
import reviews from "./data";

function App() {
  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">
      <div className="text-center mb-12 sm:mb-10 lg:mb-10 xl:mb-10">
        <h1 className="text-4xl font-bold">Our Testimonials</h1>
        <div className="bg-red-800 h-[4px] w-[140px] mt-1 mx-auto"></div>
      </div>
      <Testimonials reviews={reviews} />
    </div>
  );
}

export default App;
