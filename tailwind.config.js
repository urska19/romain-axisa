module.exports = {
  content: ["./dist/**/*.{html,njk}"],
  theme: {
      colors: {
        black: '#040303',
        azure: '#F5F1ED',
        blue: '#2E86AB',
        blue_shade: '#6daac4'
      },
    extend: {
      fontFamily: {
        'sans': ['Roboto', 'Helvetica', 'Arial', 'sans-serif']
      }
    },
  },
  plugins: []
}

