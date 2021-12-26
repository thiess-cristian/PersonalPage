module.exports = {
  purge: {
    enabled: false,
    content: ['./*.html']
  },
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins']
      }
    },
  },
  variants: {
    extend: {
      display: ['dark']
    },
  },
  plugins: [],
}
