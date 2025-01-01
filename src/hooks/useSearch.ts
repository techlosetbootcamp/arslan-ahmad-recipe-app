import { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { useNavigate } from "react-router-dom";

const useSearch = () => {
  const [query, setQuery] = useState("");
  const { recipes } = useSelector((state: RootState) => state.recipes);
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
