import { useEffect, useState } from "react";
import useRecipes from "../hooks/useRecipes";

const useResponsiveRecipes = () => {
  const { recipes, loading, error } = useRecipes();
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
  }, []);

  const sortedRecentRecipes = [...recipes]
    ?.sort((a, b) => {
      const dateA = new Date(a?.updated_at * 1000);
      const dateB = new Date(b?.updated_at * 1000);
      return dateB.getTime() - dateA.getTime();
    })
    ?.slice(0, recipesPerPage);

  const sortedPopularRecipes = [...recipes]
    ?.sort((a, b) => {
      const scoreA = a?.user_ratings?.score || 0;
      const scoreB = b?.user_ratings?.score || 0;
      return scoreB - scoreA;
    })
    ?.slice(0, recipesPerPage);

  const handlePageChangeRecent = (pageNumber: number) =>
    setCurrentPageRecent(pageNumber);
  const handlePageChangePopular = (pageNumber: number) =>
    setCurrentPagePopular(pageNumber);

  return {
    recipes,
    loading,
    error,
    sortedRecentRecipes,
    sortedPopularRecipes,
    currentPageRecent,
    currentPagePopular,
    recipesPerPage,
    handlePageChangeRecent,
    handlePageChangePopular,
  };
};

export default useResponsiveRecipes;
