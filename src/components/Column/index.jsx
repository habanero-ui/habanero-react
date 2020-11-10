import PropTypes from 'prop-types'

import columnWidths from '../../constants/columnWidths'

Column.propTypes = {
  width: PropTypes.oneOf(columnWidths),
}

export default function Column(props) {
  const { children } = props

  return children
}
