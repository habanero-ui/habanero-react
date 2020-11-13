import PropTypes from 'prop-types'
import React from 'react'
import showIf from 'react-render-helpers/showIf'

import colors from '../../constants/colors'
import Box from '../Box'
import Text from '../Text'

Badge.propTypes = {
  color: PropTypes.oneOf(colors),
  text: PropTypes.string,
}

Badge.defaultProps = {
  color: 'black',
}

export default function Badge(props) {
  const { color, text } = props

  return (
    <Box
      {...props}
      backgroundColor={color}
      borderRadius="full"
      paddingX="xsmall"
      paddingY="xxsmall"
    >
      {showIf(text)(
        <Text {...props} colorIsBackground={true} variant="body-extra-small">
          {text}
        </Text>,
      )}
    </Box>
  )
}
