/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(45% 45% at 50% 50%, #FFBEAD 0%, rgba(250, 242, 233, 0) 100%)',
      }
    },
  },
  plugins: [],
}
