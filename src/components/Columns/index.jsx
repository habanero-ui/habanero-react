import includes from 'lodash/includes'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import breakpoints from '../../constants/breakpoints'
import stackAlignments from '../../constants/stackAlignments'
import verticalAlignments from '../../constants/verticalAlignments'
import getResponsivePropValue from '../../helpers/getResponsivePropValue'
import useScreenSizeType from '../../helpers/useScreenSizeType'
import ColumnsColumn from './ColumnsColumn'
import ColumnsColumnContent from './ColumnsColumnContent'

const Root = styled.div((props) => {
  const getFlexDirection = ({ isCollapsed, isReversed }) => {
    if (isCollapsed) {
      return isReversed ? 'column-reverse' : 'column'
    }

    return isReversed ? 'row-reverse' : 'row'
  }

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
    flexDirection: getFlexDirection(props),
  }
})

Columns.propTypes = {
  align: PropTypes.oneOf(stackAlignments),
  alignY: PropTypes.oneOf(verticalAlignments),
  collapseAbove: PropTypes.oneOf(breakpoints),
  collapseBelow: PropTypes.oneOf(breakpoints),
  isReversed: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.arrayOf(PropTypes.bool),
  ]),
  space: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ]),
}

Columns.defaultProps = {
  align: 'stretch',
  alignY: 'top',
  space: undefined,
}

export default function Columns(props) {
  const {
    align,
    alignY,
    children,
    collapseAbove,
    collapseBelow,
    isReversed,
    space,
    ...rest
  } = props
  const screenSizeType = useScreenSizeType()

  const isCollapsed = React.useMemo(() => {
    return (
      (collapseBelow === 'tablet' && screenSizeType === 'mobile') ||
      (collapseBelow === 'desktop' &&
        includes(['mobile', 'tablet'], screenSizeType)) ||
      (collapseAbove === 'tablet' &&
        includes(['desktop', 'tablet'], screenSizeType)) ||
      (collapseAbove === 'desktop' && screenSizeType === 'desktop')
    )
  }, [collapseAbove, collapseBelow, screenSizeType])

  return (
    <Root
      align={align}
      alignY={alignY}
      isCollapsed={isCollapsed}
      isReversed={getResponsivePropValue(isReversed, screenSizeType)}
      {...rest}
    >
      {React.Children.map(children, (child, index) => (
        <ColumnsColumn
          key={index}
          align={align}
          alignY={alignY}
          isCollapsed={isCollapsed}
          width={child.props.width}
        >
          <ColumnsColumnContent
            align={align}
            alignY={alignY}
            index={index}
            isCollapsed={isCollapsed}
            isReversed={getResponsivePropValue(isReversed, screenSizeType)}
            space={space}
          >
            {child}
          </ColumnsColumnContent>
        </ColumnsColumn>
      ))}
    </Root>
  )
}
