/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        nano: {
          dark: '#3E1821',
          light: '#E7EEBE'
        }
      }
    },
  },
  plugins: [],
}