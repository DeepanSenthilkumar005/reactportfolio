module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { 
         customGray: '#f8f8f8',
         customBlack: '#000000',
         customWhite: '#FFFFFF',
         customGreen : '#00bf63',
        },
      screens: { 
        'xsm': { 'min': '0px' },
        'stm': { 'min': '10px', 'max': '768px' },
      },
      fontSize: { 
        'cstext': '23px',
      },

      

      fontFamily: { 
        roboto: ['Roboto', 'sans-serif'],
        openSans: ['Open Sans', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        merriweather: ['Merriweather', 'serif'],
        inter: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
      }
      
    },
  },
  // plugins: [
  //   function({ addUtilities }) 
  //   { addUtilities(
  //     { '.no-scrollbar': { '-ms-overflow-style': 'none',/* Internet Explorer 10+ */ 
  //      'scrollbar-width': 'none', /* Firefox */ },
  //       '.no-scrollbar::-webkit-scrollbar': { 'display': 'none', /* Safari and Chrome */ },
  //      });
  //      }
  // ],
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.webkit-overflow-hidden': {
          '-webkit-overflow-scrolling': 'none',
        },
      });
    },
  ],
}
