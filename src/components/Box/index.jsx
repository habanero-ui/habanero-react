import every from 'lodash/every'
import forEach from 'lodash/forEach'
import includes from 'lodash/includes'
import isArray from 'lodash/isArray'
import isNaN from 'lodash/isNaN'
import isNil from 'lodash/isNil'
import isNumber from 'lodash/isNumber'
import map from 'lodash/map'
import without from 'lodash/without'
import { readableColor } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import borderRadii from '../../constants/borderRadii'
import colors from '../../constants/colors'
import spacingAliases from '../../constants/spacingAliases'
import getResponsivePropValue from '../../helpers/getResponsivePropValue'
import useScreenSizeType from '../../helpers/useScreenSizeType'

const Root = styled.div((props) => {
  const backgroundColor = props.theme.colors[props.backgroundColor]

  return {
    backgroundColor,
    borderRadius: props.theme.borderRadii[props.borderRadius],
    ...(props.showInteractionOverlay
      ? {
          cursor: 'pointer',
          position: 'relative',
          '&::after': {
            backgroundColor: readableColor(backgroundColor || 'white'),
            bottom: 0,
            content: '""',
            left: 0,
            pointerEvents: 'none',
            opacity: 0,
            position: 'absolute',
            right: 0,
            top: 0,
            transition: 'opacity 100ms ease-in-out',
          },
          '&:hover::after': {
            opacity: readableColor(backgroundColor || 'white', '0.1', '0.2'),
          },
          '&:active::after': {
            opacity: readableColor(backgroundColor || 'white', '0.25', '0.4'),
          },
        }
      : {}),
  }
})

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
}

export default function Box(props) {
  const {
    backgroundColor = 'none',
    borderRadius = 'none',
    children,
    className,
    component = 'div',
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

  React.useEffect(() => {
    forEach(
      {
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
      },
      (value, key) => getIsSpacingPropValid(key)(value),
    )
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

function getIsSpacingPropValid(propName) {
  return (value) => {
    if (isNil(value)) return

    const negativeSpacingAliases = map(
      without(spacingAliases, 'none'),
      (alias) => `-${alias}`,
    )
    const isSingleValueValid = (singleValue) =>
      includes(
        ['', ...spacingAliases, ...negativeSpacingAliases],
        singleValue,
      ) || !isNaN(parseFloat(singleValue))

    const isValid = isArray(value)
      ? value.length >= 1 &&
        value.length <= 3 &&
        every(value, isSingleValueValid)
      : isSingleValueValid(value)

    if (!isValid) {
      // eslint-disable-next-line no-console
      console.error(
        `Box: Bad value "${value}". The "${propName}" prop must be a number to be multiplied by 4, an array of two or three numbers corresponding to screen sizes, one of the following aliases, or an array of two or three of the following aliases, corresponding to screen sizes:`,
        String([...spacingAliases, ...negativeSpacingAliases]),
      )
    }

    return isValid
  }
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
