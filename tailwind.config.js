/** @type {import('tailwindcss').Config} */

const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
   theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-mont)', ...fontFamily.sans],
      },
      colors: {
        dark: '#1B1B1B',
        light: '#F5F5F5',
        primary: '#B63E96',
        primaryDark: '#58E6D9'
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
      },
      backgroundImage:{
        circularLight: 'repeating-radial-gradient(rgba(0,0,0,0.4) 2px,#f5f5f5 5px,#f5f5f5 100px);',
        circularDark: 'repeating-radial-gradient(rgba(255,255,255,0.5) 2px,#1B1B1B 8px,#1B1B1B 100px);'
      }
    },
  },
  plugins: [],
}