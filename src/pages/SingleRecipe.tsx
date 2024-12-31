import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../store";
import { fetchRecipesData } from "../store/slices/RecipesSlice";
import Banner from "../components/banner/Banner";
import SectionHeader from "../components/listComponents/ListHeader";
import IngredientsList from "../components/listComponents/IngredientsList";
import StepsList from "../components/listComponents/StepsList";
import NutritionInfo from "../components/listComponents/NutritionInfo";
import Tags from "../components/listComponents/TagsList";
import useRecipes from "../hooks/useRecipes";

const SingleRecipe: React.FC = () => {
  const { id } = useParams<{ id: string }>(); 
  const dispatch = useDispatch<AppDispatch>();

  const { recipes, error } = useRecipes()

  useEffect(() => {
    window.scrollTo(0, 0);
    
    if (recipes.length === 0) {
      dispatch(fetchRecipesData());
    }
  }, [dispatch, recipes]);

  const recipe = recipes.find((r) => r.id.toString() === id);

  if (error) return <div className="text-red-500 font-semibold">{error}</div>;
  if (!recipe) return <div>Recipe not found.</div>;

  return (
    <>
      <Banner bannerText={recipe.name} bannerImage={recipe.thumbnail_url} />

      <section className="container mx-auto p-12">
        {recipe.total_time_minutes ? (
          <>
            <div className="text-slate-900 font-semibold text-center mt-6">
              (Ready Within:{" "}
              <span className="underline underline-offset-2">
                {recipe.total_time_minutes} minutes
              </span>)
            </div>
          </> 
        ) : null}

        {/* Ingredients Section */}
        {recipe?.sections && recipe.sections.length > 0 && recipe.sections[0].components && (
          <>
            <SectionHeader text="Ingredients" className="mb-4" />
            <IngredientsList ingredients={recipe.sections[0].components || []} />
          </>
        )}


        {/* Instructions Section */}
        <SectionHeader text="Steps to Follow" className="mb-4" />
        {recipe?.instructions && recipe.instructions.length > 0 && (
          <StepsList steps={recipe.instructions} />
        )}

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