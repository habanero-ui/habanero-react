import React from 'react'

import useScreenSizeType from '../../../helpers/useScreenSizeType'
import Stack from '../index'

export default ((args) => {
  const screenSizeType = useScreenSizeType()

  return (
    <Stack {...args} space={['xsmall', 'gutter', 'xlarge']}>
      <div>Item 1 {screenSizeType}</div>
      <div>Item 2 {screenSizeType}</div>
      <div>Item 3 {screenSizeType}</div>
    </Stack>
  )
}).bind({})
