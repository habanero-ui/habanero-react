import { create } from '@storybook/theming/create'
import tailwindConfig from '../tailwind.config'

export default create({
  base: 'light',
  appBg: tailwindConfig.theme.extend.colors.offwhite,
  appContentBg: 'white',
  appBorderColor: tailwindConfig.theme.extend.colors.border,
  appBorderRadius: 4,
  barBg: tailwindConfig.theme.extend.colors.offwhite,
  barSelectedColor: tailwindConfig.theme.extend.colors.info,
  colorPrimary: tailwindConfig.theme.extend.colors.info,
  colorSecondary: tailwindConfig.theme.extend.colors.info,
  fontBase: '"Inter", sans-serif',
  fontCode: 'monospace',
  inputTextColor: tailwindConfig.theme.extend.colors.black,
  textColor: tailwindConfig.theme.extend.colors.black,
  textInverseColor: 'white',
})
