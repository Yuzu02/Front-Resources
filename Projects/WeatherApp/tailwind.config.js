/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: {
          600: "#7C3AED",
          700: "#6D28D9",
          800: "#5B21B6",
        },
        blue: {
          500: "#3B82F6",
        },
      },
    },
    plugins: [],
  },
};
