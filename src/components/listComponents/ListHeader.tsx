import React from "react";
import { ListHeaderProps } from "../../types/ListHeader";

const ListHeader: React.FC<ListHeaderProps> = ({
  text,
  align = "left",
  className = "",
}) => {
  return (
    <h2 className={`text-xl font-bold my-6 text-${align} ${className}`}>
      {text}
    </h2>
  );
};

export default ListHeader;
