import React from "react";
import Banner from "../components/banner/Banner";
import RecipeCardList from "../components/recipeCardList/RecipeCardList";
import useResponsiveRecipes from "../hooks/useResponsiveRecipes";
import { bannerImage } from "../constants/images";
import {
  BANNER_TEXT,
  POPULAR_HEADER_TEXT,
  RECENT_HEADER_TEXT,
} from "../constants/text";

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
        bannerImage={bannerImage}
        bannerText={BANNER_TEXT}
        className="h-[650px] sm:h-[362px]"
        imageAlt="Banner Image"
      />

      <section className="p-4">
        <RecipeCardList
          recipes={sortedPopularRecipes}
          loading={loading}
          sectionTitle={POPULAR_HEADER_TEXT}
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
          sectionTitle={RECENT_HEADER_TEXT}
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
