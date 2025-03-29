import React from "react";
import { motion } from "framer-motion";
import SearchBar from "./SearchBar";
import SearchHistory from "./SearchHistory";

const WeatherControls = ({
  city,
  setCity,
  fetchWeather,
  history,
  darkMode,
  setDarkMode, 
}) => {
  return (
    <div className="right-panel">
      {/*Right panel containing Search,Theme-Toggle,Refresh Button*/}
      <SearchBar
        city={city}
        setCity={setCity}
        fetchWeather={fetchWeather}
      />
      <SearchHistory
        history={history}
        fetchWeather={fetchWeather}
      />
      <div className="buttons-container">
        <motion.button
          className="refresh-button"
          onClick={() => fetchWeather()} // Calls the fetchWeather function for updating data
          whileHover={{ scale: 1.1 }}
        >
          Refresh
        </motion.button>
        <motion.button
          className="toggle-button"
          onClick={() => setDarkMode(!darkMode)}
          whileHover={{ scale: 1.1 }}
        >
          {darkMode ? "Light Mode" : "Dark Mode"}
        </motion.button>
      </div>
    </div>
  );
};

export default WeatherControls;
