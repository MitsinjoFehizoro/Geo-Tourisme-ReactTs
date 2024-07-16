/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F14902",
        secondary: "#0F172A",
        background: "#F0F2F5",
        white: "#ffffff",
        black: "#666666"
      }
    },
  },
  plugins: [],
}