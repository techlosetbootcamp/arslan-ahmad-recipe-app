import React from "react";

interface SectionHeaderProps {
  text: string; // The header text
  align?: "left" | "center" | "right"; // Text alignment, default is "left"
  className?: string; // Additional custom classes for styling
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ text, align = "left", className = "" }) => {
  return (
    <h2
      className={`text-xl font-bold my-6 text-${align} ${className}`}
    >
      {text}
    </h2>
  );
};

export default SectionHeader;
