module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
  
    extend: {
        fontFamily: {
            'mono' : ['Roboto Mono', 'Helvetica', 'Arial', 'sans-serif']
          },
        spacing: {
            '120': '30rem'
        },
        transitionProperty : {
            'right': 'right'
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
