import { createSlice } from "@reduxjs/toolkit";
import recipeData from "../../../dev-test/recipe.json"; // Import the recipe data


const initialState = {
  recipe: recipeData,  // set the default value here
  loading: false,
  error: null,
};

export const RecipeDetail = createSlice({
  name: "RecipeDetail",
  initialState,
  reducers: {
    fetchRecipe: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRecipeSuccess: (state, action) => {
      state.recipe = action.payload;
      state.loading = false;
    },
    fetchRecipeFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRecipe, fetchRecipeSuccess, fetchRecipeFailure } = RecipeDetail.actions;

export default RecipeDetail.reducer;
