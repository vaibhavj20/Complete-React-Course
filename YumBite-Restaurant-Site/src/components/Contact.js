// import React from "react";

// const Contact = () => {
//   return (
//     <div>
//       <h1>Contact Us</h1>
//       <h3>Hello Guys!</h3>
//     </div>
//   );
// };

// export default Contact;
import React from "react";

const Contact = () => {
  return (
    <div className=" w-[800px] bg-white p-8 rounded-lg shadow-xl mt-16 mx-auto ">
      <h1 className="text-2xl font-bold mb-6 text-center text-Medium-Brown">
        Contact Us
      </h1>
      <form className="space-y-4">
        <div>
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Name"
            required
          />
        </div>
        <div>
          <label
            htmlFor="mobileNumber"
            className="block text-sm font-medium text-gray-700"
          >
            Mobile Number
          </label>
          <input
            type="tel"
            id="mobileNumber"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            placeholder="Your Mobile Number"
            required
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-gray-700"
          >
            Additional Message
          </label>
          <textarea
            id="message"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
            rows="4"
            placeholder="Your Message"
          ></textarea>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="inline-block px-6 py-2 bg-brown text-white font-medium text-sm leading-tight uppercase rounded shadow-md bg-Medium-Brown hover:bg-Dark-Brown hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 "
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
