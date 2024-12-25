import { configureStore } from "@reduxjs/toolkit";
import { RecipeDetail } from "./slices/RecipeDetail";

export const store = configureStore({
  reducer: {
    singleRecipe: RecipeDetail.reducer,
  },
});

// Define types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;