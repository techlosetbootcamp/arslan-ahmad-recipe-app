import React from "react";
import { TagsProps } from "../../types/TagsList";
import { themeColorPalette } from "../../constants/text";

const Tags: React.FC<TagsProps> = ({ tags }) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags?.map((tag, index) => {
        const randomColor =
          themeColorPalette[
            Math.floor(Math.random() * themeColorPalette.length)
          ];

        return (
          <span
            key={index}
            className="group py-1 px-2 sm:py-2 sm:px-3 border-2 mx-2 flex justify-center items-center gap-1"
            style={{ backgroundColor: randomColor }}
          >
            <span className="text-xl hidden sm:inline-block opacity-0 font-semibold transition-all duration-150 text-slate-600 group-hover:opacity-100">
              #
            </span>
            {tag?.display_name}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
