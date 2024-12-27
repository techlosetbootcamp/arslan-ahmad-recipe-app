import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AppDispatch } from '../index.ts';
import axios from "axios";

interface Recipe {
  id: number;
  name: string;
  description: string;
  thumbnail_url: string;
  instructions?: {display_text: string}[];
  nutrition?: any;
  sections?: any[];
  thumbnail_alt_text?: string; 
  updated_at: number; 
  tags?: {display_name: string;}[];
  total_time_minutes?: number;
  user_ratings?: {
    count_negative: number;
    count_positive: number;
    score: number;
  };
}


interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}

const initialState: RecipesState = {
  recipes: [],
  loading: false,
  error: null,
};

export const fetchRecipesData = () => async (dispatch: AppDispatch, getState: any) => {
  const state = getState().recipes;
  if (state.recipes.length > 0) return;

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

export const { fetchRecipes, fetchRecipesSuccess, fetchRecipesFailure } = recipesSlice.actions;

export default recipesSlice.reducer;
