import React from "react";
import SectionHeader from "../sectionHeader/SectionHeader";
import { SectionContainerProps } from "../../types/SectionContainer";

const SectionContainer: React.FC<SectionContainerProps> = ({
  title,
  subtitle,
  alignment = "center",
  className = "",
  children,
}) => {
  const alignmentClass = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <section className={`mb-8 ${alignmentClass[alignment]}`}>
      <SectionHeader title={title} subtitle={subtitle} />

      {children && (
        <div className={`grid ${className} gap-6 p-4 justify-items-center`}>
          {children}
        </div>
      )}
    </section>
  );
};

export default SectionContainer;
