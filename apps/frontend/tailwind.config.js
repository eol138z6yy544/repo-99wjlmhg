/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gcat: {
          bg: '#F2F8FF',
          surf: '#FFFFFF',
          stroke: '#C9DDFB',
          txt: '#14213D',
          txt2: '#5E7396',
          muted: '#8A9BB2',
          blue: '#1B6EF3',
          blueDeep: '#0B2A6B',
          green: '#22C55E',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
