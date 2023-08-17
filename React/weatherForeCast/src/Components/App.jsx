import React, { useState } from 'react';
import "../Style/App.css"


function App() {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [weatherData, setWeatherData] = useState(null);

  const handleLatitudeChange = event => {
    setLatitude(event.target.value);
  };

  const handleLongitudeChange = event => {
    setLongitude(event.target.value);
  };

  const handleSubmit = async event => {
    event.preventDefault();
    
    try {
      const response = await fetch(`https://api.met.no/weatherapi/locationforecast/2.0/compact?lat=${latitude}&lon=${longitude}`);
      if (response.ok) {
        const data = await response.json();
        setWeatherData(data.properties.timeseries.slice(0, 30));
      } else {
        console.error('Error fetching data');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div id="root">
      <h1>Weather Forecast</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="latitude">Latitude:</label>
        <input type="text" id="latitude" className="latitude"
          value={latitude}
          onChange={handleLatitudeChange}
        />
        <label htmlFor="longitude">Longitude:</label>
        <input type="text" id="longitude" className="longitude"
          value={longitude}
          onChange={handleLongitudeChange}
        />
        <button type="submit">Get Forecast</button>
      </form>
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temperature (°C)</th>
              <th>Summary</th>
            </tr>
          </thead>
        {weatherData && (
          <tbody>
            {weatherData.map(forecast => (
              <tr key={forecast.time}>
                <td>{new Date(forecast.time).toLocaleString()}</td>
                <td>{forecast.data.instant.details.air_temperature.toFixed(1)}</td>
                <td>{forecast.data.next_1_hours.summary.symbol_code}</td>
              </tr>
            ))}
          </tbody>
          )}
        </table>
    </div>
  );
}

export default App;
