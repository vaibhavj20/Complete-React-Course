import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";

const FullScreenContactForm = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-[#1F1E24] w-full  relative">
      <button
        onClick={() => navigate(-1)}
        className="absolute top-10 left-[150px] text-xl text-white font-bold p-2 hover:text-purple-400 ri-arrow-left-line cursor-pointer rounded-full bg-black bg-opacity-50"
      />
      <div className="flex flex-col items-center justify-center flex-grow mt-32 mb-20">
        <div className="flex flex-col md:flex-row bg-[#2A2A35] rounded-xl shadow-lg w-full max-w-5xl">
          <div className="w-full md:w-1/2 p-8">
            <h2 className="text-3xl font-bold text-white mb-4">Write us</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Name"
                  required
                  className="w-full p-3 bg-[#2A2A35] text-white border-b-2 border-gray-600 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  className="w-full p-3 bg-[#2A2A35] text-white border-b-2 border-gray-600 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  placeholder="Subject"
                  required
                  className="w-full p-3 bg-[#2A2A35] text-white border-b-2 border-gray-600 focus:outline-none focus:border-purple-500"
                />
              </div>
              <div>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Message"
                  rows={4}
                  required
                  className="w-full p-3 bg-[#2A2A35] text-white border-b-2 border-gray-600 focus:outline-none focus:border-purple-500"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-purple-600 text-white font-semibold rounded-md hover:bg-purple-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          <div className="w-full md:w-1/2 p-8 bg-[#2f2e35] rounded-r-xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact Information
            </h2>
            <p className="text-white mb-8">
              We're open for any suggestion or just to have a chat.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-white hover:text-purple-500 transition duration-300">
                <i className="ri-map-pin-line text-2xl mr-3"></i>
                <p>198 West 21th Street, Suite 721 New York NY 10016</p>
              </div>
              <div className="flex items-center text-white hover:text-purple-500 transition duration-300">
                <i className="ri-phone-line text-2xl mr-3"></i>
                <p>+ 1235 2355 98</p>
              </div>
              <div className="flex items-center text-white hover:text-purple-500 transition duration-300">
                <i className="ri-mail-line text-2xl mr-3"></i>
                <p>info@yoursite.com</p>
              </div>
              <div className="flex items-center text-white hover:text-purple-500 transition duration-300">
                <i className="ri-global-line text-2xl mr-3"></i>
                <p>yoursite.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full mt-8">
        <Footer />
      </div>
    </div>
  );
};

export default FullScreenContactForm;
