module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '102': '28rem',
        '106': '32rem',
      },
      fontFamily: {
        'source-sans': ['Source Sans Pro', 'sans-serif']
      },
      colors: {
        'main-axis': '#54B60F',
        'cross-axis': '#81A8FF',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
