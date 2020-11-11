import PropTypes from 'prop-types'
import React from 'react'
import showIf from 'react-render-helpers/showIf'
import styled from 'styled-components'

import buttonVariants from '../../constants/buttonVariants'
import colors from '../../constants/colors'
import columnWidths from '../../constants/columnWidths'
import icons from '../../constants/icons'
import iconSides from '../../constants/iconSides'
import iconSizes from '../../constants/iconSizes'
import textVariants from '../../constants/textVariants'
import Box from '../Box'
import Icon from '../Icon'
import Spinner from '../Spinner'
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
  flexDirection: props.iconSide === 'right' ? 'row' : 'row-reverse',
  justifyContent: 'center',
  minWidth: props.text ? '8rem' : undefined,
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
  visibility: props.isLoading ? 'hidden' : undefined,
}))

const ButtonIcon = styled(Icon)((props) => {
  const { spacing } = props.theme

  const getMarginLeft = () => {
    if (props.iconSide === 'left') {
      return props.variant === 'text' ? undefined : spacing(-2)
    }

    return props.variant === 'text' ? spacing(2) : spacing(4)
  }

  const getMarginRight = () => {
    if (props.iconSide === 'left') {
      return props.variant === 'text' ? spacing(2) : spacing(4)
    }

    return props.variant === 'text' ? undefined : spacing(-2)
  }

  return {
    marginLeft: getMarginLeft(),
    marginRight: getMarginRight(),
    visibility: props.isLoading ? 'hidden' : undefined,
  }
})

const ButtonSpinner = styled(Spinner)({
  position: 'absolute',
})

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
    iconName,
    iconSize,
    isLoading,
    size,
    text,
    textVariant,
    variant,
  } = props

  const contentMargin = React.useMemo(() => {
    if (variant !== 'text') return

    if (!iconName) {
      return '-xsmall'
    }

    return {
      large: undefined,
      medium: '-xxsmall',
      small: '-xsmall',
    }[iconSize]
  }, [iconName, iconSize, variant])

  const contentPaddingX = React.useMemo(() => {
    if (variant !== 'text') {
      return text ? 'gutter' : undefined
    }

    if (!iconName) {
      return 'xsmall'
    }

    return {
      large: undefined,
      medium: 'xxsmall',
      small: 'xsmall',
    }[iconSize]
  }, [iconName, iconSize, text, variant])

  const contentPaddingY = React.useMemo(() => {
    if (variant === 'text') {
      if (!iconName) {
        return 'xsmall'
      }

      return {
        large: undefined,
        medium: 'xxsmall',
        small: 'xsmall',
      }[iconSize]
    }

    if (iconName && size === 'small') {
      return {
        large: undefined,
        medium: 0.75,
        small: 1.75,
      }[iconSize]
    }

    if (iconName && size === 'medium') {
      return {
        large: 1.25,
        medium: 2.25,
        small: 3.25,
      }[iconSize]
    }

    return {
      medium: 3.25,
      small: 1.75,
    }[size]
  }, [iconName, iconSize, size, variant])

  return (
    <Root {...props}>
      <ButtonContent
        {...props}
        backgroundColor={variant === 'primary' ? color : undefined}
        margin={contentMargin}
        paddingX={contentPaddingX}
        paddingY={contentPaddingY}
        showInteractionOverlay={!disabled}
      >
        {showIf(text)(
          <ButtonText
            {...props}
            colorIsBackground={variant === 'primary'}
            variant={textVariant}
          >
            {text}
          </ButtonText>,
        )}
        {showIf(iconName)(
          <ButtonIcon
            {...props}
            colorIsBackground={variant === 'primary'}
            name={iconName}
            size={iconSize || size}
          />,
        )}
        {showIf(isLoading)(
          <ButtonSpinner
            {...props}
            colorIsBackground={variant === 'primary'}
          />,
        )}
      </ButtonContent>
    </Root>
  )
}
