// components/SearchBar.tsx
import React, { useState } from "react";
import useSearchSuggestions from "../../hooks/searchSuggestions"; // Import the custom hook

interface SearchBarProps {
  className?: string; // Optional custom className for styling
}

const SearchBar: React.FC<SearchBarProps> = ({ className }) => {
  const [query, setQuery] = useState(""); // Store user input
  const { suggestions, isSuggestionsVisible, loading } = useSearchSuggestions(query); // Get suggestions and loading state

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value); // Update query when input changes
  };

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion); // Set clicked suggestion as the query
  };

  return (
    <div className={`relative ${className}`}>
      <input
        type="text"
        className="border px-4 py-2 rounded-md"
        placeholder="Search..."
        value={query}
        onChange={handleInputChange} // Trigger on input change
      />
      {loading && query && (
        <p className="absolute left-0 right-0 bg-white shadow-lg mt-1 border-t border-gray-200 rounded-md z-10">
          Loading...
        </p>
      )}
      {isSuggestionsVisible && query && !loading && (
        <div className="absolute left-0 right-0 bg-white shadow-lg mt-1 border-t border-gray-200 rounded-md z-10">
          <ul className="max-h-60 overflow-y-auto">
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
  );
};

export default SearchBar;
