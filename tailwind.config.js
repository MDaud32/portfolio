module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screen: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      fontFamily: {
        rubik: ['PT Serif', 'serif'],
      },
      colors: {
        gold: '#FACF0F',
        softBlack: '#303031',
      },
    },
  },
  plugins: [],
};
