import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "./useStore";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const { recipes } = useAppSelector((state) => state.recipes);
  const navigate = useNavigate();

  const filteredSuggestions = recipes?.filter((recipe) =>
    recipe?.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target?.value);
  };

  const handleSuggestionClick = (id: number) => {
    setQuery("");
    navigate(`/recipes/${id}`);
  };

  return {
    query,
    setQuery,
    filteredSuggestions,
    handleInputChange,
    handleSuggestionClick,
  };
};

export default useSearch;
