// src/utils/formatters.ts

// Convert temperature from Celsius to Fahrenheit
export const celsiusToFahrenheit = (celsius: number): number => {
  return (celsius * 9) / 5 + 32;
};

// Format temperature with unit
export const formatTemperature = (
  temp: number,
  unit: "C" | "F" = "C",
): string => {
  const temperature = unit === "F" ? celsiusToFahrenheit(temp) : temp;
  return `${Math.round(temperature)}°${unit}`;
};

// Convert wind speed from m/s to km/h
export const msToKmh = (speedMs: number): number => {
  return speedMs * 3.6;
};

// Format wind speed with unit
export const formatWindSpeed = (
  speed: number,
  unit: "m/s" | "km/h" = "m/s",
): string => {
  const windSpeed = unit === "km/h" ? msToKmh(speed) : speed;
  return `${windSpeed.toFixed(1)} ${unit}`;
};

// Format date to a readable string
export const formatDate = (date: Date): string => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

// Capitalize first letter of each word
export const capitalizeWords = (str: string): string => {
  return str.replace(/\b\w/g, (char) => char.toUpperCase());
};
