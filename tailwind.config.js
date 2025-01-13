/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    
    extend: {
      screens : {
        '2lg' : '1090px'
      },
      colors: {
      primary: '#545BE8',
      secondaryTextColor: '#969696',
      mainColor: '#141E32'
    },
    fontFamily: {
      Poppins: ['Poppins','sans-serif'],
      Inter: ['Inter','sans-serif'],
    },
    },
  },
  plugins: [],
}