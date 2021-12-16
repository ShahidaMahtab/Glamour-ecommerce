module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      black: "#000",
      white: "#fff",
      gray: {
        100: "#373737",
        200: "#0e0e0e",
        300: "#202020",
        900: "#1a202c",
      },
      purple: {
        800: "#9C27B0",
      },
      red: {
        100: "#fca5a5",
        200: "#fee2e2",
        300: "#fca5a5",
        400: "#f87171",
        500: "#b45309",
        700: "#FFFBEB",
        900: "#9D174D",
      },
      green: {
        100: "#009634",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
