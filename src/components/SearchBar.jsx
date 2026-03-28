import { useState, useEffect, useCallback } from "react";
import debounce from "../utils/debounce";

function SearchBar({ onSearch }) {
  const [inputValue, setInputValue] = useState("");

  const debouncedSearch = useCallback(debounce(onSearch, 300), [onSearch]);

  useEffect(() => {
    debouncedSearch(inputValue);
  }, [inputValue, debouncedSearch]);

  return (
    <div className="filter-group">
      <label htmlFor="search-input">Search:</label>
      <input
        id="search-input"
        type="text"
        placeholder="Search products..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="search-input"
      />
    </div>
  );
}

export default SearchBar;
