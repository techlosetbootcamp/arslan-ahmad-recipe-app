import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import Banner from "../components/Banner";
import RecipeCardList from "../components/RecipeCardList";
import {AppDispatch } from "../store/index";

const Home: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
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
      setRecipesPerPage(3);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [dispatch]);

  const sortedRecentRecipes = [...recipes]
  .sort((a, b) => {
    const dateA = new Date(a.updated_at * 1000);
    const dateB = new Date(b.updated_at * 1000); 
    return dateB.getTime() - dateA.getTime(); 
  })
  .slice(0, recipesPerPage);

  const sortedPopularRecipes = [...recipes]
  .sort((a, b) => {
    const scoreA = a.user_ratings?.score || 0; // Default to 0 if no score
    const scoreB = b.user_ratings?.score || 0; // Default to 0 if no score
    return scoreB - scoreA; // Higher scores come first
  })
  .slice(0, recipesPerPage);

  const handlePageChangeRecent = (pageNumber: number) => setCurrentPageRecent(pageNumber);
  const handlePageChangePopular = (pageNumber: number) => setCurrentPagePopular(pageNumber);

  return (
    <>
      <Banner
        bannerImage="/assets/imgs/hero-banner-image.png"
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
          recipes={sortedPopularRecipes}
          loading={loading}
          sectionTitle="Popular Posts"
          error={error}
          addPages={false}
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
