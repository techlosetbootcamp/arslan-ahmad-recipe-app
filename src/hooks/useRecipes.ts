import { useEffect } from "react";
import { fetchRecipesData } from "../store/slices/RecipesSlice";
import { useAppDispatch, useAppSelector } from "./useStore";

const useRecipes = () => {
  const dispatch = useAppDispatch();

  const { recipes, loading, error } = useAppSelector((state) => state?.recipes);

  useEffect(() => {
    if (recipes?.length === 0) {
      dispatch(fetchRecipesData());
    }
  }, [dispatch, recipes?.length]);

  return { recipes, loading, error };
};

export default useRecipes;
