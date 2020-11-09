module.exports = {
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      colors: {
        // Surface
        black: '#3E3B3E',
        'heavy-black': '#242324',
        white: '#FFFFFF',
        // Primary Colors
        beige: '#F3F2E7',
        'dark-beige': '#E4E3D9',
        gold: '#C09E6B',
        // Secondary Colors
        blue: '#A6EFF5',
        green: '#97ECC2',
        orange: '#FCB68A',
        pink: '#FAB5D3',
        purple: '#B6A4FF',
        // Supportive Colors
        border: '#E5E5E5',
        error: '#DA1E28',
        info: '#3C6EEA',
        offwhite: '#F8F9FA',
        subtle: '#7C7C86',
        success: '#3AA76D',
        warning: '#F1B34D',
        // Transparent Overlays
        'white-half': 'rgba(255,255,255, 0.5)',
        'black-half': 'rgba(36, 35, 36, 0.5)',
      },
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        xxl: '1440px',
      },
    },
  },
}
