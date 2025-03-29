import React, { useState } from "react";
import { motion } from "framer-motion";
import { fetchWeather } from "./components/weatherService";

import WeatherDetails from "./components/WeatherDetails";
import WeatherControls from "./components/WeatherControls";
import AppTitle from "./components/AppTitle";

import "./Styles/WeatherDashboard.css"; 

const WeatherDashboard = () => {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [error, setError] = useState(null);
  const [history, setHistory] = useState([]);
  const [darkMode, setDarkMode] = useState(false);

  const handleFetchWeather = async (
    searchCity = city,
  ) => {
    try {
      setError(null);
      const { weather, forecast } =
        await fetchWeather(searchCity); // Fetching weather data
      // Updating the state with recieved weather and forecast data
      setWeather(weather);
      setForecast(forecast);

      setHistory((prevHistory) => {
        // Updating search history, ensuring no duplicates are present and limiting it to 5 entries
        const updatedHistory = [
          searchCity,
          ...prevHistory.filter(
            (c) => c !== searchCity,
          ),
        ].slice(0, 5);
        return updatedHistory;
      });
    } catch (err) {
      // showing error message if the API request fails
      setError(err.message);
    }
  };

  return (
    <motion.div // Main container for the weather dashboard
      className={`weather-dashboard ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AppTitle />
      <div className="dashboard-container">
        <WeatherControls
          city={city}
          setCity={setCity}
          fetchWeather={handleFetchWeather}
          history={history}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />
        <WeatherDetails
          weather={weather}
          forecast={forecast}
          error={error}
        />
      </div>
    </motion.div>
  );
};

export default WeatherDashboard;
