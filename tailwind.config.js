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
      },

      screens: {
        'xs': '440px',
        'sm': '640px',
        'md': '765px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px'

      },

      backgroundImage: {
        heroBg: "url('./components/Assets/images/bgImage.png')"
      }
    },
  },
  plugins: [],
}