/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to bottom right, #000000, rgb(28, 28, 4), rgb(78, 63, 9))',
        'dark-particle': 'linear-gradient(to bottom right, #0f0f1a, #1a1a2e, #16213e)'
      },
      zIndex: {
        '-10': '-10',
      }
    },
  },
  plugins: [],
};