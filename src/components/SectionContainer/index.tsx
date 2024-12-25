import React from "react";
import SectionHeader from "../SectionHeader";

interface SectionContainerProps {
  title: string; // The main title of the section
  subtitle?: string; // Optional subtitle
  alignment?: "left" | "center" | "right"; // Text alignment
  className?: string; // Additional custom styles
  children?: React.ReactNode; // Additional content to render below the title and subtitle
}

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  subtitle,
  alignment = "center", // Default alignment is center
  className = "",
  children,
}) => {
  // Base styles with default alignment
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <section className={`mb-8 ${alignmentClass[alignment]}`}>
      {/* Title */}
      <SectionHeader title={title} subtitle={subtitle} />

      {/* Children */}
      {children && <div className={`grid ${className} gap-6 p-4 justify-items-center`}>{children}</div>}
    </section>
  );
};

export default SectionContainer;
