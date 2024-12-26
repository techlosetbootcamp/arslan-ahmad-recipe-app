import React from "react";

interface Tag {
  display_name: string;
}

interface TagsProps {
  tags: Tag[];
}

const Tags: React.FC<TagsProps> = ({ tags }) => {
  const colorPalette = [
    "#F6E05E",
    "#ECC94B",
    "#F8D586",
    "#F9E79F",
    "#FFF7C6",
    "#FFEB8D",
  ];

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, index) => {
        const randomColor =
          colorPalette[Math.floor(Math.random() * colorPalette.length)];

        return (
          <span
            key={index}
            className="group py-2 px-3 border-2 mx-2 flex justify-center items-center gap-1"
            style={{ backgroundColor: randomColor }}
          >
            <span className="text-xl opacity-0 font-semibold transition-all duration-150 text-slate-600 group-hover:opacity-100">#</span>
            {tag.display_name}
          </span>
        );
      })}
    </div>
  );
};

export default Tags;
