Weather Forecasting App

A simple weather forecasting web application that fetches real-time weather data using the OpenWeather API.

🌟 Features

Real-time weather updates for any city

5-day weather forecast (every 24 hours)

Dark mode toggle

Recent search history

Smooth UI animations with Framer Motion

🛠️ Tech Stack

Frontend: React.js, Framer Motion

HTTP Requests: Axios

Styling: CSS

API Provider: OpenWeather API

🚀 Setup Instructions

1. Clone the Repository

git clone https://github.com/your-username/weather-app.git
cd weather-app

2. Install Dependencies

npm install

3. Set Up Environment Variables

Create a .env file in the root directory and add your API key:

REACT_APP_WEATHER_API_KEY=your_openweather_api_key

4. Start the Development Server

npm start

Your app should now be running at http://localhost:3000/.

🌍 API Integration Details

This app integrates with the OpenWeather API to fetch real-time weather data.

📌 Endpoints Used

Current Weather Data:

https://api.openweathermap.org/data/2.5/weather?q={CITY}&units=metric&appid={API_KEY}

5-Day Forecast (every 24 hours):

https://api.openweathermap.org/data/2.5/forecast?q={CITY}&units=metric&appid={API_KEY}

⚠️ API Rate Limits

Free tier: 60 calls per minute

Consider caching results to optimize performance