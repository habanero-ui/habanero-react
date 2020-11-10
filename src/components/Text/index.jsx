import { readableColor } from 'polished'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import colors from '../../constants/colors'
import textVariants from '../../constants/textVariants'

const Root = styled.span((props) => ({
  color: props.colorIsBackground
    ? readableColor(
        props.theme.colors[props.color],
        props.theme.colors.black,
        'white',
      )
    : props.theme.colors[props.color],
  fontFamily: 'inter, sans-serif',
  fontSize: {
    'body-large': '1rem',
    'body-small': '0.875rem',
    'body-extra-small': '0.75rem',
    button: '1rem',
    h1: '6.875rem',
    h2: '3.5rem',
    h3: '3rem',
    h4: '2rem',
    h5: '1.5rem',
    h6: '1.25rem',
    'label-large': '1rem',
    'label-small': '0.75rem',
  }[props.variant],
  fontWeight: {
    'body-extra-small': 400,
    'body-large': 400,
    'body-small': 400,
    button: 500,
    h1: 500,
    h2: 500,
    h3: 500,
    h4: 500,
    h5: 500,
    h6: 400,
    'label-large': 500,
    'label-small': 500,
  }[props.variant],
  lineHeight: {
    'body-extra-small': '0.875rem',
    'body-large': '1.188rem',
    'body-small': '1.06rem',
    button: '1rem',
    h1: '8.25rem',
    h2: '4.19rem',
    h3: '3.625rem',
    h4: '2.375rem',
    h5: '1.625rem',
    h6: '1.5rem',
    'label-large': '1.188rem',
    'label-small': '0.875rem',
  }[props.variant],
  transition: 'color 200ms ease',
}))

Text.propTypes = {
  color: PropTypes.oneOf(colors),
  colorIsBackground: PropTypes.bool,
  component: PropTypes.string,
  variant: PropTypes.oneOf(textVariants),
}

export default function Text(props) {
  const { component, ...rest } = props

  return <Root as={component} {...rest} />
}
