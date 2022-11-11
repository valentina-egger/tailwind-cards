/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ['Overpass', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
};
