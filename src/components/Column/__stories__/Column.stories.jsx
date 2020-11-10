import columnWidths from '../../../constants/columnWidths'
import Column from '../index'
export { default as Default } from './ColumnDefault.story'

export default {
  title: 'Components/Column',
  component: Column,
  argTypes: {
    width: {
      control: {
        type: 'select',
        options: columnWidths,
      },
    },
  },
  args: {
    children: 'Column Content',
    width: 'fluid',
  },
}
