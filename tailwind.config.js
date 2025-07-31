/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        navy: '#0a192f',
        slate: {
          900: '#0f172a',
          800: '#1e293b',
        },
        emerald: {
          400: '#34d399',
        },
      },
      fontFamily: {
        sans: ['Sora', 'sans-serif'],  // <-- ici la modification
        mono: ['Fira Code', 'monospace'],
      },
      // ❌ Supprimer les anciens dégradés inutiles
      backgroundImage: {},

      zIndex: {
        '-10': '-10',
      },
    },
  },
  plugins: [],
};
