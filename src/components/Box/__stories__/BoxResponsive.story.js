import React from 'react'

import useScreenSizeType from '../../../helpers/useScreenSizeType'
import Text from '../../Text'
import Box from '../index'

const Template = (args) => {
  const screenSizeType = useScreenSizeType()

  return (
    <Box {...args} padding={['xsmall', 'gutter', 'xlarge']}>
      <Text>Screen Size Type: {screenSizeType}</Text>
    </Box>
  )
}

const BoxResponsive = Template.bind({})

BoxResponsive.argTypes = {
  margin: { table: { disable: true } },
  marginBottom: { table: { disable: true } },
  marginLeft: { table: { disable: true } },
  marginRight: { table: { disable: true } },
  marginTop: { table: { disable: true } },
  marginX: { table: { disable: true } },
  marginY: { table: { disable: true } },
  padding: { table: { disable: true } },
  paddingBottom: { table: { disable: true } },
  paddingLeft: { table: { disable: true } },
  paddingRight: { table: { disable: true } },
  paddingTop: { table: { disable: true } },
  paddingX: { table: { disable: true } },
  paddingY: { table: { disable: true } },
}

BoxResponsive.args = {
  backgroundColor: 'orange',
}

export default BoxResponsive
