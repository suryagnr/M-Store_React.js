/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "375px",
      // => @media (min-width: 640px) { ... }

      md: "425px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    colors: {
      white: "#fff",
      tranparent: "rgba(0,0,0,0)",
      orange: "rgb(254, 115, 76)",
      "orange-80": "rgba(254, 115, 76, 0.8)",
      "orange-50": "rgba(254, 115, 76, 0.5)",
      "orange-20": "rgba(254, 115, 76, 0.2)",
      yellow: "rgb(255, 197, 41)",
      "yellow-80": "rgba(255, 197, 41, 0.8)",
      "yellow-50": "rgba(255, 197, 41, 0.5)",
      "yellow-20": "rgba(255, 197, 41, 0.2)",
      blue: "rgb(0, 122, 255)", // Replace with your desired blue color
      "blue-80": "rgba(0, 122, 255, 0.8)",
      "blue-50": "rgba(0, 122, 255, 0.5)",
      "blue-20": "rgba(0, 122, 255, 0.2)",
      black: "rgb(0, 0, 0)",
      "black-80": "rgba(0, 0, 0, 0.8)",
      "black-50": "rgba(0, 0, 0, 0.5)",
      "black-20": "rgba(0, 0, 0, 0.2)",
      grey: "rgb(154, 159, 174)",
      "grey-80": "rgba(154, 159, 174, 0.8)",
      "grey-50": "rgba(154, 159, 174, 0.5)",
      "grey-20": "rgba(154, 159, 174, 0.2)",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
