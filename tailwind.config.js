const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      // Build your colour palette here
      transparent: 'transparent',
      current: 'currentColor',
      gray: colors.warmGray,
      black: colors.black,
      white: colors.white,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber,
      green: colors.green,
      cyan: colors.cyan,
      lime: colors.lime,
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
