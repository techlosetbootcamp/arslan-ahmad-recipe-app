import { configureStore } from "@reduxjs/toolkit";
import recipesReducer from "./slices/RecipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

