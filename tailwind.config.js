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
        900: "#1a202c",
      },
      purple: {
        800: "#b367d0",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
