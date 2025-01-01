import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../store";
import { fetchRecipesData } from "../store/slices/RecipesSlice";
import useRecipes from "../hooks/useRecipes";

const useSingleRecipe = () => {
  const { id } = useParams<{ id: string }>();
  const dispatch = useDispatch<AppDispatch>();
  const { recipes, error } = useRecipes();

  useEffect(() => {
    window.scrollTo(0, 0);

    if (recipes?.length === 0) {
      dispatch(fetchRecipesData());
    }
  }, [dispatch, recipes]);

  const recipe = recipes?.find((r) => r?.id?.toString() === id);

  return { recipe, error };
};

export default useSingleRecipe;
