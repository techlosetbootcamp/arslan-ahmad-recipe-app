import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [],
  loading: false,
  error: null,
};

export const RecipesSlice = createSlice({
  name: "Recipes",
  initialState,
  reducers: {
    fetchRecipes: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRecipesSuccess: (state, action) => {
      state.recipes = action.payload;
      state.loading = false;
    },
    fetchRecipesFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});
