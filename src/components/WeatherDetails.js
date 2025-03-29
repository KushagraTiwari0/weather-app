import React from "react";
import { motion } from "framer-motion";

const WeatherDetails = ({
  weather,
  forecast,
  error,
}) => {
  return (
    <div className="left-panel">
      {error && (
        <motion.p
          className="error-message"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          {error}
        </motion.p>
      )}
      {/* Display current weather details if data is there */}
      {weather && (
        <motion.div
          className="weather-info"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
        >
          <h2>{weather.name}</h2>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <p>{weather.weather[0].description}</p>
          <p>
            Temperature: {weather.main.temp}°C
          </p>
          <p>
            Humidity: {weather.main.humidity}%
          </p>
          <p>
            Wind Speed: {weather.wind.speed} km/h
          </p>
        </motion.div>
      )}
      {forecast.length > 0 && (
        <div className="forecast-container">
          {forecast.map((day, index) => (
            <motion.div
              key={index}
              className="forecast-card"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.2 }}
            >
              <p>
                {/* Displays the  current date of forecast */}
                {new Date(
                  day.dt_txt,
                ).toLocaleDateString()}
              </p>
              {/* Displays the  icon of the day */}
              <img
                src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
                alt={day.weather[0].description}
              />
              {/* Displays the Weather condition Discription*/}
              <p>{day.weather[0].description}</p>
              {/* Displays temperature for the day */}
              <p>Temp: {day.main.temp}°C</p>
            </motion.div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WeatherDetails;
