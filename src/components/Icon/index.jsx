import { readableColor } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import colors from '../../constants/colors'
import icons from '../../constants/icons'
import iconSizes from '../../constants/iconSizes'

const Root = styled.div((props) => ({
  color: props.colorIsBackground
    ? readableColor(
        props.theme.colors[props.color],
        props.theme.colors.black,
        'white',
      )
    : props.theme.colors[props.color],
  fill: 'currentColor',
  flex: 'none',
  height: {
    auto: '100%',
    large: '2rem',
    medium: '1.5rem',
    small: '1rem',
  }[props.size],
  overflow: 'hidden',
  transition: 'color 200ms ease',
  width: {
    auto: '100%',
    large: '2rem',
    medium: '1.5rem',
    small: '1rem',
  }[props.size],
  '& > svg': {
    height: '100%',
    width: '100%',
  },
}))

Icon.propTypes = {
  color: PropTypes.oneOf(colors),
  colorIsBackground: PropTypes.bool,
  name: PropTypes.oneOf(icons),
  size: PropTypes.oneOf(iconSizes),
}

Icon.defaultProps = {
  size: 'medium',
}

export default function Icon(props) {
  const { name, ...rest } = props

  return (
    <Root
      dangerouslySetInnerHTML={{ __html: require(`!./../../icons/${name}.js`) }}
      {...rest}
    />
  )
}
