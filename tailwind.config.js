/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
    fontFamily: {
      sans: ['Graphik', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      spacing: {
        'window-padding-small': '10rem',
        'window-padding-large': '20rem',
        'padding-heading1': '4.5rem',
        'padding-heading2': '2rem',
        'padding-component-medium': '1.5rem',
        'padding-component-small': '1rem',
      },
      fontFamily: {
        body: ['Roboto']
      },
      borderRadius: {
        '4xl': '2rem',
      },
      size: {
        'sidebar': '20rem'
      }
    }
  },
  plugins: [],
});