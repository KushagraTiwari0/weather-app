import axios from "axios";

const API_KEY =
  process.env.REACT_APP_WEATHER_API_KEY;
const BASE_URL =
  "https://api.openweathermap.org/data/2.5";

export const fetchWeather = async (
  searchCity,
) => {
  try {
    const weatherRes = await axios.get(
      `${BASE_URL}/weather?q=${searchCity}&units=metric&appid=${API_KEY}`,
    ); // Fetch current weather data from OpenWeather API

    const forecastRes = await axios.get(
      `${BASE_URL}/forecast?q=${searchCity}&units=metric&appid=${API_KEY}`,
    ); // Fetch 5-day weather forecast data

    return {
      weather: weatherRes.data,
      forecast: forecastRes.data.list
        .filter((_, index) => index % 8 === 0) //this filtering logic picks the first entry of each day
        .slice(0, 5), // Limit to 5 days
    };
  } catch (error) {
    throw new Error(
      "City not found. Please try again.",
    );
  }
};
