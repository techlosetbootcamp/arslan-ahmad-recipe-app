import React from "react";
import { BannerProps } from "../../types/Banner";

const Banner: React.FC<BannerProps> = ({
  bannerImage,
  bannerText,
  className,
}) => {
  return (
    <div
      className={`relative ${className} flex flex-col justify-center items-center gap-4`}
    >
      <img
        className="absolute top-0 left-0 w-full h-full object-center object-cover -z-10"
        src={bannerImage}
        alt="Banner Image"
      />
      <div className="text-[40px] leading-[48.41px] text-white w-full h-full bg-gray-900/60 z-10 flex justify-center items-center font-bold p-10">
        <p className="min-w-[md] lg:w-[60%] text-center">{bannerText}</p>
      </div>
    </div>
  );
};

export default Banner;
