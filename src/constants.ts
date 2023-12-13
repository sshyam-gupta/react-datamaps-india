import { ColorRange } from './types'

export const MAP_DIMENSIONS: [number, number] = [400, 400]

export const MAP_WIDTH = MAP_DIMENSIONS[0]
export const MAP_HEIGHT = MAP_DIMENSIONS[1]

const DEFAULT_START_COLOR = '#FFDAB9' as string
const DEFAULT_END_COLOR = '#FF6347' as string

export const DEFAULT_COLOR_RANGE = [
  DEFAULT_START_COLOR,
  DEFAULT_END_COLOR,
] as ColorRange

export const NO_DATA_COLOR = '#f5f5f5'
export const DEFAULT_BORDER_COLOR = '#121'
export const DEFAULT_HOVER_COLOR = '#FFCCBC'
export const DEFAULT_FILL_COLOR = '#d0cfcf80'
export const DEFAULT_HOVER_BORDER_COLOR = '#FF5722'
