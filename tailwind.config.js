module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: { 
        'cus-theme': '#ffffff',
         customGray: '#f8f8f8',
         customBlack: '#000000'
        ,},
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
            'great-vibes': ['Great Vibes', ],
             'pacifico': ['Pacifico', ],
              'lobster': ['Lobster', ],
               'dancing-script': ['Dancing Script', ],
                'allura': ['Allura', ],
                 'satisfy': ['Satisfy', ],
                  'shadows-into-light': ['Shadows Into Light',],
                   'sacramento': ['Sacramento', ],
                    'yellowtail': ['Yellowtail','Poppins','Inter', 'Merriweather','Roboto','sans-serif'],
                     'tangerine': ['Tangerine', ],
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
