import React from "react";
import { NOT_FOUND_DETAILS, NOT_FOUND_TEXT } from "../constants/text";

const NotFound: React.FC = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-slate-800 p-8">
      <h1 className="text-3xl md:text-5xl font-bold mb-4 text-yellow-500 underline underline-offset-4">
        {NOT_FOUND_TEXT}
      </h1>
      <p className="text-md sm:text-lg mb-6">{NOT_FOUND_DETAILS}</p>
    </section>
  );
};

export default NotFound;
