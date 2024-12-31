import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store/index";
import { useNavigate } from "react-router-dom";
import { SearchBarProps } from "../../types/SearchBar";


const SearchBar: React.FC<SearchBarProps> = ({ className, icon = "sm" }) => {
  const [query, setQuery] = useState(""); 
  const { recipes } = useSelector((state: RootState) => state.recipes); 
  const navigate = useNavigate();

  const filteredSuggestions = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(query.toLowerCase())
  );

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); 
  };

  const handleSuggestionClick = (id: number) => {
    setQuery("")
    navigate(`/recipes/${id}`); 
  };

  return (
    <div className="w-full flex justify-center">
      <div className={`${icon !== "sm" ? 'h-[64.17px] w-[334px] sm:w-[65%]' : 'h-[45px]'} relative bg-slate-100 rounded-full flex justify-start items-center gap-2 ${className}`}>
        <img
          className={`${icon === "sm" ? "h-[17.61px]" : "h-[25.11px]"}`}
          src="/assets/icons/search.svg"
          alt="search_icon"
        />
        <input
          type="text"
          className="bg-transparent outline-none placeholder:text-slate-400 text-slate-600 w-full"
          placeholder="Search..."
          value={query}
          onChange={handleInputChange} 
        />
        {query && filteredSuggestions.length > 0 && (
          <div className={`absolute w-full ${icon !== "sm" ? 'top-[64.17px]' : 'top-[45px]'} left-[50%] translate-x-[-50%] bg-white shadow-lg mt-1 border-t border-gray-200 rounded-md z-10`}>
            <ul className="max-h-60 overflow-y-auto scroll-smooth">
              {filteredSuggestions.map((item) => (
                <li
                  key={item.id}
                  className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                  onClick={() => handleSuggestionClick(item.id)} 
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchBar;