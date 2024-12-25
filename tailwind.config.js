/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      color: {
        'pri': '#ffdb63',
        'light-yel' : '#ffe9a1',
        'light-gry' : '#f5f2f2'
      }
    },
  },
  plugins: [],
}