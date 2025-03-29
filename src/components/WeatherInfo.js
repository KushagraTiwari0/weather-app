import React from "react";

const WeatherInfo = ({ weather }) => {
  if (!weather) return null;

  return (
    <div className="weather-info">
      <h2>{weather.name}</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>
        Condition:{" "}
        {weather.weather[0].description}
      </p>
      <p>Humidity: {weather.main.humidity}%</p>
      <p>Wind Speed: {weather.wind.speed} km/h</p>
      <img
        src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`}
        alt={weather.weather[0].description}
      />
    </div>
  );
};

export default WeatherInfo;
