export interface Recipe {
  id: number;
  name: string;
  description: string;
  thumbnail_url: string;
  instructions?: { display_text: string }[];
  nutrition?: {
    calories: number;
    carbohydrates: number;
    fat: number;
    fiber: number;
    protein: number;
    sugar: number;
    updated_at: string;
  };
  sections?: { components: Component[] }[];
  thumbnail_alt_text?: string;
  updated_at: number;
  tags?: { display_name: string }[];
  total_time_minutes?: number;
  user_ratings?: {
    count_negative: number;
    count_positive: number;
    score: number;
  };
}

interface Component {
  ingredient: Ingredient;
}

interface Ingredient {
  id: number;
  name: string;
  created_at: number;
}

export interface RecipesState {
  recipes: Recipe[];
  loading: boolean;
  error: string | null;
}
