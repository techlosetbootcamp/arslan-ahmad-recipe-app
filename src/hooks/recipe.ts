import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../store"; // Update this based on your store setup
import axios from "axios";
import { RecipesSlice } from "../store/slices/RecipesSlice"; // Assuming the slice is in `features/RecipeSlice.ts`

const { fetchRecipes, fetchRecipesSuccess, fetchRecipesFailure } = RecipesSlice.actions;

const API_BASE_URL = import.meta.env.VITE_URL_BASE;
const RAPID_API_HOST = import.meta.env.VITE_RAPIDAPI_HOST;
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY;

const useRecipe = () => {
  const dispatch: AppDispatch = useDispatch();
  const recipes = useSelector((state: RootState) => state.singleRecipe.recipe);
  const loading = useSelector((state: RootState) => state.singleRecipe.loading);
  const error = useSelector((state: RootState) => state.singleRecipe.error);

  const fetchRecipesData = async () => {
    dispatch(fetchRecipes());
    try {
      const response = await axios.get(
        API_BASE_URL+'/recipes/list',
        {
          params: { from: "0", size: "20", tags: "under_30_minutes" },
          headers: {
            "X-RapidAPI-Key": RAPIDAPI_KEY, // Replace with your API key
            "X-RapidAPI-Host": RAPID_API_HOST, // Replace with your API host
          },
        }
      );
      dispatch(fetchRecipesSuccess(response.data.results));
    } catch (err: any) {
      dispatch(fetchRecipesFailure(err.message || "Something went wrong"));
    }
  };

  return { recipes, loading, error, fetchRecipesData };
};

export default useRecipe;