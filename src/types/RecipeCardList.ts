import { Recipe } from "./Recipe";

export type RecipeCardListProps = {
  recipes: Recipe[];
  cardType?: "vertical" | "horizontal";
  error: string | null;
  loading: boolean;
  headAlign?: "center" | "left";
  sectionTitle: string;
  className: string;
  currentPage: number;
  addPages?: boolean;
  recipesPerPage: number;
  handlePageChange: (pageNumber: number) => void;
};
