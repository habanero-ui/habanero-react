// import GlobalStyles from '../src/components/GlobalStyles/index'
import map from 'lodash/map'
import tailwindConfig from '../tailwind.config'
import './index.css'

export const parameters = {
  backgrounds: {
    values: map(Object.keys(tailwindConfig.theme.extend.colors), (name) => ({
      name,
      value: tailwindConfig.theme.extend.colors[name],
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
