import isNaN from 'lodash/isNaN'
import isNumber from 'lodash/isNumber'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import borderRadii from '../../constants/borderRadii'
import colors from '../../constants/colors'
import textVariants from '../../constants/textVariants'
import getResponsivePropValue from '../../helpers/getResponsivePropValue'
import useScreenSizeType from '../../helpers/useScreenSizeType'

const Root = styled.div((props) => ({
  backgroundColor: props.theme.colors[props.backgroundColor],
  borderRadius: props.theme.borderRadii[props.borderRadius],
}))

const spacingPropType = PropTypes.oneOfType([
  PropTypes.number,
  PropTypes.string,
  PropTypes.arrayOf(PropTypes.oneOfType([PropTypes.number, PropTypes.string])),
])

Box.propTypes = {
  backgroundColor: PropTypes.oneOf(colors),
  borderRadius: PropTypes.oneOf(borderRadii),
  className: PropTypes.string,
  component: PropTypes.string,
  margin: spacingPropType,
  marginBottom: spacingPropType,
  marginLeft: spacingPropType,
  marginRight: spacingPropType,
  marginTop: spacingPropType,
  marginX: spacingPropType,
  marginY: spacingPropType,
  padding: spacingPropType,
  paddingBottom: spacingPropType,
  paddingLeft: spacingPropType,
  paddingRight: spacingPropType,
  paddingTop: spacingPropType,
  paddingX: spacingPropType,
  paddingY: spacingPropType,
  showInteractionOverlay: PropTypes.bool,
  variant: PropTypes.oneOf(textVariants),
}

export default function Box(props) {
  const {
    backgroundColor = 'none',
    borderRadius = 'none',
    children,
    className,
    component = 'div',
    margin = 'none',
    marginBottom = 'none',
    marginLeft = 'none',
    marginRight = 'none',
    marginTop = 'none',
    marginX = 'none',
    marginY = 'none',
    padding = 'none',
    paddingBottom = 'none',
    paddingLeft = 'none',
    paddingRight = 'none',
    paddingTop = 'none',
    paddingX = 'none',
    paddingY = 'none',
    style: styleProp = {},
    ...rest
  } = props

  const screenSizeType = useScreenSizeType()

  const style = React.useMemo(() => {
    const getValue = (baseValue) =>
      getRemFromSpacing(getResponsivePropValue(baseValue, screenSizeType))

    return {
      marginBottom: getValue(marginBottom || marginY || margin),
      marginLeft: getValue(marginLeft || marginX || margin),
      marginRight: getValue(marginRight || marginX || margin),
      marginTop: getValue(marginTop || marginY || margin),
      paddingBottom: getValue(paddingBottom || paddingY || padding),
      paddingLeft: getValue(paddingLeft || paddingX || padding),
      paddingRight: getValue(paddingRight || paddingX || padding),
      paddingTop: getValue(paddingTop || paddingY || padding),
      ...styleProp,
    }
  }, [
    margin,
    marginBottom,
    marginLeft,
    marginRight,
    marginTop,
    marginX,
    marginY,
    padding,
    paddingBottom,
    paddingLeft,
    paddingRight,
    paddingTop,
    paddingX,
    paddingY,
    screenSizeType,
    styleProp,
  ])

  return (
    <Root
      as={component}
      backgroundColor={backgroundColor}
      borderRadius={borderRadius}
      style={style}
      {...rest}
    >
      {children}
    </Root>
  )
}

export function getRemFromSpacing(spacing) {
  if (isNumber(spacing) || !isNaN(parseFloat(spacing))) {
    return `${(spacing * 4) / 16}rem`
  }

  const pxToRem = (px) => px / 16

  return {
    '-gutter': `-${pxToRem(24)}rem`,
    '-large': `-${pxToRem(40)}rem`,
    '-medium': `-${pxToRem(16)}rem`,
    '-small': `-${pxToRem(12)}rem`,
    '-xlarge': `-${pxToRem(64)}rem`,
    '-xsmall': `-${pxToRem(8)}rem`,
    '-xxlarge': `-${pxToRem(128)}rem`,
    '-xxsmall': `-${pxToRem(4)}rem`,
    gutter: `${pxToRem(24)}rem`,
    large: `${pxToRem(40)}rem`,
    medium: `${pxToRem(16)}rem`,
    none: undefined,
    small: `${pxToRem(12)}rem`,
    xlarge: `${pxToRem(64)}rem`,
    xsmall: `${pxToRem(8)}rem`,
    xxlarge: `${pxToRem(128)}rem`,
    xxsmall: `${pxToRem(4)}rem`,
  }[spacing]
}
