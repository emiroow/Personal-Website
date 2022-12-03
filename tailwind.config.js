/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // false or 'media'
  theme: {
    extend: {
      fontFamily: {
        IranBold: ['IranBold'],
        IranExtraLight: ['IranExtraLight'],
        IranLight: ['IranLight']
      },
      colors: {
        MainColorDark: "#191923",
        DarkPurple: "#5505FF",
        BackColor: "#20202A",
        BackColorWhiter: "#24242E"
      }
    }
  },
  plugins: [],
}