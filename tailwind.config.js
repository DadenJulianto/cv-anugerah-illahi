/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slideInRight: {
          from: { transform: 'translateX(40px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
        slideInLeft: {
          from: { transform: 'translateX(-40px)', opacity: '0' },
          to: { transform: 'translateX(0)', opacity: '1' },
        },
      },
      animation: {
        slideInRight: 'slideInRight 0.4s ease-out',
        slideInLeft: 'slideInLeft 0.4s ease-out',
      },
    },
  },
  plugins: [],
}
