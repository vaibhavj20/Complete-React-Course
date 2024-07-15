import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen w-screen flex flex-col items-center justify-center bg-[#1F1E24] text-white ">
      <div className="bg-[#4f4f4f66] bg-opacity-70 p-12 rounded-lg text-center ">
        <h1 className="text-6xl font-black mb-4">404</h1>
        <p className="text-3xl font-semibold">Page Not Found</p>
        <p className="mt-2 text-zinc-400">
          The page you are looking for doesn't exist or has been moved.
        </p>
        <button
          onClick={() => navigate(-1)}
          className="mt-5 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded"
        >
          Go Back
        </button>
      </div>
    </div>
  );
};

export default NotFound;
