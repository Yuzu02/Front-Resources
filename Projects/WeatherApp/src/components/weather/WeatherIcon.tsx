import React from "react";

interface WeatherIconProps {
  iconCode: string;
  description: string;
}

export const WeatherIcon: React.FC<WeatherIconProps> = ({
  iconCode,
  description,
}) => {
  const getIconUrl = (code: string) =>
    `http://openweathermap.org/img/wn/${code}@4x.png`;

  return (
    <div className="relative w-32 h-32">
      {" "}
      <img
        src={getIconUrl(iconCode)}
        alt={description}
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default WeatherIcon;
