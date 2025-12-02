/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", './src/**/*.{js,jsx,ts,tsx,html}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        bodoni: ['"Bodoni Moda"', 'serif'],
      },
    },
  },
  plugins: [],
}