import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store"; // Import RootState to type `useSelector`
import Banner from "../components/Banner";
import SingleListHeader from "../components/IngredientList/SectionHeader";

const SingleRecipe: React.FC = () => {
  // Access the state
  const { recipe, loading, error } = useSelector(
    (state: RootState) => state.singleRecipe
  );
  
  // Handle loading and error states
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  // Render recipe details
  return (
    <>
      <Banner bannerText={recipe.name} bannerImage={recipe.thumbnail_url} />
      <div className="text-slate-900 font-semibold text-center mt-6">
        (Ready Within:{" "}
        <span className="underline underline-offset-2">
          {recipe.total_time_minutes} minutes
        </span>
        )
      </div>
      <section className="container mx-auto p-12">
        {/* Ingredients */}
        {/* Ingredients */}
        <SingleListHeader text="Ingredients" />
        <ul className="list-disc list-outside pl-5 mb-4 columns-2">
          {recipe.sections[0].components.map((ele, index) => (
            <>
              <li key={index}>
                {ele.ingredient.name
                  .split(" ") // Split the string into words
                  .map(
                    (word) =>
                      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
                  ) // Capitalize first letter, lower the rest
                  .join(" ")}{" "}
                {/* Join the words back into a single string */}
              </li>
            </>
          ))}
        </ul>
        {/* Instructions */}
        <SingleListHeader text="Steps to Follow" />
        <ol className="list-decimal list-outside mb-4 pl-4">
          {recipe.instructions.map((step, index) => (
            <>
              <li key={index}>{step.display_text}</li> <br />
            </>
          ))}
        </ol>
        {/* Nutritions Section */}
        <SingleListHeader text="nutrition" />
        <ul className="list-disc list-outside pl-4">
          {Object.entries(recipe.nutrition).map(([key, value]) =>
            key !== "updated_at" ? (
              <li key={key}>
                <span className="font-semibold mr-1">
                  {key.charAt(0).toUpperCase() + key.slice(1)}:
                </span>
                <span>
                  {value}
                  {key === "calories"
                    ? " kcal"
                    : key === "carbohydrates" ||
                      key === "fat" ||
                      key === "fiber" ||
                      key === "protein" ||
                      key === "sugar"
                    ? "g"
                    : ""}
                </span>
              </li>
            ) : null
          )}
        </ul>
        {/* Tags Section */}
        <SingleListHeader text="TAGS" align="center" />
        <div className="flex flex-wrap gap-2">
          {recipe.tags.map((tag, index) => {
            const colorPalette = [
              "#F6E05E", // Yellow-500 variant
              "#ECC94B", // Yellow-300 variant
              "#F8D586", // Light Yellow/Beige
              "#F9E79F", // Soft Yellow
              "#FFF7C6", // Pale Yellow/Off-White
              "#FFEB8D", // Warm Yellow
            ];

            const randomColor =
              colorPalette[Math.floor(Math.random() * colorPalette.length)];

            return (
              <span
                key={index}
                className="py-2 px-3 border-2 mx-2"
                style={{ backgroundColor: randomColor }}
              >
                {tag.display_name}
              </span>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default SingleRecipe;
