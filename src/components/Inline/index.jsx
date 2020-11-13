import isArray from 'lodash/isArray'
import map from 'lodash/map'
import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components'

import verticalAlignments from '../../constants/verticalAlignments'
import Box from '../Box'

const Root = styled.div({
  display: 'flex',
})

const Content = styled(Box)((props) => ({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: {
    center: 'center',
    left: 'flex-start',
    right: 'flex-end',
  }[props.align],
  alignItems: {
    bottom: 'flex-end',
    center: 'center',
    stretch: 'stretch',
    top: 'top',
  }[props.alignY],
}))

const Item = styled(Box)({
  display: 'flex',
})

Inline.propTypes = {
  align: PropTypes.oneOf(['center', 'left', 'right']),
  alignY: PropTypes.oneOf(verticalAlignments),
  space: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    ),
  ]),
}

Inline.defaultProps = {
  align: 'left',
  alignY: 'stretch',
}

export default function Inline(props) {
  const { children, space, ...rest } = props

  const negativeSpace = React.useMemo(() => {
    const mapSpace = (baseSpace) => (baseSpace ? `-${baseSpace}` : '')
    return isArray(space) ? map(space, mapSpace) : mapSpace(space)
  }, [space])

  return (
    <Root {...rest}>
      <Content marginLeft={negativeSpace} marginTop={negativeSpace} {...props}>
        {React.Children.map(children, (child) => (
          <Item paddingLeft={space} paddingTop={space}>
            {child}
          </Item>
        ))}
      </Content>
    </Root>
  )
}
