/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["*.html"],
  mode: "jit",
  darkMode: false, //'media' or 'class'
  content: [],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Fira sans", "sans-serif"],
    },
  },
  plugins: [],
};
