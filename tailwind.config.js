module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          DEFAULT: '100%',
          lg: '1100px',
        },
      },
      colors: {
        black: '#000000',
        white: '#ffffff',
        blue: {
          200: '#47d1bc',
          300: '#5cbcae',
        },
        red: {
          300: '#924953',
        },
        orange: {
          300: '#eb894f',
        },
        yellow: {
          500: '#ffd912',
        },
        gray: {
          300: '#333333',
          500: '#666666',
          700: '#888888',
          800: '#999999',
        },
      },
      fontFamily: {
        sans: ['Afacad', 'Afacad Placeholder', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
