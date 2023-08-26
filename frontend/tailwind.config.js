/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'secondary-color': '#faa935',
        'primary-color': '#ff7e01',
        'heading-color': '#0b2727',
      },
      fontFamily: {
        'cherry-bomb-one': ['"Cherry Bomb One"', 'sans-serif'],
        montserrat: ['"Montserrat"', 'sans-serif'],
      },
      boxShadow: {
        'sticky-shadow': '3px 3px 8px -3px #ddd',
      },
    },
  },
  plugins: [],
};
