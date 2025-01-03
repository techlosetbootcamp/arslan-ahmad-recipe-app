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
    <section className={`mb-4 ${alignmentClass[alignment]}`}>
      <SectionHeader alignment={alignment} title={title} subtitle={subtitle} />

      {children && <div className={className}>{children}</div>}
    </section>
  );
};

export default SectionContainer;
