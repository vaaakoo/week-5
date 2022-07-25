const defaultTheme = require('tailwindcss/defaultTheme')


module.exports = {
  darkMode: 'class',
  content: ["./*.html"],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'mm': '840px',
      // => @media (min-width: 640px) { ... }

      'md': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {
      // ...
      colors: {
        'light-grey': '#e5e7eb',
        'midnight': '#4b5563',
        'orange-scoot': '#E99210',
        'b-red': '#E54D25',
        'vector-collor': '#34353F',
      },
    },
  },
  plugins: [],
}