/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      'main-color': '#8257e5',
      'dark-color': '#07050c',
      'complement-color': '#bae557',
      'text-color': '#f6fdfa',
    },
    extend: {
      fontFamily: {
        'playfair': ['Playfair', 'sans-serif'],
      }
    },
  },
  plugins: [require("daisyui")],
}