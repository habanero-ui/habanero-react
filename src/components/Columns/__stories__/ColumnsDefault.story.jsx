import React from 'react'

import Box from '../../Box'
import Column from '../../Column'
import Columns from '../index'

export default ((args) => {
  const { firstColumnWidth, ...rest } = args

  return (
    <Columns {...rest}>
      <Column width={firstColumnWidth}>
        <Box backgroundColor="subtle" padding="small" style={{ flexGrow: 1 }}>
          {firstColumnWidth}
        </Box>
      </Column>
      <Column width="fluid">
        <Box backgroundColor="subtle" padding="gutter" style={{ flexGrow: 1 }}>
          fluid
        </Box>
      </Column>
    </Columns>
  )
}).bind({})
