// components/SearchBar.tsx
import React, { useState } from "react";
import useSearchSuggestions from "../../hooks/searchSuggestions"; // Import the custom hook

interface SearchBarProps {
  icon?: 'sm'|'lg';
  className?: string; // Optional custom className for styling
}

const SearchBar: React.FC<SearchBarProps> = ({ className, icon="sm" }) => {
  const [query, setQuery] = useState(""); // Store user input
  const { suggestions, isSuggestionsVisible, loading } = useSearchSuggestions(query); // Get suggestions and loading state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query when input changes
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion); // Set clicked suggestion as the query
  };

  return (
    <div className="w-full flex justify-center">
      <div className={`${icon != "sm"? 'h-[64.17px] w-[334px] sm:w-[65%]' : 'h-[45px] '} relative bg-slate-100 rounded-full flex justify-start items-center gap-2 ${className}`}>
      <img
          className={`${icon == "sm" ? "h-[17.61px]" : "h-[25.11px]"}`}
          src="src\assets\icons\search.svg"
          alt="search_icon"
          />
      <input
        type="text"
        className="bg-transparent min-w-[] outline-none placeholder:text-slate-400 text-slate-600 w-full"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange} // Trigger on input change
        />
      {loading && query && (
        <p className={`absolute w-full ${icon != "sm"? 'top-[64.17px]' : 'top-[45px] '} left-[50%] translate-x-[-50%] bg-white shadow-lg mt-1 border-t border-gray-200 rounded-md z-10`}>
          Loading...
        </p>
      )}
      {isSuggestionsVisible && query && !loading && (
        <div className={`absolute w-full ${icon != "sm"? 'top-[64.17px]' : 'top-[45px] '} left-[50%] translate-x-[-50%] bg-white shadow-lg mt-1 border-t border-gray-200 rounded-md z-10`}>
          <ul className="max-h-60 overflow-y-auto scroll-smooth">
            {suggestions.map((item, index) => (
              <li
              key={index}
                className="px-4 py-2 cursor-pointer hover:bg-gray-100"
                onClick={() => handleSuggestionClick(item.search_value)} // Handle suggestion click
              >
                {item.display} {/* Display suggestion */}
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
