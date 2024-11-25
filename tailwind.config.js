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
            'great-vibes': ['Great Vibes', 'cursive'],
             'pacifico': ['Pacifico', 'cursive'],
              'lobster': ['Lobster', 'cursive'],
               'dancing-script': ['Dancing Script', 'cursive'],
                'allura': ['Allura', 'cursive'],
                 'satisfy': ['Satisfy', 'cursive'],
                  'shadows-into-light': ['Shadows Into Light','cursive'],
                   'sacramento': ['Sacramento', 'cursive'],
                    'yellowtail': ['Yellowtail','Poppins','Inter', 'Merriweather','sans-serif'],
                     'tangerine': ['Tangerine', 'cursive'],
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
