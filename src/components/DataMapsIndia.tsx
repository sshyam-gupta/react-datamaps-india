import * as d3Scale from 'd3-scale'
import * as d3Interpolate from 'd3-interpolate'
import { useMemo, useRef } from 'react'

import DataMap from './MapElements/DataMap'

import INDIA_JSON from '../data/india.json'
import MapLegend from './MapElements/MapLegend'
import { MAP_HEIGHT, MAP_WIDTH } from '../constants'

const geoData = INDIA_JSON

const svgStyle: React.CSSProperties = {
  display: 'inline-block',
  position: 'absolute',
  top: 0,
  left: 0,
}

export interface RegionData {
  [key: string]: {
    value: number
    [key: string]: any
  }
}

function DataMapsIndia({ regionData }: { regionData: RegionData }) {
  const svgRef = useRef(null)

  const extremeValues = useMemo(() => {
    const regionValues: any[] = Object.values(regionData).map(
      (region) => region.value
    )

    return {
      min: Math.min(...regionValues),
      max: Math.max(...regionValues),
    }
  }, [regionData])

  const { min: minValue, max: maxValue } = extremeValues

  const isNotExtremeValuesEmpty =
    !Number.isNaN(minValue) &&
    !Number.isNaN(maxValue) &&
    Number.isFinite(minValue) &&
    Number.isFinite(maxValue)

  const colorScale = d3Scale
    .scaleLinear()
    .domain([minValue, maxValue])
    .interpolate(() => d3Interpolate.interpolateLab('orange', 'red'))

  const features = useMemo(() => {
    const featuresWrap = geoData.features

    return featuresWrap.map((feat) => {
      const state = feat.properties.ST_NM
      const obj = { ...feat, id: state }
      return obj
    })
  }, [])

  return (
    <svg
      style={svgStyle}
      viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
      preserveAspectRatio="xMaxYMax meet"
      ref={svgRef}
    >
      <DataMap
        features={features}
        regionData={regionData}
        colorScale={colorScale}
      />

      {/* <Title
          text={props.mapLayout.legendTitle}
          className="legend-title"
          coords={{ x: svgWidth - 190, y: svgHeight - 35 }}
        /> */}

      {isNotExtremeValuesEmpty && (
        <MapLegend
          svgWidth={MAP_WIDTH}
          svgHeight={MAP_HEIGHT}
          extremeValues={extremeValues}
        />
      )}
    </svg>
  )
}

export default DataMapsIndia
