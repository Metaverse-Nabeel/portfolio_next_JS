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
      }
    },
  },
  plugins: [],
}