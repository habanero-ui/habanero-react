import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import dividerThicknesses from '../../constants/dividerThicknesses'

const Root = styled.hr((props) => ({
  backgroundColor: props.theme.colors.border,
  borderStyle: 'none',
  height: {
    regular: 2,
    thin: 1,
  }[props.thickness],
}))

Divider.propTypes = {
  thickness: PropTypes.oneOf(dividerThicknesses),
}

export default function Divider(props) {
  return <Root {...props} />
}
