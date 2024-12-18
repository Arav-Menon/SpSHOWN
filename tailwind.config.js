/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "Primary-color" : "#ff77f4",
      },
      backgroundImage : {
        "cursorImage" : "url('./src/assets/cursor follow.jpg')",
      }
    },
  },
  plugins: [],
}

