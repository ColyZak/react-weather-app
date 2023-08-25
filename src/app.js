import React, { useEffect, useState } from "react";

const api = {
  base: "https://api.openweathermap.org/data/2.5/",
  key: "a73d01369d8af34dff24c3464341af84",
};
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [weatherData, setWeatherData] = useState("");
  const searchLocation = async (location) => {
    const response = await
     fetch(
      `${api.base}weather?q=${location}&units=metric&APPID=${api.key}`
    );
    const data = await response.json();
    setWeatherData(data);
    
   
  };
  useEffect(() => {
    searchLocation("Dakar");
  }, []);

  return (
    <div className="app">
      <div>
        <h1>Weather App</h1>
      </div>
      <div className="search">
        <input
          type="text"
          placeholder="search for location"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          className="btn btn-info"
          onClick={() => searchLocation(searchTerm)}
        >
          search
        </button>
      </div>
      <div className="card">
        <section className="vh-100">
          <div className="container py-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-md-8 col-lg-6 col-xl-4">
                <div className="card shadow-0 border">
                  <div className="card-body p-4">
                    <h4 className="mb-1 sfw-normal">
                      {weatherData?.name}, {weatherData.sys?.country}
                    </h4>
                    <p className="mb-2">
                      Current temperature:
                      <strong> {weatherData.main?.temp}°C </strong>
                    </p>
                    <p>
                      Feels Like:
                      <strong> {weatherData.main?.feels_like}°C
                      </strong>
                    </p>
                    <p>
                      Max: <strong>{weatherData.main?.temp_max}°C</strong>
                      , Min: <strong>{weatherData.main?.temp_min}°C</strong>
                    </p>

                    <div className="d-flex flex-row align-items-center">
                      <p className="mb-0 me-4">
                      weather : 
                      <strong> {weatherData.weather?.map(weather => weather.description)} </strong>
                      </p>
                      <i
                        className="fas fa-cloud fa-3x"
                        style={{ color: "#eee" }}
                      >
                        {weatherData.weather?.map(weather => weather.icon)}
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default App;
