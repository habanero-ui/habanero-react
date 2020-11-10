import includes from 'lodash/includes'
import map from 'lodash/map'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import columnWidths from '../../constants/columnWidths'
import stackAlignments from '../../constants/stackAlignments'
import verticalAlignments from '../../constants/verticalAlignments'

const Root = styled.div((props) => {
  const getAlignItems = ({ align, alignY, isCollapsed }) => {
    if (isCollapsed) {
      return {
        center: 'center',
        left: 'flex-start',
        right: 'flex-end',
        stretch: 'stretch',
      }[align]
    }

    return {
      bottom: 'flex-end',
      center: 'center',
      stretch: 'stretch',
      top: 'flex-start',
    }[alignY]
  }

  return {
    alignItems: getAlignItems(props),
    display: 'flex',
  }
})

ColumnsColumn.propTypes = {
  align: PropTypes.oneOf(stackAlignments),
  alignY: PropTypes.oneOf(verticalAlignments),
  isCollapsed: PropTypes.bool,
  width: PropTypes.oneOf(columnWidths),
}

ColumnsColumn.defaultProps = {
  align: 'stretch',
  alignY: 'top',
  width: 'fluid',
}

export default function ColumnsColumn(props) {
  const { width, ...rest } = props

  const style = React.useMemo(() => {
    if (includes(width, '/')) {
      const dividendAndDivisor = map(width.split('/'), parseFloat)
      const percent = (dividendAndDivisor[0] / dividendAndDivisor[1]) * 100
      return { flex: `0 0 ${percent}%` }
    }

    if (width === 'content') {
      return { flexShrink: 0 }
    }

    return { width: '100%' }
  }, [width])

  return <Root style={style} {...rest} />
}
