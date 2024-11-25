/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      '3xl': '1850px',
      '2xl': '1536px',
      'xl': '1280px',
      'lg': '1024px',
      'md': '768px',
      'sm': '640px',
      '2sm': '430px',
      'h2xl': {'raw': '(max-height: 1000px)'},
      'hxl': {'raw': '(max-height: 700px)'},
      'hsm': {'raw': '(max-height: 550px)'},
    },
    extend: {
      animation: {
        defil: 'defil 10s steps(8, end) infinite',
      },
      keyframes: {
        defil: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      gridTemplateColumns: {
        'auto-fit-200': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fill-200': 'repeat(auto-fill, minmax(200px, 1fr))',
      },
    },
  },
  plugins: [],
}