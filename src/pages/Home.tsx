import Banner from "../components/Banner";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store"; // Import correctly
import { fetchRecipesData } from "../store/slices/RecipesSlice"; // Import action correctly

const Home: React.FC = () => {
  const dispatch = useDispatch();
  
  // Access Redux state
  const { recipes, loading, error } = useSelector((state: RootState) => state.recipes); // Make sure we're accessing state.recipes

  const [currentPage, setCurrentPage] = useState<number>(1);
  const recipesPerPage = 3;

  useEffect(() => {
    dispatch(fetchRecipesData()); // Dispatch the action to fetch recipes
  }, [dispatch]);

  // Pagination logic
  const totalPages = Math.ceil(recipes.length / recipesPerPage);
  const paginatedRecipes = recipes.slice(
    (currentPage - 1) * recipesPerPage,
    currentPage * recipesPerPage
  );

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <Banner
        bannerImage="../src/assets/imgs/hero-banner-image.png"
        bannerText="Get Inspired, Cook with passion and enjoy unforgettable moments at the table"
      />

      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : paginatedRecipes.length > 0 ? (
        <>
          <SectionContainer
            title="Recent Posts"
            className="grid grid-cols-1 lg:grid-cols-3 gap-4"
          >
            {paginatedRecipes.map((recipe) => (
              <Card
                key={recipe.id}
                imageSrc={recipe.thumbnail_url}
                head={recipe.name}
                text={recipe.description?.length > 100 ? `${recipe.description.substring(0, 80)}...` : recipe.description || "No description available."}
                buttonLink={`/recipes/${recipe.id}`}
              />
            ))}
          </SectionContainer>

          <div className="flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                className={`px-4 py-2 mx-1 ${currentPage === index + 1 ? "bg-yellow-500 outline text-white" : "bg-yellow-200 text-black"} rounded-md outline-yellow-300`}
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

      <SectionContainer title="Popular Posts" className="grid-cols-1">
        <Card
          type="horizontal"
          imageSrc="../src/assets/imgs/horizontal-card.png"
          head="Waffles"
          text="These are the European foods that are mostly liked in breakfast along with tea."
          buttonLink="#"
        />
      </SectionContainer>
    </>
  );
};

export default Home;
