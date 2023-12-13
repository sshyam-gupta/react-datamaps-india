import * as d3Scale from 'd3-scale'
import * as d3Interpolate from 'd3-interpolate'
import { ColorProperty, ColorRange, MapLegendProps, SvgStyle } from '../types'
import { MAP_HEIGHT, MAP_WIDTH } from '../constants'

const TEXT_STYLE: SvgStyle = {
  textAnchor: 'middle',
  fontSize: 7,
  fill: '#333',
}

function linearColorScale(value: number, colorRange: ColorRange) {
  const startColor = colorRange[0]
  const endColor = colorRange[1]

  return (
    d3Scale
      .scaleLinear()
      .domain([0, 130])
      // @ts-ignore
      .range([startColor, endColor])
      // @ts-ignore
      .interpolate(d3Interpolate.interpolateLab)(value)
  )
}

function renderGradient(colorRange: ColorRange) {
  return Array(40)
    .fill(undefined)
    .map((_, i) => (
      <rect
        // eslint-disable-next-line react/no-array-index-key
        key={i}
        x={MAP_WIDTH - 280 + i * 4}
        y={MAP_HEIGHT - 30}
        width={5}
        height="5"
        fill={`${linearColorScale(i * 4, colorRange)}`}
        stroke="none"
      />
    ))
}

function MapLegend(props: MapLegendProps) {
  const {
    extremeValues: { min, max },
    title,
    colorRange,
  } = props

  const yPos = MAP_HEIGHT - 33

  return (
    <g>
      <text x={MAP_WIDTH - 280} y={yPos} style={TEXT_STYLE}>
        {min}
      </text>
      <text x={MAP_WIDTH - 120} y={yPos} style={TEXT_STYLE}>
        {max}
      </text>
      {renderGradient(colorRange)}
      {title && (
        <text x="50%" textAnchor="middle" y={MAP_HEIGHT - 15} fontSize="0.5em">
          {title}
        </text>
      )}
    </g>
  )
}

export default MapLegend
