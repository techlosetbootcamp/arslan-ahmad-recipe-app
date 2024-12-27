import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchRecipesData } from "../store/slices/RecipesSlice";
import Banner from "../components/Banner";
import RecipeCardList from "../components/RecipeCardList";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  const { recipes, loading, error } = useSelector((state: RootState) => state.recipes);

  const [currentPageRecent, setCurrentPageRecent] = useState<number>(1);
  const [currentPagePopular, setCurrentPagePopular] = useState<number>(1);
  const [recipesPerPage, setRecipesPerPage] = useState<number>(3);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setRecipesPerPage(3);
    } else if (window.innerWidth >= 640) {
      setRecipesPerPage(2);
    } else {
      setRecipesPerPage(1);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    // Fetch recipes only if not already in the state
    dispatch(fetchRecipesData());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const sortedRecentRecipes = [...recipes]
    .sort((a, b) => b.id - a.id) // Sort by descending ID as an example
    .slice(0, recipesPerPage);

  const handlePageChangeRecent = (pageNumber: number) => setCurrentPageRecent(pageNumber);
  const handlePageChangePopular = (pageNumber: number) => setCurrentPagePopular(pageNumber);

  return (
    <>
      <Banner
        bannerImage="../src/assets/imgs/hero-banner-image.png"
        bannerText="Get Inspired, Cook with passion and enjoy unforgettable moments at the table"
      />

      <section className="p-4">
        {/* Recent Recipes */}
        <RecipeCardList
          recipes={sortedRecentRecipes}
          loading={loading}
          sectionTitle="Recent Recipes"
          error={error}
          addPages={false}
          currentPage={currentPageRecent}
          recipesPerPage={recipesPerPage}
          handlePageChange={handlePageChangeRecent}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        />

        {/* Popular Posts */}
        <RecipeCardList
          recipes={recipes}
          loading={loading}
          sectionTitle="Popular Posts"
          error={error}
          cardType="horizontal"
          currentPage={currentPagePopular}
          recipesPerPage={recipesPerPage}
          handlePageChange={handlePageChangePopular}
          className="grid-cols-1 px-0 md:px-6"
        />
      </section>
    </>
  );
};

export default Home;
