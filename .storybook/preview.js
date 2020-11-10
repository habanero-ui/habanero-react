// import GlobalStyles from '../src/components/GlobalStyles/index'
import map from 'lodash/map'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import lightTheme from '../src/themes/light'
import './index.css'

export const parameters = {
  backgrounds: {
    values: map(Object.keys(lightTheme.colors), (name) => ({
      name,
      value: lightTheme.colors[name],
    })),
  },
  layout: 'centered',
  options: {
    storySort: {
      order: ['Getting Started', 'Components', 'Styles'],
    },
  },
}

export const decorators = [
  (StoryFn) => <ThemeProvider theme={lightTheme}><StoryFn /></ThemeProvider>
]

// export const decorators = [
//   () => ({
//     components: { GlobalStyles },
//     template: `
//       <div>
//         <GlobalStyles />
//         <story />
//       </div>
//     `,
//   }),
// ]
