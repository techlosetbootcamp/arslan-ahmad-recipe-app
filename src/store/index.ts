import { configureStore } from "@reduxjs/toolkit";
import { recipesSlice } from "./slices/RecipesSlice";

export const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
