import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { ThemeContext } from 'styled-components'

export default function useScreenSizeType() {
  const theme = React.useContext(ThemeContext)

  if (!theme) {
    throw new Error(
      'A theme must be provided to use the useScreenSizeType hook.',
    )
  }

  const isDesktop = useMediaQuery({ query: `(min-width: ${theme.screens.lg})` })
  const isTablet = useMediaQuery({ query: `(min-width: ${theme.screens.sm})` })

  if (isDesktop) {
    return 'desktop'
  }

  if (isTablet) {
    return 'tablet'
  }

  return 'mobile'
}
