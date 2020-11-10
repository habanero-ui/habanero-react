import colors from '../../../constants/colors'
import textVariants from '../../../constants/textVariants'
import Text from '../index'
export { default as Default } from './TextDefault.story'

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: colors,
      },
    },
    variant: {
      control: {
        type: 'select',
        options: textVariants,
      },
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    color: 'black',
    colorIsBackground: false,
    component: 'span',
    variant: 'body-large',
  },
}
