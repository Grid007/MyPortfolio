const { Config } = require('tailwindcss');

/** @type {Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  variants: {
    extend: {
      backgroundColor: ['group-hover', 'touch', 'active'],
      textColor: ['touch', 'active'],
      scale: ['group-hover'],
      translate: ['group-hover'],
      zIndex: ['group-hover'],
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      colors: {
        skin: '#f2f2f2',
        strongYellow: 'rgb(253, 193, 38)',
        strongGrey: 'rgb(51, 51, 51)',
      },
    },
  },
};
