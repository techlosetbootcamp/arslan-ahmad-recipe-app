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
          ? "lg:max-w-[403px] lg:flex-col h-[500.68px]"
          : "lg:max-w-[1187px] lg:flex-row"
      } flex rounded-[33px] overflow-hidden shadow-sm flex-col max-w-[380px] bg-[#F5F2F2]`}
    >
      <img src={imageSrc} className={`object-cover w-full ${type === 'vertical'? 'h-[212.04px]' : 'w-[403px]'}`} alt="featured_image" />
      <div className={`flex flex-col text-start ${type === 'vertical'? 'px-4 pt-2 h-[261.64px] justify-between' : 'h-[212.04px] w-[784px] justify-center p-12'}`}>
        <div>
          <h3 className="text-[32px] font-[700]">{head}</h3>
          <p className="text-[20px] text-slate-600 mt-2">
            {text}
          </p>
        </div>
        <CardButtton text={buttonText} to={buttonLink} />
      </div>
    </div>
  );
};

export default Card;
