import dividerThicknesses from '../../../constants/dividerThicknesses'
import Divider from '../index'
export { default as Default } from './DividerDefault.story'

export default {
  title: 'Components/Divider',
  component: Divider,
  argTypes: {
    thickness: {
      control: {
        type: 'inline-radio',
        options: dividerThicknesses,
      },
    },
  },
  args: {
    thickness: 'regular',
  },
}
