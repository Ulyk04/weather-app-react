import './App.css';
import lgo from './weather.png';
import axios from 'axios';
import { useState, useEffect } from 'react';

const url = 'https://api.openweathermap.org/data/2.5/weather?q=';
const api = ',&APPID=043de2361d137cb5d121e77537111296';

function App() {
  const [city, setCity] = useState('Almaty');
  const [weather, setWeather] = useState(null);

  const getWeatherData = async () => {
    try {
      const response = await axios.get(`${url}${city}${api}`);
      setWeather(response.data);
    } catch (error) {
      console.error('Error fetching weather data:', error);
    }
  };

  useEffect(() => {
    getWeatherData();
  }, [city]);

  return (
    <div className="App">
      <header className="App-header">
        <div className="wrapper">
          <h1>WEATHER APP</h1>
          <img src={lgo} className="img" alt="img" />
          {weather && (
            <>
              <h2>{weather.name}</h2>
              <h3>Temp: {Math.round(weather.main.temp - 273.15)}°C</h3>
            </>
          )}
          <input
            type="search"
            placeholder="Write the name of city"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button onClick={getWeatherData}>
            <span>&#128269;</span>
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
