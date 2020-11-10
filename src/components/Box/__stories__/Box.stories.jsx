import borderRadii from '../../../constants/borderRadii'
import colors from '../../../constants/colors'
import spacingAliases from '../../../constants/spacingAliases'
import Box from '../index'
export { default as Default } from './BoxDefault.story'
export { default as Responsive } from './BoxResponsive.story'

const spacingArgType = {
  control: {
    type: 'select',
    options: [2.5, ...spacingAliases],
  },
}

export default {
  title: 'Components/Box',
  component: Box,
  argTypes: {
    backgroundColor: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    borderRadius: {
      control: {
        type: 'select',
        options: borderRadii,
      },
    },
    margin: spacingArgType,
    marginBottom: spacingArgType,
    marginLeft: spacingArgType,
    marginRight: spacingArgType,
    marginTop: spacingArgType,
    marginX: spacingArgType,
    marginY: spacingArgType,
    padding: spacingArgType,
    paddingBottom: spacingArgType,
    paddingLeft: spacingArgType,
    paddingRight: spacingArgType,
    paddingTop: spacingArgType,
    paddingX: spacingArgType,
    paddingY: spacingArgType,
  },
  args: {
    backgroundColor: 'none',
    borderRadius: 'none',
    margin: undefined,
    marginBottom: undefined,
    marginLeft: undefined,
    marginRight: undefined,
    marginTop: undefined,
    marginX: undefined,
    marginY: undefined,
    padding: undefined,
    paddingBottom: undefined,
    paddingLeft: undefined,
    paddingRight: undefined,
    paddingTop: undefined,
    paddingX: undefined,
    paddingY: undefined,
  },
}
