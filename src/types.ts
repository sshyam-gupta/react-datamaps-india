import { ScaleLinear } from 'd3-scale'
import { CSSProperties } from 'react'

export type ColorProperty = CSSProperties['color']

export type SvgStyle = CSSProperties

export type ColorRange = [ColorProperty, ColorProperty]

export interface MapLayout {
  title?: string
  legendTitle?: string
  startColor?: ColorProperty
  endColor?: ColorProperty
  hoverTitle?: string // 'Count'
  noDataColor?: ColorProperty //'#f5f5f5'
  borderColor?: ColorProperty //'#8D8D8D'
  hoverColor?: ColorProperty //'green'
}

type StateValue = number

export interface DataMapsIndiaProps {
  regionData: RegionData
  mapLayout: MapLayout
}

export interface RegionData {
  [key: string]: {
    value: StateValue
  }
}

export interface DataMapProps {
  features: {
    type: string
    id: string
    geometry: {
      type: string
      coordinates: number[][][] | number[][][][]
    }
    properties: {
      ST_NM: string
    }
  }[]
  colorScale: ScaleLinear<number, string, never>
  regionData: RegionData
  layout: Omit<
    Partial<MapLayout>,
    'title' | 'legendTitle' | 'startColor' | 'endColor'
  >
}

export interface DataMapStateProps {
  path(): string
  name: string
  value: StateValue
  fillColor: ColorProperty
  hoverColor?: ColorProperty
  borderColor?: ColorProperty
}

export interface MapLegendProps {
  extremeValues: {
    min: StateValue
    max: StateValue
  }
  colorRange: ColorRange
  title?: string
}

export interface TitleProps {
  text: string
}

export interface StateToolTip {
  mouseEvent: MouseEvent,
  name: string,
  value: StateValue,
  valueTitle: string
}
