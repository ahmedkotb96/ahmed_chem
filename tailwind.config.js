/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          400: '#38bdf8',
          500: '#0ea5e9',
          600: '#0284c7',
        },
        secondary: {
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
        }
      }
    }
  },
  plugins: [],
}
