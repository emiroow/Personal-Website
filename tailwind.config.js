/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class', // false or 'media'
  theme: {
    extend: {
      screens: {
        '2xl': '1600px',
        // => @media (min-width: 1536px) { ... }
      },
      fontFamily: {
        IranBold: ['IranBold'],
        IranExtraLight: ['IranExtraLight'],
        IranLight: ['IranLight'],
        Yekan: ['Yekan']
      },
      colors: {
        MainColorDark: "#191923",
        DarkPurple: "#5505FF",
        BackColor: "#20202A",
        BackColorWhiter: "#24242E",
        LightBackcolor: "#19234E",
        LightMaincolor: "#D61C4E",
        LightYellow: "#FFC700",
        LightYellowDark: "#FEB139",
      }
    }
  },
  plugins: [],
}