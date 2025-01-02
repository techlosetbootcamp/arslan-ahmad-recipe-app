import { useState, useEffect } from "react";

const useResponsivePagination = (defaultRecipesPerPage: number) => {
  const [recipesPerPage, setRecipesPerPage] = useState<number>(
    defaultRecipesPerPage
  );
  const [currentPage, setCurrentPage] = useState<number>(1);

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

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return { recipesPerPage, currentPage, handlePageChange };
};

export default useResponsivePagination;
