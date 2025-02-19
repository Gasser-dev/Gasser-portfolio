/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'gradient-236': 'linear-gradient(236deg, var(--tw-gradient-stops))'

      },
      gradientColorStopPositions: {
        8.54: '-8.54%',
        70.28: '70.28%'
      },
      fontFamily: {
        'Inconsolata': ['Inconsolata', 'serif'],
        'Inter':['Inter', 'serif']
      }
    },
  },
  plugins: [],
}

