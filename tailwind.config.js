/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ffdb63",
        lignt_yellow: "#ffe9a1",
        light_gray: "#f5f2f2",
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
