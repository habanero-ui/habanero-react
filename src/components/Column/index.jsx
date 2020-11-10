import PropTypes from 'prop-types'
import React from 'react'

import columnWidths from '../../constants/columnWidths'

Column.propTypes = {
  width: PropTypes.oneOf(columnWidths),
}

export default function Column(props) {
  const { children, width, ...rest } = props

  return <div {...rest}>{children}</div>
}
