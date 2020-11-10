import isArray from 'lodash/isArray'
import last from 'lodash/last'

export default function getResponsivePropValue(basePropValue, screenSize) {
  if (!isArray(basePropValue)) {
    return basePropValue
  }

  if (screenSize === 'mobile' || basePropValue.length === 1) {
    return basePropValue[0]
  }

  if (screenSize === 'tablet' || basePropValue.length === 2) {
    return basePropValue[1]
  }

  return last(basePropValue)
}
