/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/renderer/index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        base:"#020617",
        lightBase:"#070d1d"
      },
      textColor:{
        base:"#38BDF8"
      },
      colors:{
        utilGreen:"#155e75"
      }
    },
  },
  plugins: [],
}

