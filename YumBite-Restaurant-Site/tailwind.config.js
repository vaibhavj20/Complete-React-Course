/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        Poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        "Medium-Brown": "#8a2b06",
        "Dark-Brown": "#4d1601",
        "Faint-Brown": "#b94517",
      },
    },
  },
  plugins: [],
};
