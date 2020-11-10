import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import buttonVariants from '../../constants/buttonVariants'
import colors from '../../constants/colors'
import columnWidths from '../../constants/columnWidths'
import icons from '../../constants/icons'
import iconSides from '../../constants/iconSides'
import iconSizes from '../../constants/iconSizes'
import textVariants from '../../constants/textVariants'
import Box from '../Box'
import Text from '../Text'

const getBorderColor = ({ color, theme }) => {
  return theme.colors[color] || 'black'
}

const Root = styled.button((props) => ({
  backgroundColor: 'transparent',
  border: '1px solid transparent',
  borderColor: props.variant === 'text' ? undefined : getBorderColor(props),
  borderRadius: '0.5rem',
  cursor: props.disabled ? 'not-allowed' : undefined,
  display: 'flex',
  flex: 'none',
  opacity: props.disabled ? 0.5 : undefined,
  outline: 'none',
  padding: 0,
  pointerEvents: props.isLoading ? 'none' : undefined,
  width: '100%',
}))

const ButtonContent = styled(Box)((props) => ({
  alignItems: 'center',
  borderRadius: '0.3rem',
  display: 'flex',
  flex: '1 1 0%',
  justifyContent: 'center',
  position: 'relative',
  '&::before': {
    border: '1px solid transparent',
    borderRadius: props.variant === 'text' ? '0.5rem' : '0.625rem',
    bottom: 0,
    content: '""',
    left: 0,
    margin: props.variant === 'text' ? undefined : -3,
    pointerEvents: 'none',
    position: 'absolute',
    right: 0,
    top: 0,
    transition:
      'background-color 300ms ease-in-out, border-color 300ms ease-in-out',
  },
  '&::after': {
    borderRadius: '0.5rem',
  },
  [`${Root}:focus &::before`]: {
    borderColor: getBorderColor(props),
  },
}))

const ButtonText = styled(Text)((props) => ({
  pointerEvents: props.disabled ? 'none' : undefined,
}))

Button.propTypes = {
  color: PropTypes.oneOf(colors),
  disabled: PropTypes.bool,
  iconName: PropTypes.oneOf(icons),
  iconSide: PropTypes.oneOf(iconSides),
  iconSize: PropTypes.oneOf(iconSizes),
  isLoading: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium']),
  text: PropTypes.string,
  textVariant: PropTypes.oneOf(textVariants),
  type: PropTypes.string,
  variant: PropTypes.oneOf(buttonVariants),
  width: PropTypes.oneOf(columnWidths),
}

Button.defaultProps = {
  color: 'black',
  iconSide: 'right',
  iconSize: 'small',
  size: 'medium',
  textVariant: 'button',
  type: 'button',
  variant: 'primary',
}

export default function Button(props) {
  const {
    color,
    disabled,
    isLoading,
    size,
    text,
    textVariant,
    variant,
    ...rest
  } = props

  const contentPaddingX = React.useMemo(() => (text ? 'gutter' : undefined), [
    text,
  ])

  const contentPaddingY = React.useMemo(
    () =>
      ({
        medium: 3.25,
      }[size]),
    [size],
  )

  return (
    <Root
      color={color}
      disabled={disabled}
      isLoading={isLoading}
      size={size}
      variant={variant}
      {...rest}
    >
      <ButtonContent
        backgroundColor={variant === 'primary' ? color : undefined}
        color={color}
        paddingX={contentPaddingX}
        paddingY={contentPaddingY}
        showInteractionOverlay={!disabled}
        variant={variant}
      >
        {text ? (
          <ButtonText
            color={color}
            colorIsBackground={variant === 'primary'}
            disabled={disabled}
            style={{ visibility: isLoading ? 'hidden' : undefined }}
            variant={textVariant}
          >
            {text}
          </ButtonText>
        ) : null}
      </ButtonContent>
    </Root>
  )
}
