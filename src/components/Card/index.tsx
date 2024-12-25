import React from "react";
import CardButtton from "../CardButton";

interface CardProps {
  type?: "vertical" | "horizontal";
  imageSrc: string;
  head: string;
  text: string;
  buttonText?: string;
  buttonLink: string;
}

const Card: React.FC<CardProps> = ({ type = "vertical", imageSrc, text, head, buttonLink, buttonText = "View Recipe" }) => {
  return (
    <div
      className={`${
        type === "vertical"
          ? "lg:max-w-[403px] lg:flex-col"
          : "lg:max-w-[1187px] lg:flex-row"
      } flex rounded-[33px] overflow-hidden shadow-sm flex-col max-w-[380px]`}
    >
      <img src={imageSrc} className="object-cover" alt="featured_image" />
      <div className="p-8 flex flex-col text-start gap-4 bg-[#F5F2F2]">
        <div>
          <h3 className="text-[32px] font-[700] mt-4">{head}</h3>
          <p className="text-[20.71px] text-slate-600 mt-2">
            {text}
          </p>
        </div>
        <CardButtton text={buttonText} to={buttonLink} />
      </div>
    </div>
  );
};

export default Card;
