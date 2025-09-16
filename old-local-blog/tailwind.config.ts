import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class', // Enable dark mode via class strategy
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {}
  },
  plugins: []
} satisfies Config
