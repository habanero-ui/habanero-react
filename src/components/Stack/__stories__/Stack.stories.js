import dividerThicknesses from '../../../constants/dividerThicknesses'
import spacingAliases from '../../../constants/spacingAliases'
import stackAlignments from '../../../constants/stackAlignments'
import Stack from '../index'
export { default as Default } from './StackDefault.story'
export { default as Responsive } from './StackResponsive.story'

export default {
  title: 'Components/Stack',
  component: Stack,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: stackAlignments,
      },
    },
    dividerThicknesses: {
      control: {
        type: 'inline-radio',
        options: dividerThicknesses,
      },
    },
    space: {
      control: {
        type: 'select',
        options: [2.5, ...spacingAliases],
      },
    },
  },
  args: {
    align: 'stretch',
    showDividers: false,
    space: '',
  },
}
