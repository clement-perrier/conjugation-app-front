/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        /* 'c-sm': '478px',
        'c-md': '703px',
        'c-lg': '928px' */
      },
      gridTemplateRows: {
        // Simple 16 column grid
        // '3': 'repeat(3, minmax(125px, 1fr))'
      },
    },
  },
  plugins: [],
};
