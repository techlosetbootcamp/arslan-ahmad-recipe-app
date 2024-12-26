import React from "react";

interface NutritionInfoProps {
  nutrition: { [key: string]: string | number };
}

const NutritionInfo: React.FC<NutritionInfoProps> = ({ nutrition }) => {
  return (
    <ul className="list-disc list-outside pl-4">
      {Object.entries(nutrition).map(([key, value]) =>
        key !== "updated_at" ? (
          <li key={key}>
            <span className="font-semibold mr-1">
              {key.charAt(0).toUpperCase() + key.slice(1)}:
            </span>
            <span>
              {value}
              {key === "calories"
                ? " kcal"
                : ["carbohydrates", "fat", "fiber", "protein", "sugar"].includes(key)
                ? "g"
                : ""}
            </span>
          </li>
        ) : null
      )}
    </ul>
  );
};

export default NutritionInfo;