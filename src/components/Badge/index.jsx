import PropTypes from 'prop-types'
import React from 'react'
import showIf from 'react-render-helpers/showIf'
import styled from 'styled-components'

import colors from '../../constants/colors'
import Box from '../Box'
import Text from '../Text'

const Root = styled(Box)((props) => ({}))

const BadgeText = styled(Text)((props) => ({}))

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
    <Root
      {...props}
      backgroundColor={color}
      borderRadius="full"
      paddingX="xsmall"
      paddingY="xxsmall"
    >
      {showIf(text)(
        <BadgeText
          {...props}
          colorIsBackground={true}
          variant="body-extra-small"
        >
          {text}
        </BadgeText>,
      )}
    </Root>
  )
}
