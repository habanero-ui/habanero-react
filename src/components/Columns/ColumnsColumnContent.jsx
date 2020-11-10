import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import stackAlignments from '../../constants/stackAlignments'
import verticalAlignments from '../../constants/verticalAlignments'
import Box from '../Box'

const Root = styled(Box)((props) => {
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
    flexGrow: 1,
  }
})

ColumnsColumnContent.propTypes = {
  align: PropTypes.oneOf(stackAlignments),
  alignY: PropTypes.oneOf(verticalAlignments),
  index: PropTypes.number,
  isCollapsed: PropTypes.bool,
  isReversed: PropTypes.bool,
  space: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ]),
}

ColumnsColumnContent.defaultProps = {
  align: 'stretch',
  alignY: 'top',
  space: undefined,
}

export default function ColumnsColumnContent(props) {
  const { index, isCollapsed, isReversed, space, ...rest } = props

  const paddingBottom = React.useMemo(() => {
    if (index === 0 || !isReversed) return

    return isCollapsed ? space : undefined
  }, [index, isCollapsed, isReversed, space])

  const paddingLeft = React.useMemo(() => {
    if (index === 0 || isReversed) return

    return isCollapsed ? undefined : space
  }, [index, isCollapsed, isReversed, space])

  const paddingRight = React.useMemo(() => {
    if (index === 0 || !isReversed) return

    return isCollapsed ? undefined : space
  }, [index, isCollapsed, isReversed, space])

  const paddingTop = React.useMemo(() => {
    if (index === 0 || isReversed) return

    return isCollapsed ? space : undefined
  }, [index, isCollapsed, isReversed, space])

  return (
    <Root
      paddingBottom={paddingBottom}
      paddingLeft={paddingLeft}
      paddingRight={paddingRight}
      paddingTop={paddingTop}
      {...rest}
    />
  )
}
