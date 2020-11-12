import React from 'react'

import Box from '../../Box'
import Button from '../../Button'
import Stack from '../index'

export default ((args) => (
  <Stack {...args}>
    <Button text="Button 1" />
    <Box backgroundColor="purple">Colored Box!</Box>
    <Button text="Button 2" />
    <span>Normal SPAN.</span>
    <Button text="Button 3" />
  </Stack>
)).bind({})
