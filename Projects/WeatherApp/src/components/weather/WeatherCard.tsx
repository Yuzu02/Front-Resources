import React from "react";
import { WeatherData } from "../../types/weather";
import {
  formatDate,
  formatTemperature,
  capitalizeWords,
  formatWindSpeed,
} from "../../utils/formatters";
import WeatherIcon from "./WeatherIcon";

interface WeatherCardProps {
  weather: WeatherData;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ weather }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      {" "}
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-semibold mb-2">{weather.name}</h2>
          <p className="text-sm text-gray-500">{formatDate(new Date())}</p>
        </div>
        <div className="absolute top-4 right-4">
          {" "}
          <WeatherIcon
            iconCode={weather.weather[0].icon}
            description={weather.weather[0].description}
          />
        </div>
      </div>
      <div className="mt-4">
        <p className="text-5xl font-semibold">
          {formatTemperature(weather.main.temp)}
        </p>
        <p className="mt-2 text-xl capitalize">
          {capitalizeWords(weather.weather[0].description)}
        </p>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div>
          <p className="text-sm text-gray-500">Feels Like</p>
          <p className="font-semibold">
            {formatTemperature(weather.main.feels_like)}
          </p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Humidity</p>
          <p className="font-semibold">{weather.main.humidity}%</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Wind Speed</p>
          <p className="font-semibold">{formatWindSpeed(weather.wind.speed)}</p>
        </div>
        <div>
          <p className="text-sm text-gray-500">Pressure</p>
          <p className="font-semibold">{weather.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
