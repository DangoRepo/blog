import _ from 'lodash'

export function transformIconName(iconName = '', prefix = '') {
  return prefix
    + iconName
      .split('-')
      .map(v => v.replace(/^./, m => m.toUpperCase()))
      .join('')
}

export function extractQuasarSvg(path = '') {
  const pathChunks = path.split('|')
  const svgPath = _.chain(pathChunks[0] || '')
    .replace(/^[^@]*(?=@@)@@[^&]*&&/gu, '')
    .replace(/&&/gu, '')
    .value()
  const viewBox = pathChunks[1] || ''
  return { svgPath, viewBox }
}
