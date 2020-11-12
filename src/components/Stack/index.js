import flatten from 'lodash/flatten'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import dividerThicknesses from '../../constants/dividerThicknesses'
import stackAlignments from '../../constants/stackAlignments'
import Box from '../Box'
import Divider from '../Divider'

const Item = styled(Box)((props) => ({
  alignItems: {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
    stretch: 'stretch',
  }[props.align],
  display: 'flex',
  flexDirection: 'column',
}))

Stack.propTypes = {
  align: PropTypes.oneOf(stackAlignments),
  component: PropTypes.elementType,
  dividerThicknesses: PropTypes.oneOf(dividerThicknesses),
  showDividers: PropTypes.bool,
  space: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ]),
}

Stack.defaultProps = {
  align: 'stretch',
  component: 'div',
  dividerThicknesses: 'thin',
}

export default function Stack(props) {
  const {
    align,
    children,
    component: Component,
    dividerThicknesses,
    showDividers,
    space,
    ...rest
  } = props

  return (
    <Component {...rest}>
      {flatten(
        React.Children.map(children, (child, index) =>
          showDividers && index
            ? [
                <Item
                  align={align}
                  paddingTop={index ? space : undefined}
                  style={{ alignSelf: 'stretch' }}
                >
                  <Divider
                    style={{ width: '100%' }}
                    thickness={dividerThicknesses}
                  />
                </Item>,
                <Item align={align} paddingTop={index ? space : undefined}>
                  {child}
                </Item>,
              ]
            : [
                <Item align={align} paddingTop={index ? space : undefined}>
                  {child}
                </Item>,
              ],
        ),
      )}
    </Component>
  )
}
