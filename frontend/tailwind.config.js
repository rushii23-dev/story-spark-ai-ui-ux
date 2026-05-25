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
        spark: {
          'dark-green': '#1f2a1d',
          'medium-green': '#2d3a2a',
          'button-hover': '#2a3827',
          'text-green': '#4b5b47',
          'heading-primary': '#336443',
          'heading-accent': '#85AB8B',
          'bottom-text': '#3d5638',
          'bottom-btn-bg': '#3d5638',
          'bottom-btn-hover': '#2d4228',
        }
      },
      fontFamily: {
        sans: ['"Neue Haas Grotesk Display Pro 55 Roman"', 'Inter', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
