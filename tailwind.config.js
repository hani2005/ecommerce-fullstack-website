/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'md': {'max': '880px'},
      'sm': {'max': '480px'},
      'smm': {'max': '280px'},
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      colors: {
        'blueColor': '#e2bd80',
        'greyIsh': '#C5CBC7',
        'darkBlue': '#1e1b36'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
