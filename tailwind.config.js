module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        kiwi: '#0e182a',
        appblue: '#0D75FF',
        coregray: '#5A5F68',
        variant2: '#A6B0C3',
        variant3: '#58667E',
        footergrey: '#F3F5FB',
        bluegrey: '#DBE2F4',
        gray1: '#616681',
        whitegrey: '#F8FAFD',
        searchgrey: '#AEB2C5',
        propgrey: '#8F9AB0',
        googlegrey: '#dadce0',
      },
      fontSize: {
        '24px': ['1.375rem', { lineHeight: '1.75rem' }],
        '9px': ['.5625rem', { lineHeight: '1rem' }],
      },
      width: () => ({
        '250px': '250px',
        '300px': '300px',
        '325px': '325px',
        '420px': '420px',
        '660px': '660px',
      }),
      height: () => ({
        '600px': '600px',
        '800px': '800px',
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
