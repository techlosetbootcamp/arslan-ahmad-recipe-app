import React from "react";

interface SeachBarProps {
  className?: string;
  icon?: "lg" | "sm";
}

const SeachBar: React.FC<SeachBarProps> = ({ className, icon = "sm" }) => {
  return (
    <>
      <div
        className={`${className} bg-slate-100 rounded-full flex justify-start items-center gap-2`}
      >
        <img
          className={`${icon == "sm" ? "h-[17.61px]" : "h-[25.11px]"}`}
          src="../src/assets/icons/search.svg"
          alt="search_icon"
        />
        <input
          className="bg-transparent outline-none placeholder:text-slate-400 text-slate-600 w-full"
          type="search"
          placeholder="Search Recipe"
        />
      </div>
    </>
  );
};

export default SeachBar;
