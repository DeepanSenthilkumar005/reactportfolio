module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: { 
        'xsm': { 'min': '0px' },
        'stm': { 'min': '10px', 'max': '768px' },
      },

      fontFamily: { 
        roboto: ['Roboto', 'sans-serif'],
         openSans: ['Open Sans', 'sans-serif'],
          lato: ['Lato', 'sans-serif'],
           montserrat: ['Montserrat', 'sans-serif'],
            merriweather: ['Merriweather', 'serif'],
            inter: ['Inter', 'sans-serif'], poppins: ['Poppins', 'sans-serif'],
           },
    },
  },
  plugins: [
    function({ addUtilities }) 
    { addUtilities(
      { '.no-scrollbar': { '-ms-overflow-style': 'none',/* Internet Explorer 10+ */ 
       'scrollbar-width': 'none', /* Firefox */ },
        '.no-scrollbar::-webkit-scrollbar': { 'display': 'none', /* Safari and Chrome */ },
       });
       }
  ],
}
