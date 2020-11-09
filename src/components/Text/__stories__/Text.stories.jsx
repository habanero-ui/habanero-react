import textVariants from '../../../constants/textVariants';
import Text from '../index';
export { default as Default } from './TextDefault.story';

export default {
  title: 'Components/Text',
  component: Text,
  argTypes: {
    variant: {
      control: {
        type: 'select',
        options: textVariants,
      },
    },
  },
  args: {
    children: 'The quick brown fox jumps over the lazy dog',
    className: '',
    component: 'span',
    variant: 'body-large',
  },
};
