/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme: {
    // screens:{
    //   'sm':'400px',
    //   'md':'576px',
    //   'lg':'768px',
    // },
    extend: {
      fontFamily: {
        sans: ['Karla', 'sans-serif']
      }
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
}
