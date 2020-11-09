import React from 'react'

export default function Text(props) {
  const { children, component: Component = 'span', ...rest } = props
  return <Component {...rest}>{children}</Component>
}
