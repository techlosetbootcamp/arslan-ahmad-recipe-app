import React from "react";
import Banner from "../components/banner/Banner";
import RecipeCardList from "../components/recipeCardList/RecipeCardList";
import useResponsiveRecipes from "../hooks/useResponsiveRecipes";

const Home: React.FC = () => {
  const {
    loading,
    error,
    sortedRecentRecipes,
    sortedPopularRecipes,
    currentPageRecent,
    currentPagePopular,
    recipesPerPage,
    handlePageChangeRecent,
    handlePageChangePopular,
  } = useResponsiveRecipes();

  return (
    <>
      <Banner
        bannerImage="/assets/imgs/hero-banner-image.png"
        bannerText="Get Inspired, Cook with passion and enjoy unforgettable moments at the table"
      />

      <section className="p-4">
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
