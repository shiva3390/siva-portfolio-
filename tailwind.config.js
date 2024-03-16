/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
   "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      borderColor:{
        'primary': 'rgb(85,81, 227)',
        'secountry': 'rgb(36, 34, 95)'
      }
    },
    fontFamily:{
      'sri-font': 'Sriracha',
      'siva-font': 'Sofia'
    }
  },
  plugins: [],
}

