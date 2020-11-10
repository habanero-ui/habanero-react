import React from 'react'

import useScreenSizeType from '../../../helpers/useScreenSizeType'
import Box from '../../Box'
import Column from '../../Column'
import Columns from '../index'

const Template = ((args) => {
  const { firstColumnWidth, ...rest } = args
  const screenSizeType = useScreenSizeType()

  return (
    <Columns
      {...rest}
      isReversed={[true, false, true]}
      space={['xsmall', 'gutter', 'xlarge']}
    >
      <Column width={firstColumnWidth}>
        <Box backgroundColor="subtle" padding="small" style={{ flexGrow: 1 }}>
          {firstColumnWidth} {screenSizeType}
        </Box>
      </Column>
      <Column width="fluid">
        <Box backgroundColor="subtle" padding="gutter" style={{ flexGrow: 1 }}>
          fluid {screenSizeType}
        </Box>
      </Column>
    </Columns>
  )
}).bind({})

const ColumnsResponsive = Template.bind({})

ColumnsResponsive.argTypes = {
  isReversed: { table: { disable: true } },
  space: { table: { disable: true } },
}

export default ColumnsResponsive
