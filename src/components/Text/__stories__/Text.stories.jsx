import Text from '../index'
export { default as Default } from './TextDefault.story'

export default {
  title: 'Components/Text',
  component: Text,
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
  },
}
