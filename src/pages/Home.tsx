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
        bannerImage="/assets/imgs/banner-image.png"
        bannerText="Get Inspired, Cook with passion and enjoy unforgettable moments at the table"
        className="h-[650px] sm:h-[362px]"
        imageAlt="Banner Image"
      />

      <section className="p-4">
        <RecipeCardList
          recipes={sortedPopularRecipes}
          loading={loading}
          sectionTitle="Popular Recipes"
          error={error}
          addPages={false}
          currentPage={currentPagePopular}
          recipesPerPage={recipesPerPage}
          handlePageChange={handlePageChangePopular}
          className="flex justify-center flex-wrap gap-6"
        />

        <RecipeCardList
          recipes={sortedRecentRecipes}
          loading={loading}
          sectionTitle="Recent Recipes"
          error={error}
          addPages={false}
          cardType="horizontal"
          currentPage={currentPageRecent}
          recipesPerPage={recipesPerPage}
          handlePageChange={handlePageChangeRecent}
          className="grid grid-cols-1 gap-6 px-0 md:px-6 justify-items-center"
        />
      </section>
    </>
  );
};

export default Home;
