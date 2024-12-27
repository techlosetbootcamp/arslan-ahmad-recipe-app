import { useSelector } from "react-redux";
import { useState } from "react"
import Card from "../components/Card";
import SeachBar from "../components/SearchBar";
import SectionContainer from "../components/SectionContainer";
import SectionHeader from "../components/SectionHeader";
import RecipeCardList from "../components/RecipeCardList";
import { RootState } from "../store";

const Search = () => {
  const [currentPageRecent, setCurrentPageRecent] = useState<number>(1);
  const [currentPagePopular, setCurrentPagePopular] = useState<number>(1);
  const [searchResults, setSearchResults] = useState([])


  // Access Redux state
  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  // Pagination handlers
  const handlePageChangeRecent = (pageNumber: number) => {
    setCurrentPageRecent(pageNumber);
  };

  const handlePageChangePopular = (pageNumber: number) => {
    setCurrentPagePopular(pageNumber);
  };

  return (
    <main className="container mx-auto p-4">
      <section className="h-[360px]  w-full flex flex-col items-center justify-center">
        <SectionHeader title="Search Recipes" />
        <SeachBar
          className="max-w-[758px] w-[80%] min-w-[334px] h-[64.17px] py-1 sm:py-2 px-6"
          icon="lg"
        />
      </section>
      {/* Popular Posts */}
      <RecipeCardList
          recipes={recipes}
          loading={loading}
          sectionTitle="List of Recipes"
          error={error}
          currentPage={currentPagePopular}
          recipesPerPage={6}
          handlePageChange={handlePageChangePopular}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        />
    </main>
  );
};

export default Search;
