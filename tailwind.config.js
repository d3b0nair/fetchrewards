/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './layout/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './page-components/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      minHeight: {
        calc: 'calc(100vh - 42px - 80px);', //80px header Y margin, 42px header element size
      },
      animation: {
        ripple: 'ripple 1s',
      },
      keyframes: {
        ripple: {
          '0%': {
            transform: 'scale(0)',
            opacity: 1,
          },
          '100%': {
            transform: 'scale(2)',
            opacity: 0,
          },
        },
      },
    },
  },
  plugins: [],
};
