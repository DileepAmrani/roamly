/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "purple": "#5C08EC",
        "purple_700": "#9D6BF4",
        "border-purple": "#8A4FEF",
        "deep_gray": "#2E2E2C",
        "dark_gray": "#737373",
        "gray_900": "#A6A6A6",
        "black_800": "#232323",
        "black_900": "#0B0B0B",
        "black-700": "#3C3C3C",
        "light_gray": "#FAF9F7",
        "yellow_900": "#E1FF22",
        "border_yellow": "#C4D751",
        "pink": "#FAB5FF",
        "blue": "#272BFF",
      },
      screens: {
        "lmd": "968px",
        "xmd": "550px",
        "xsm": "370px"
      }
    },
  },
  plugins: [],
}