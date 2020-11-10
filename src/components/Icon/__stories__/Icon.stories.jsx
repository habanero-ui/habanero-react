import colors from '../../../constants/colors'
import icons from '../../../constants/icons'
import iconSizes from '../../../constants/iconSizes'
import Icon from '../index'
export { default as Default } from './IconDefault.story'

export default {
  title: 'Components/Icon',
  component: Icon,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    name: {
      control: {
        type: 'select',
        options: icons,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: iconSizes,
      },
    },
  },
  args: {
    color: 'black',
    colorIsBackground: false,
    name: 'bell',
    size: 'medium',
  },
}
