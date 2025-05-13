/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        "default-text": "#000000",
        "selected-text": "#0ea5e9",
        "default-icon-fill": "#000000",
        "default-icon-stroke": "#000000",
        "selected-icon-fill": "#0ea5e9",
        "selected-icon-stroke": "#0ea5e9",
      }
    },
    screens: {
      mobile: "344px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1280px",
      laptopl: "1440px",
    },
  },
  plugins: [],
};
