import { useState, useEffect } from "react";
import { getWeather } from "../services/weatherService";
import { WeatherData } from "../types/weather";

const useWeather = (cities: string[]) => {
  const [weatherData, setWeatherData] = useState<WeatherData[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchWeather = async () => {
      if (cities.length === 0) return;

      setLoading(true);
      setError(null);

      try {
        const lastCity = cities[cities.length - 1];
        const data = await getWeather(lastCity);
        setWeatherData((prevData) => [...prevData, data]);
      } catch (err) {
        setError("Failed to fetch weather data");
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [cities]);

  return { weatherData, loading, error };
};

export default useWeather;
