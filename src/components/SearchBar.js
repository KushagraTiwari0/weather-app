import React from "react";
const SearchBar = ({
  city,
  setCity,
  fetchWeather,
}) => {
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      // Function to handle "Enter-key" for searching
      fetchWeather(); // Calls fetchWeather when Enter-key is pressed
    }
  };

  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        onKeyPress={handleKeyPress} // Allows user to  search by pressing "Enter-key"
        className="search-bar"
      />
      <button
        onClick={() => fetchWeather()} // Calls fetchWeather when button is clicked
        className="toggle-button"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
