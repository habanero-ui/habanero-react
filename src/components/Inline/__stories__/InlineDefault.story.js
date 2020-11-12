import map from 'lodash/map'
import range from 'lodash/range'
import React from 'react'

import Box from '../../Box'
import Inline from '../index'

export default ((args) => (
  <div style={{ maxWidth: 320 }}>
    <Inline {...args}>
      {map(range(0, 10), (n) => (
        <Box
          backgroundColor="subtle"
          key={n}
          style={{
            height: n % 2 === 0 ? 40 : 32,
            width: 40,
          }}
        />
      ))}
    </Inline>
  </div>
)).bind({})
