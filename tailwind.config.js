/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
  ],
  theme: {
    extend: {
      fontFamily:{
        'iowan':['Iowan', 'sans-serif'],
        'kinetica':['Kinetica','sans-serif'],
        'kross':['KrossNeueGrotesk-Book','sans-serif']
      },
      colors: {
        'primary-black': '#FFFFFF',
        'secondary-white': '#131313',
        'green': '#005527',
        'light-green': '#A9CB5B'

      },
      fontSize: {
        
        base: '40px',
        
      },
    },
  },
  plugins: [],
}