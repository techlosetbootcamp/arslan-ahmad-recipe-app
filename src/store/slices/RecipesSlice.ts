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

// Async action using redux-thunk
export const fetchRecipesData = () => async (dispatch: any) => {
  dispatch(fetchRecipes()); // Dispatch loading action
  try {
    const response = await axios.get(
      "https://tasty.p.rapidapi.com/recipes/list",
      {
        params: { from: "0", size: "20", tags: "under_30_minutes" },
        headers: {
          "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
          "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
      }
    );
    dispatch(fetchRecipesSuccess(response.data.results)); // Dispatch success action
  } catch (err: any) {
    dispatch(fetchRecipesFailure(err.message || "Failed to fetch recipes.")); // Dispatch failure action
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
