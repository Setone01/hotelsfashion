/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts}"],
  theme: {
    extend: {
      colors: {
        deepGrey: 'hsla(0, 0%, 85%, 1)',
        deepWine: 'hsla(334, 77%, 29%, 1)',
        textBlack: "hsla(0, 0%, 13%, 1)",
        textGrey: 'hsla(0, 0%, 25%, 1)',
        lightGrey: 'hsla(0, 0%, 28%, 1)',
        Pink: 'hsla(334, 100%, 97%, 1)',
      }
    },
  },
  plugins: [],
}