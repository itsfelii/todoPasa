
// tailwind.config.js
const {nextui} = require("@nextui-org/react");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{html,js}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        zinc: {
          100 : '#F4F4F5' ,
          200 : '#E4E4E7' ,
          400 : '#A1A1AA' ,
          600 : '#52525B' ,
          800 : '#27272A' ,
          900 : '#18181B'
        }
      }
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};