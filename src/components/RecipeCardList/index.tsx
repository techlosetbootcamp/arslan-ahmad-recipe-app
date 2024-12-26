// RecipeCardList.tsx
import React from "react";
import Card from "../Card";
import SectionContainer from "../SectionContainer";

interface Recipe {
  id: number;
  name: string;
  description: string;
  thumbnail_url: string;
}

interface RecipeCardListProps {
  recipes: Recipe[];
  cardType?: 'vertical' | 'horizontal'; // Optional type for card style
  loading: boolean;
  error: string | null;
  sectionTitle: string;
  className: string;
  currentPage: number;
  recipesPerPage: number;
  handlePageChange: (pageNumber: number) => void;
}

const RecipeCardList: React.FC<RecipeCardListProps> = ({
  recipes,
  loading,
  error,
  sectionTitle,
  className,
  currentPage,
  recipesPerPage,
  handlePageChange,
  cardType = 'vertical',
}) => {
  // Pagination logic
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : paginatedRecipes.length > 0 ? (
        <>
          {/* Section Container for the recipes */}
          <SectionContainer
            title={sectionTitle}
            className={className}
          >
            {/* Render the list of cards */}
            {paginatedRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                imageSrc={recipe.thumbnail_url}
                head={recipe.name}
                type={cardType} // Pass the card type ('horizontal' or 'vertical')
                text={
                  recipe.description?.length > 100
                    ? `${recipe.description.substring(0, 100)}...`
                    : recipe.description || "No description available."
                }
                buttonLink={`/recipes/${recipe.id}`}
              />
            ))}
          </SectionContainer>

          {/* Pagination Controls */}
          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-3 py-1 md:px-4 md:py-2 mr-1 md:mx-1 ${
                  currentPage === index + 1
                    ? "bg-yellow-500 outline text-white"
                    : "bg-yellow-200 text-black"
                } rounded-md outline-yellow-300`}
                onClick={() => handlePageChange(index + 1)}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </>
      ) : (
        <p className="text-3xl font-semibold">Sorry, No recipes found... 🤔</p>
      )}
    </>
  );
};

export default RecipeCardList;
