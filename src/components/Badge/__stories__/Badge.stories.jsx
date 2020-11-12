import colors from '../../../constants/colors'
import Badge from '../index'
export { default as Default } from './BadgeDefault.story'

export default {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
  },
  args: {
    color: 'black',
    text: 'Some Text',
  },
}
