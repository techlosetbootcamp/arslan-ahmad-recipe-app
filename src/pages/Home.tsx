// Home.tsx
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"; // Import correctly
import { fetchRecipesData } from "../store/slices/RecipesSlice"; // Import action correctly
import Banner from "../components/Banner";
import RecipeCardList from "../components/RecipeCardList"; // Import the new component
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";

const Home: React.FC = () => {
  const dispatch = useDispatch();
  
  // Access Redux state
  const { recipes, loading, error } = useSelector(
    (state: RootState) => state.recipes
  );

  // Pagination states for both lists
  const [currentPageRecent, setCurrentPageRecent] = useState<number>(1);
  const [currentPagePopular, setCurrentPagePopular] = useState<number>(1);
  const [recipesPerPage, setRecipesPerPage] = useState<number>(3);

  const handleResize = () => {
    if (window.innerWidth >= 1024) {
      setRecipesPerPage(3); // Large screen (3 cards)
    } else if (window.innerWidth >= 640) {
      setRecipesPerPage(2); // Medium screen (2 cards)
    } else {
      setRecipesPerPage(3); // Small screen (3 cards)
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    dispatch(fetchRecipesData());

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  // Pagination handlers
  const handlePageChangeRecent = (pageNumber: number) => {
    setCurrentPageRecent(pageNumber);
  };

  const handlePageChangePopular = (pageNumber: number) => {
    setCurrentPagePopular(pageNumber);
  };

  return (
    <>
      <Banner
        bannerImage="../src/assets/imgs/hero-banner-image.png"
        bannerText="Get Inspired, Cook with passion and enjoy unforgettable moments at the table"
      />

      <section className="p-4">
        {/* Recent Recipes */}
        <RecipeCardList
          recipes={recipes}
          loading={loading}
          sectionTitle="Recent Recipes"
          error={error}
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
