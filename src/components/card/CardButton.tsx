import React from "react";
import { Link } from "react-router-dom";
import { CardButtonProps } from "../../types/Card";

const CardButtton: React.FC<CardButtonProps> = ({ text, to }) => {
  return (
    <>
      <Link
        to={to}
        className="bg-pri font-bold text-lg lg:text-[20.71px] px-3 py-1  lg:px-6 lg:py-2 w-fit rounded-full lg:mt-4"
      >
        {text}
      </Link>
    </>
  );
};

export default CardButtton;
