import { readableColor } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import styled, { css, keyframes } from 'styled-components'

import colors from '../../constants/colors'
import iconSizes from '../../constants/iconSizes'

const rotateAnimation = keyframes`
  100% {
    transform: rotate(360deg);
  }
`
const Root = styled.div(
  (props) => {
    const borderColor = props.colorIsBackground
      ? readableColor(
          props.theme.colors[props.color] || 'white',
          props.theme.colors.black,
          'white',
        )
      : props.theme.colors[props.color] || props.theme.colors.black

    const borderWidth = {
      large: 5,
      medium: 4,
      small: 3,
    }[props.size]

    return {
      animationDelay: '200ms',
      height: {
        large: '2.5rem',
        medium: '2rem',
        small: '1.5rem',
      }[props.size],
      pointerEvents: 'none',
      position: 'relative',
      transition: 'opacity 300ms ease-in-out',
      width: {
        large: '2.5rem',
        medium: '2rem',
        small: '1.5rem',
      }[props.size],
      '&::before': {
        borderColor,
        borderRadius: props.theme.borderRadii.full,
        borderStyle: 'solid',
        borderWidth,
        bottom: 0,
        content: '""',
        left: 0,
        opacity: 0.3,
        position: 'absolute',
        right: 0,
        top: 0,
      },
      '&::after': {
        borderColor: 'transparent',
        borderRadius: props.theme.borderRadii.full,
        borderStyle: 'solid',
        borderTopColor: borderColor,
        borderWidth,
        bottom: 0,
        content: '""',
        left: 0,
        opacity: 0.7,
        position: 'absolute',
        right: 0,
        top: 0,
        zIndex: 10,
      },
    }
  },
  css`
    animation: ${rotateAnimation} 1500ms linear infinite;
  `,
)

Spinner.propTypes = {
  color: PropTypes.oneOf(colors),
  colorIsBackground: PropTypes.bool,
  size: PropTypes.oneOf(iconSizes),
}

Spinner.defaultProps = {
  size: 'medium',
}

export default function Spinner(props) {
  return <Root {...props} />
}
