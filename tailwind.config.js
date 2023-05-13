/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'mlg': {'max': "896px"},
      'lg': {'max': '880px'},
      'md': {'max': '668px'},
      'mmd': {'max': '600px'},
      'smd': {'min': '335px' , 'max': '563px'},
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
        'darkBlue': '#1e1b36'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}
