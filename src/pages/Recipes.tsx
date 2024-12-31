import { useState, useEffect } from "react";
import SectionHeader from "../components/sectionHeader/SectionHeader";
import SearchBar from "../components/searchBar/SearchBar";
import RecipeCardList from "../components/recipeCardList/RecipeCardList";
import useRecipes from "../hooks/useRecipes";

const Search = () => {
  const [currentPagePopular, setCurrentPagePopular] = useState<number>(1);
  const [recipesPerPage, setRecipesPerPage] = useState<number>(3);

  const { recipes, loading, error } = useRecipes();

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setRecipesPerPage(6);
    } else if (window.innerWidth >= 640) {
      setRecipesPerPage(4);
    } else {
      setRecipesPerPage(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handlePageChangePopular = (pageNumber: number) => {
    setCurrentPagePopular(pageNumber);
  };

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
