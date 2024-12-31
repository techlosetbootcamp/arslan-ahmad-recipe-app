import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from "../index.ts";
import axios, { AxiosError } from "axios";
import { Recipe, RecipesState } from "../../types/Recipe.ts";

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
};

export const fetchRecipesData =
  () => async (dispatch: AppDispatch, getState: any) => {
    const state = getState().recipes;
    if (state.recipes.length > 0) return;

    dispatch(fetchRecipes());
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_URL_BASE}/recipes/list`,
        {
          headers: {
            "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
            "X-RapidAPI-Host": import.meta.env.VITE_RAPIDAPI_HOST,
          },
        }
      );
      dispatch(fetchRecipesSuccess(response.data.results));
    } catch (error) {
      if (error instanceof AxiosError) {
        dispatch(
          fetchRecipesFailure(error.message || "Failed to fetch recipes.")
        );
      }
    }
  };

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    fetchRecipes: (state) => {
      state.loading = true;
      state.error = null;
    },
    fetchRecipesSuccess: (state, action: PayloadAction<Recipe[]>) => {
      state.recipes = action.payload;
      state.loading = false;
    },
    fetchRecipesFailure: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchRecipes, fetchRecipesSuccess, fetchRecipesFailure } =
  recipesSlice.actions;

export default recipesSlice.reducer;
