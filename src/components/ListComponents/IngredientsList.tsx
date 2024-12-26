import React from "react";

interface Ingredient {
  ingredient: {
    name: string;
  };
}

interface IngredientsListProps {
  ingredients: Ingredient[];
}

const IngredientsList: React.FC<IngredientsListProps> = ({ ingredients }) => {
  return (
    <ul className="list-disc list-outside pl-5 mb-4 columns-1 md:columns-2">
      {ingredients.map((ele, index) => (
        <li key={index}>
          {ele.ingredient.name
            .split(" ")
            .map(
              (word) =>
                word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            )
            .join(" ")}
        </li>
      ))}
    </ul>
  );
};

export default IngredientsList;
