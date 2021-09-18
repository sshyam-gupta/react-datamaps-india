import React from 'react'
import * as d3Scale from 'd3-scale'
import * as d3Interpolate from 'd3-interpolate'
import { MapLayout } from '../..'

const TEXT_STYLE = { textAnchor: 'middle', fontSize: 7, fill: '#333' }

function linearColorScale(value: number, mapLayout: MapLayout) {
  const startColor = mapLayout.startColor
  const endColor = mapLayout.endColor

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

function renderGradient({
  svgHeight,
  svgWidth,
  mapLayout,
}: Omit<MapLegendProps, 'extremeValues'>) {
  return Array(40)
    .fill(undefined)
    .map((_, i) => (
      <rect
        key={i}
        x={svgWidth - 280 + i * 4}
        y={svgHeight - 50}
        width={5}
        height="5"
        fill={`${linearColorScale(i * 4, mapLayout)}`}
        stroke="none"
      />
    ))
}

interface MapLegendProps {
  svgWidth: number
  svgHeight: number
  extremeValues: {
    min: number
    max: number
  }
  mapLayout: MapLayout
}

const MapLegend = ({
  extremeValues: { min, max },
  mapLayout,
  svgWidth,
  svgHeight,
}: MapLegendProps) => {
  return (
    <g>
      {/*
      // @ts-ignore */}
      <text x={svgWidth - 280} y={svgHeight - 60} style={TEXT_STYLE}>
        {min}
      </text>
      {/*
      // @ts-ignore */}
      <text x={svgWidth - 120} y={svgHeight - 60} style={TEXT_STYLE}>
        {max}
      </text>
      {renderGradient({ svgWidth, svgHeight, mapLayout })}
    </g>
  )
}

export default MapLegend
