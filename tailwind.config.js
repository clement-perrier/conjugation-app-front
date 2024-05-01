/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      gridTemplateRows: {
        // Simple 16 column grid
        // '3': 'repeat(3, minmax(125px, 1fr))'
      }
    },
  },
  plugins: [],
});

