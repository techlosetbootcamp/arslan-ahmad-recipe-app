import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../store";
import { fetchRecipesData } from "../store/slices/RecipesSlice";

const useRecipes = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  useEffect(() => {
    if (recipes.length === 0) {
      dispatch(fetchRecipesData());
    }
  }, [dispatch, recipes.length]);

  return { recipes, loading, error };
};

export default useRecipes;
