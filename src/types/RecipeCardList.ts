import { Recipe } from "./Recipe";

export interface RecipeCardListProps {
  recipes: Recipe[];
  cardType?: "vertical" | "horizontal"; 
  error: string | null;
  loading: boolean;
  sectionTitle: string;
  className: string;
  currentPage: number;
  addPages?: boolean;
  recipesPerPage: number;
  handlePageChange: (pageNumber: number) => void;
}
