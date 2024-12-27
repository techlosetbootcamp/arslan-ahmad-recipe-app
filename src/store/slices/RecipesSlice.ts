import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Recipe {
  id: number;
  name: string;
  thumbnail_url: string;
  description: string;
}

interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

// Initial state
const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
};

// Async action to fetch recipes
export const fetchRecipesData = () => async (dispatch: any, getState: any) => {
  const state = getState().recipes;
  if (state.recipes.length > 0) return; // Skip fetching if recipes already exist

  dispatch(fetchRecipes());
  try {
    const response = await axios.get("https://tasty.p.rapidapi.com/recipes/list", {
      headers: {
        "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
        "X-RapidAPI-Host": "tasty.p.rapidapi.com",
      },
    });
    dispatch(fetchRecipesSuccess(response.data.results));
  } catch (err: any) {
    dispatch(fetchRecipesFailure(err.message || "Failed to fetch recipes."));
  }
};

// Slice
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

// Actions
export const { fetchRecipes, fetchRecipesSuccess, fetchRecipesFailure } = recipesSlice.actions;

// Reducer
export default recipesSlice.reducer;
