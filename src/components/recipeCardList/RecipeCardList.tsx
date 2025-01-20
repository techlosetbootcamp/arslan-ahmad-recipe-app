import React from "react";
import Card from "../card/Card";
import SectionContainer from "../sectionContainer/SectionContainer";
import { RecipeCardListProps } from "../../types/RecipeCardList";
import { failedLoadText } from "../../constants/text";

const RecipeCardList: React.FC<RecipeCardListProps> = ({
  recipes,
  error,
  loading,
  sectionTitle,
  headAlign = "center",
  className,
  addPages = true,
  currentPage,
  recipesPerPage,
  handlePageChange,
  cardType = "vertical",
}) => {
  const totalPages = Math.ceil(recipes?.length / recipesPerPage);
  const paginatedRecipes = recipes?.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  return (
    <>
      {loading ? null : error ? (
        <p>Error: {error}</p>
      ) : paginatedRecipes?.length > 0 ? (
        <>
          <SectionContainer
            alignment={headAlign}
            title={sectionTitle}
            className={className}
          >
            {paginatedRecipes?.map((recipe) => (
              <Card
                key={recipe?.id}
                imageSrc={recipe?.thumbnail_url}
                head={recipe?.name}
                type={cardType}
                text={
                  recipe?.description?.length > 80
                    ? `${recipe?.description.substring(0, 80)}...`
                    : recipe?.description || "No description available."
                }
                buttonLink={`/recipes/${recipe?.id}`}
              />
            ))}
          </SectionContainer>

          {addPages && (
            <div className="flex justify-center mx-auto mt-4 text-center md:max-w-[80%] w-full scroll-smooth overflow-x-auto">
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
          )}
        </>
      ) : (
        <p className="text-3xl font-semibold">{failedLoadText}</p>
      )}
    </>
  );
};

export default RecipeCardList;
