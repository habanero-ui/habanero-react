import { create } from '@storybook/theming/create'
import theme from '../src/themes/light'

export default create({
  base: 'light',
  appBg: theme.colors.offwhite,
  appContentBg: 'white',
  appBorderColor: theme.colors.border,
  appBorderRadius: 4,
  barBg: theme.colors.offwhite,
  barSelectedColor: theme.colors.info,
  colorPrimary: theme.colors.info,
  colorSecondary: theme.colors.info,
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  inputTextColor: theme.colors.black,
  textColor: theme.colors.black,
  textInverseColor: 'white',
})
