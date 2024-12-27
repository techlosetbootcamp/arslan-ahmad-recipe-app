// components/Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-10 bg-gray-800 z-50 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center w-[45%] aspect-video bg-white rounded-lg shadow-lg">
        <img src="https://cdn.dribbble.com/users/645440/screenshots/3266490/loader-2_food.gif" alt="Loading..." className="object-cover object-center" />
        {/* <p className="mt-4 text-white font-semibold">Loading...</p> */}
      </div>
    </div>
  );
};

export default Loader;
