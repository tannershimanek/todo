/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      primary: "#1e94d7",
      secondary: "#239c61",
      success: "#1ba672f2",
      danger: "#ed5f74f2",
      red: "#ED5F74",
      green: "#1BA672",
      blue: "#51B1E7",
      light: "#FAFAFA",
      dark: "#1B1B1B",
      "overlay-light": "#383B40",
      "overlay-dark": "#2D2F34",
      surface: "#27292D",
      base: "#1F2023",
      overflow: "#010101",
      white: "#FFFFFF",
      "gray-highlight": "#d2d6dc61",
    },
    extend: {},
  },
  plugins: [],
  darkMode: "class",
};
