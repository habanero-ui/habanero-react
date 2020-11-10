import colors from '../../../constants/colors'
import Spinner from '../index'
export { default as Default } from './SpinnerDefault.story'

export default {
  title: 'Components/Spinner',
  component: Spinner,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    size: {
      control: {
        type: 'inline-radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
  args: {
    color: 'black',
    colorIsBackground: false,
    size: 'medium',
  },
}
