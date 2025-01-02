/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'pri': '#ffdb63',
        'low-yel': '#ffe9a1',
        'low-gry': '#f5f2f2',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        '2xs': '416px',
      },
    },
  },
  plugins: [],
};
