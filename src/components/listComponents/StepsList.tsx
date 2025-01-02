import React from "react";
import { StepsListProps } from "../../types/StepsList";

const StepsList: React.FC<StepsListProps> = ({ steps }) => {
  return (
    <ol className="list-decimal list-outside mb-4 pl-4">
      {steps?.map((step, index) => (
        <li key={index}>
          {step?.display_text}
          <br />
        </li>
      ))}
    </ol>
  );
};

export default StepsList;
