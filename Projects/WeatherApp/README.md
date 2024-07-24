# Weather App

This project is a Weather Application that allows users to search for and display weather information for a specified location. It utilizes the OpenWeather API to fetch weather data and displays it in a user-friendly interface.

## Features

- **Search Weather by City:** Users can search for weather information by city name.
- **Display Weather Information:** Shows temperature, humidity, wind speed, and more.
- **Responsive Design:** The app is designed to be responsive, making it accessible on various devices.

## Built With

- [React](https://reactjs.org/) - A JavaScript library for building user interfaces.
- [Tailwind CSS](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [Vite](https://vitejs.dev/) - A build tool that aims to provide a faster and leaner development experience for modern web projects.
- [OpenWeather API](https://openweathermap.org/api) - Provides weather data.

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

- Node.js [install here](https://nodejs.org/en/download/)
- An API key from OpenWeather [sign up here](https://home.openweathermap.org/users/sign_up)

### Installation

```bash
# Clone the repository
git clone https://github.com/Yuzu02/Front-Resources.git

# Change directory
cd Front-Resources/Projects/WeatherApp
```

## Install dependencies

```bash
npm install
pnpm install
yarn install
bun install
```

## Setup the API key

Copy the [`.env.example`]file to a new file named `.env` and replace `YOUR_API_KEY` with your OpenWeather API key.

```bash
# Copy the .env.example file to .env
cp .env.example .env

# Example
VITE_OPEN_WEATHER_API_KEY="YOUR_API_KEY"
```

## Start the development server

```bash
npm run dev
pnpm run dev
yarn dev
bun run dev
```

## Usage

1. Enter a city name in the search bar and press `Enter` or click the search button.
2. View the weather information displayed on the screen.
3. To search for weather information for another city, repeat step 1.

## License

Distributed under the MIT License. See `LICENSE` for more information.
