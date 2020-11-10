import buttonVariants from '../../../constants/buttonVariants'
import colors from '../../../constants/colors'
import icons from '../../../constants/icons'
import iconSides from '../../../constants/iconSides'
import iconSizes from '../../../constants/iconSizes'
import textVariants from '../../../constants/textVariants'
import Button from '../index'
export { default as Default } from './ButtonDefault.story'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    iconName: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    iconSide: {
      control: {
        type: 'inline-radio',
        options: iconSides,
      },
    },
    iconSize: {
      control: {
        type: 'inline-radio',
        options: iconSizes,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium'],
      },
    },
    textVariant: {
      control: {
        type: 'select',
        options: textVariants,
      },
    },
    variant: {
      control: {
        type: 'inline-radio',
        options: buttonVariants,
      },
    },
  },
  args: {
    color: 'black',
    disabled: false,
    iconSide: 'right',
    iconSize: 'small',
    isLoading: false,
    size: 'medium',
    text: 'Text',
    textVariant: 'button',
    type: 'button',
    variant: 'primary',
  },
}
