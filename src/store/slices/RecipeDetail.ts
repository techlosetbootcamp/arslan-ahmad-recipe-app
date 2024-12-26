import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState } from "../store";
import Banner from "../components/Banner";
import SectionHeader from "../components/SectionHeader";

const SingleRecipe: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Extract recipe ID from URL

  // Access recipes from RecipesSlice
  const recipes = useSelector((state: RootState) => state.recipes.data);

  // Find the specific recipe using the ID
  const recipe = recipes?.find((r) => r.id.toString() === id);

  // Handle case when the recipe is not found
  if (!recipe) {
    return <div className="text-red-500 font-semibold">Recipe not found.</div>;
  }

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
        {/* Ingredients Section */}
        <SectionHeader text="Ingredients" />
        <ul className="list-disc pl-5 mb-4">
          {recipe.sections[0]?.components?.map((ele: any, index: number) => (
            <li key={index}>{ele.ingredient.name}</li>
          ))}
        </ul>

        {/* Instructions Section */}
        <SectionHeader text="Steps to Follow" />
        <ol className="list-decimal pl-5 mb-4">
          {recipe.instructions?.map((step: any, index: number) => (
            <li key={index}>{step.display_text}</li>
          ))}
        </ol>
      </section>
    </>
  );
};

export default SingleRecipe;
