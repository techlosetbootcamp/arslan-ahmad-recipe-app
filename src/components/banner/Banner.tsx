import React from "react";

interface BannerProps {
  bannerImage: string;
  imageAlt?: string;
  bannerText: string;
}

const Banner:React.FC<BannerProps> = ({bannerImage, bannerText}) => {
  return (
    <div className="relative h-[362px] flex flex-col justify-center items-center gap-4">
      <img
        className="absolute top-0 left-0 w-full h-full object-center object-cover -z-10"
        src={bannerImage}
        alt="Banner Image"
      />
      <div className="text-[40px] leading-[48.41px] text-white w-full h-full bg-gray-900/50 z-10 flex justify-center items-center font-bold p-10">
      <p className="min-w-[md] lg:w-[60%] text-center">
        {bannerText}
      </p>
      </div>
    </div>
  );
};

export default Banner;