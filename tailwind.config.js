/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-orange": "#ffa319",
        "primary-blue": "#155f83",
        "primary-blue-light": "#155f83"
      }
    },
  },
  plugins: [],
}

