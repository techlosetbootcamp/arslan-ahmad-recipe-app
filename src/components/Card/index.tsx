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
          ? "md:max-w-[403px] md:flex-col"
          : "md:max-w-[1187px] md:flex-row md:h-[322px]"
      } flex rounded-[33px] h-[500.68px] overflow-hidden shadow-sm flex-col max-w-[380px] bg-[#F5F2F2]`}
    >
      <img src={imageSrc} className={`object-cover w-full h-[212.04px] ${type !== 'vertical' && 'md:h-full md:max-w-[403px] md:w-[45%]'}`} alt="featured_image" />
      <div className={`flex flex-col text-start px-4 pt-2 h-[261.64px] justify-between ${type === 'vertical'? 'px-4 pt-2 h-[261.64px] justify-between' : 'md:h-[212.04px] md:max-w-[784px] md:w-[55%] justify-center md:pt-12 md:px-12'}`}>
        <div>
          <h3 className="text-[25px] md:text-[30px] font-[700]">{head}</h3>
          <p className="text-lg sm:text-[20px] text-slate-600 mt-2">
            {text}
          </p>
        </div>
        <CardButtton text={buttonText} to={buttonLink} />
      </div>
    </div>
  );
};

export default Card;
