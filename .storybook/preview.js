// import GlobalStyles from '../src/components/GlobalStyles/index'
import map from 'lodash/map'
import theme from '../src/themes/light'
import './index.css'

export const parameters = {
  backgrounds: {
    values: map(Object.keys(theme.colors), (name) => ({
      name,
      value: theme.colors[name],
    })),
  },
  layout: 'centered',
  options: {
    storySort: {
      order: ['Getting Started', 'Components', 'Styles'],
    },
  },
}

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
