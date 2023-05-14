/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'screen': {'max': '1240px'},
      'screen1': {'max': '1140px'},
      'mlg': {'max': "896px"},
      'lg': {'max': '880px'},
      'md': {'max': '668px'},
      'mmd': {'max': '600px'},
      'smd': {'min': '335px' , 'max': '563px'},
      'screen2': {'max': '580px'},
      'sm': {'max': '510px'},
      'msm': {'max': '375px'},
    },
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'pacifico': ['Pacifico', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif']
      },
      gridTemplateColumns: {
        'grid1': "repeat(auto-fit, minmax(200px, 1fr))"
      },
      colors: {
        'blueColor': '#e2bd80',
        'greyIsh': '#C5CBC7',
        'darkBlue': '#090810'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
