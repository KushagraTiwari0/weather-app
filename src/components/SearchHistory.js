import React from "react";
import "../Styles/SearchHistory.css"; 
const SearchHistory = ({
  history,
  fetchWeather,
}) => {
  return (
    <div className="search-history">
      {history.length > 0 && (
        <>
          {/* Only display recent searches if user has searched before*/}
          <h3>Recent Searches:</h3>
          <ul>
            {history.map((city, index) => (
              <li
                key={index}
                onClick={() => fetchWeather(city)} // Fetches weather for the city which is clicked
              >
                {city}
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
};

export default SearchHistory;
