/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffdb63",
        light_yellow: "#ffe9a1",
        light_gray: "#f5f2f2",
        yellow: {
          100: "#FFF7C6",
          200: "#F9E79F",
          300: "#F8D586",
          400: "#FFEB8D",
          500: "#F6E05E",
          600: "#ECC94B",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        "2xs": "416px",
      },
    },
  },
  plugins: [],
};
