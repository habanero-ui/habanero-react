export default {
  borderRadii: {
    medium: '0.3125rem',
    full: '9999px',
    none: undefined,
    small: '0.125rem',
  },
  colors: {
    beige: '#F3F2E7',
    black: '#3E3B3E',
    blue: '#A6EFF5',
    border: '#E5E5E5',
    error: '#DA1E28',
    gold: '#C09E6B',
    green: '#97ECC2',
    info: '#3C6EEA',
    offwhite: '#F8F9FA',
    orange: '#FCB68A',
    none: undefined,
    pink: '#FAB5D3',
    purple: '#B6A4FF',
    subtle: '#7C7C86',
    success: '#3AA76D',
    warning: '#F1B34D',
    white: '#FFFFFF',
  },
  screens: {
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1440px',
  },
  spacing(multiplier) {
    return `${(multiplier * 4) / 16}rem`
  },
}
