/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      screens: {
        lgc: '900px',
      },
      fontFamily: {
        hind: ['Hind', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
