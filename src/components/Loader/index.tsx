// components/Loader.tsx
import React from "react";

const Loader: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full bg-opacity-10 bg-gray-800 z-50 flex justify-center items-center">
      <div className="flex flex-col items-center justify-center  w-[90%] max-w-[790px] aspect-video bg-white rounded-lg shadow-lg overflow-hidden">
        <img src="/assets/loader.gif" alt="Loading..." className="object-cover object-center" />
      </div>
    </div>
  );
};

export default Loader;
