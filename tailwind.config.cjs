/** @type {import('tailwindcss').Config} */

const colours = require('tailwindcss/colors')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'cutive-mono': ['"Cutive Mono"']
      },
      fontSize: {
        'body-lg': '1rem',
        'body': '.875rem',
      }
    },
  },
  plugins: [],
}
