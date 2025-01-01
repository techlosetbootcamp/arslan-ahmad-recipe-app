import SectionHeader from "../components/sectionHeader/SectionHeader";
import SearchBar from "../components/searchBar/SearchBar";
import RecipeCardList from "../components/recipeCardList/RecipeCardList";
import useRecipes from "../hooks/useRecipes";
import useResponsiveRecipes from "../hooks/useResponsiveRecipes";
import useResponsivePagination from "../hooks/useResponsivePagination";

const Search = () => {
  const {
    loading,
    error,
    currentPagePopular,
    handlePageChangePopular,
  } = useResponsiveRecipes();

  const { recipes } = useRecipes();
  const { recipesPerPage } = useResponsivePagination(3);

  return (
    <div className="container mx-auto p-4">
      <section className="h-[360px] w-full flex flex-col items-center justify-center">
        <SectionHeader title="Search Recipes" />
        <SearchBar
          className="max-w-[758px] w-[80%] min-w-[300px] h-[58px] sm:h-[64px] py-1 sm:py-2 px-6"
          icon="lg"
        />
      </section>

      <RecipeCardList
        recipes={recipes}
        loading={loading}
        sectionTitle="List of Recipes"
        error={error}
        currentPage={currentPagePopular}
        recipesPerPage={recipesPerPage}
        handlePageChange={handlePageChangePopular}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
      />
    </div>
  );
};

export default Search;
