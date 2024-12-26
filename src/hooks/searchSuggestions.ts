// hooks/SearchSuggestions.ts
import { useState, useEffect } from "react";
import axios from "axios"; // Import axios

interface Suggestion {
  display: string;
  search_value: string;
  type: string;
}

const API_BASE_URL = import.meta.env.VITE_URL_BASE; // Define your API base URL
const RAPID_API_HOST = import.meta.env.VITE_RAPIDAPI_HOST; // API host (if necessary)
const RAPIDAPI_KEY = import.meta.env.VITE_RAPIDAPI_KEY; // Your API key

const useSearchSuggestions = (query: string) => {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]); // Store search suggestions
  const [isSuggestionsVisible, setIsSuggestionsVisible] = useState(false); // Manage visibility of suggestions
  const [loading, setLoading] = useState(false); // Optional: To show loading state

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query.trim() || query.length < 2) {
        setSuggestions([]); // Clear suggestions if query is empty or too short
        setIsSuggestionsVisible(false);
        return;
      }

      setLoading(true);

      try {
        const response = await axios.get(`${API_BASE_URL}/recipes/auto-complete`, {
          params: { prefix: query }, // Query parameter for search
          headers: {
            "X-RapidAPI-Key": RAPIDAPI_KEY, // API key for the request
            "X-RapidAPI-Host": RAPID_API_HOST, // API host (if required)
          },
        });

        const results = response.data.results; // Assuming the response structure is similar to your example
        console.log
        setSuggestions(results);
        setIsSuggestionsVisible(results.length > 0); // Show suggestions only if results are present
      } catch (error) {
        console.error("Error fetching suggestions:", error);
        setSuggestions([]); // Clear suggestions on error
      } finally {
        setLoading(false); // Stop loading
      }
    };

    fetchSuggestions();
  }, [query]); // Dependency array to trigger effect when query changes

  return { suggestions, isSuggestionsVisible, loading }; // Return suggestions and related states
};

export default useSearchSuggestions;
