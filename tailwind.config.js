/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./public/**/*.{html,js}" //Background
  ],
  theme: {

    extend: {
      colors:{
        //Darkest to brightest
        primary:'#645CBB',
        secondary:'#A084DC',
        third:'#BFACE2',
        fourth:'#EBC7E6',
      },
    },
  },
  plugins: [],
}
