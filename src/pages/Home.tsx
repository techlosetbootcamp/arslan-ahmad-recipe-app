import Banner from "../components/Banner";
import SectionContainer from "../components/SectionContainer";
import Card from "../components/Card";
import { useEffect, useState } from "react";
import axios from "axios";

interface Recipe {
  id: number;
  name: string;
  thumbnail_url: string;
  description: string;
}

const Home: React.FC = () => {
  const [recipes, setRecipes] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const recipesPerPage = 3;

  useEffect(() => {
    const fetchRecipes = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://tasty.p.rapidapi.com/recipes/list",
          {
            params: { from: "0", size: "20", tags: "under_30_minutes" },
            headers: {
              "X-RapidAPI-Key": import.meta.env.VITE_RAPIDAPI_KEY,
              "X-RapidAPI-Host": "tasty.p.rapidapi.com",
            },
          }
        );
        setRecipes(response.data.results);

      } catch (err: any) {
        setError(err.message || "Failed to fetch recipes.");
      } finally {
        setLoading(false);
      }
    };

    fetchRecipes();
  }, []);

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
      {/* Banner Section */}
      <Banner
        bannerImage="../src/assets/imgs/hero-banner-image.png"
        bannerText="Get Inspired, Cook with passion and enjoy unforgettable moments at the table"
      />

      {/* Recent Posts Section */}
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
              text={recipe.description?.length > 100 ? `${recipe.description.substring(0, 100)}...` : recipe.description || "No description available."}
              buttonLink={`/recipes/${recipe.id}`}
            />
          ))}
          </SectionContainer>
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 ${
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

      {/* Pagination Section */}
      {/* <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`px-4 py-2 mx-1 ${
              currentPage === index + 1
                ? "bg-yellow-500 text-white"
                : "bg-yellow-200 text-black"
            } rounded-md outline-yellow-200`}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div> */}

      {/* Popular Posts Section */}
      <SectionContainer title="Popular Posts" className="grid-cols-1">
        <Card
          type="horizontal"
          imageSrc="../src/assets/imgs/horizontal-card.png"
          head="Waffels"
          text="These are the europian food that are mostly liked in breackfast alsong with tea."
          buttonLink="#"
        />
      </SectionContainer>
    </>
  );
};

export default Home;
