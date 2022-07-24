const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      // ...
      colors: {

      },
    },
  },
  plugins: [],
}
