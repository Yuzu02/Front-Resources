import React, { useState } from "react";
import "./index.css";
import {
  Header,
  SearchBar,
  LoadingSpinner,
  WeatherCard,
  Footer,
} from "./components";
import useWeather from "./hooks/useWeather";

const App: React.FC = () => {
  const [cities, setCities] = useState<string[]>([]);
  const { weatherData, loading, error } = useWeather(cities);

  const handleSearch = (city: string) => {
    if (!cities.includes(city)) {
      setCities((prevCities) => [...prevCities, city]);
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <SearchBar onSearch={handleSearch} />
        {loading && <LoadingSpinner />}
        {error && <p className="text-red-200 text-center">{error}</p>}
        <div className="space-y-4">
          {weatherData.map((weather, index) => (
            <WeatherCard key={`${weather.name}-${index}`} weather={weather} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
