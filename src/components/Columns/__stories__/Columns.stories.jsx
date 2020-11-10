import breakpoints from '../../../constants/breakpoints'
import columnWidths from '../../../constants/columnWidths'
import spacingAliases from '../../../constants/spacingAliases'
import stackAlignments from '../../../constants/stackAlignments'
import verticalAlignments from '../../../constants/verticalAlignments'
import Columns from '../index'
export { default as Default } from './ColumnsDefault.story'
export { default as Responsive } from './ColumnsResponsive.story'

export default {
  title: 'Components/Columns',
  component: Columns,
  argTypes: {
    align: {
      control: {
        type: 'inline-radio',
        options: stackAlignments,
      },
    },
    alignY: {
      control: {
        type: 'inline-radio',
        options: verticalAlignments,
      },
    },
    collapseAbove: {
      control: {
        type: 'select',
        options: breakpoints,
      },
    },
    collapseBelow: {
      control: {
        type: 'select',
        options: breakpoints,
      },
    },
    firstColumnWidth: {
      name: 'First Column width',
      control: {
        type: 'select',
        options: columnWidths,
      },
    },
    isReversed: {
      control: {
        type: 'boolean',
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
    alignY: 'top',
    firstColumnWidth: 'fluid',
    isReversed: false,
    space: 'gutter',
  },
  parameters: { layout: 'padded' },
}
