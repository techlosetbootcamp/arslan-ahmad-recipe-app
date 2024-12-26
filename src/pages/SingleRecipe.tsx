import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { RootState, AppDispatch } from "../store";
import { fetchRecipesData } from "../store/slices/RecipesSlice";
import Banner from "../components/Banner";
import SectionHeader from "../components/ListComponents/ListHeader";
import IngredientsList from "../components/ListComponents/IngredientsList";
import StepsList from "../components/ListComponents/StepsList";
import NutritionInfo from "../components/ListComponents/NutritionInfo";
import Tags from "../components/ListComponents/TagsList";

const SingleRecipe: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get recipe ID from URL
  const dispatch = useDispatch<AppDispatch>();

  // Get recipes data and loading states from Redux
  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  // Fetch recipes if not already loaded
  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipesData());
    }
  }, [dispatch, recipes]);

  // Find the recipe by ID
  const recipe = recipes.find((r) => r.id.toString() === id);

  // Handle loading and error states
  if (loading) return <div>Loading...</div>;
  if (error) return <div className="text-red-500 font-semibold">{error}</div>;
  if (!recipe) return <div>Recipe not found.</div>;

  // Render recipe details
  return (
    <>
      <Banner bannerText={recipe.name} bannerImage={recipe.thumbnail_url} />

      <section className="container mx-auto p-12">
        {recipe.total_time_minutes && (
          <>
            <div className="text-slate-900 font-semibold text-center mt-6">
              (Ready Within:{" "}
              <span className="underline underline-offset-2">
                {recipe.total_time_minutes} minutes
              </span>)
            </div>
          </>
        )}

        {/* Ingredients Section */}
        {recipe.sections[0].components && (
          <>
            <SectionHeader text="Ingredients" className="mb-4" />
            <IngredientsList ingredients={recipe.sections[0].components || []} />
          </>
        )}

        {/* Instructions Section */}
        <SectionHeader text="Steps to Follow" className="mb-4" />
        <ol className="list-decimal pl-5">
          {recipe.instructions?.map((step, index) => (
            <li key={index} className="mb-2">
              {step.display_text}
            </li>
          ))}
        </ol>

        {/* Nutrition Section */}
        {recipe.nutrition && (
          <>
            <SectionHeader text="Nutrition" className="mb-4" />
            <NutritionInfo nutrition={recipe.nutrition} />
          </>
        )}

        {/* Tags Section */}
        {recipe.tags && (
          <>
            <SectionHeader text="Tags" align="center" className="mb-4" />
            <Tags tags={recipe.tags} />
          </>
        )}
      </section>
    </>
  );
};

export default SingleRecipe;