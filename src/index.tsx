import * as d3Scale from 'd3-scale'
import * as d3Interpolate from 'd3-interpolate'
import { useMemo } from 'react'

import * as geoData from './data/india.json'
import { DataMapsIndiaProps, SvgStyle } from './types'
import { DEFAULT_COLOR_RANGE, MAP_HEIGHT, MAP_WIDTH } from './constants'
import DataMap from './components/DataMap'
import MapLegend from './components/MapLegend'
import MapTitle from './components/MapTitle'

const svgStyle: SvgStyle = {
  display: 'inline-block',
  position: 'relative',
  top: 0,
  left: 0,
}

function DataMapsIndia({
  regionData,
  mapLayout,
  hoverComponent,
}: DataMapsIndiaProps) {
  const colorRange = [
    mapLayout.startColor || DEFAULT_COLOR_RANGE[0],
    mapLayout.endColor || DEFAULT_COLOR_RANGE[1],
  ] as [string, string]

  const extremeValues = useMemo(() => {
    const regionValues = Object.values(regionData).map((region) => region.value)

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
    .interpolate(() =>
      d3Interpolate.interpolateLab(colorRange[0], colorRange[1])
    )

  const features = useMemo(() => {
    const featuresWrap = geoData.features

    return featuresWrap.map((feat) => {
      const state = feat.properties.ST_NM
      const obj = { ...feat, id: state }
      return obj
    })
  }, [])

  return (
    <>
      <svg
        style={svgStyle}
        className="datamaps-india"
        viewBox={`0 0 ${MAP_WIDTH} ${MAP_HEIGHT}`}
        preserveAspectRatio="xMinYMin meet"
      >
        <g id="root-svg-group">
          <DataMap
            features={features}
            regionData={regionData}
            colorScale={colorScale}
            layout={{
              noDataColor: mapLayout.noDataColor,
              borderColor: mapLayout.borderColor,
              hoverColor: mapLayout.hoverColor,
              hoverValuePrefix: mapLayout.hoverValuePrefix,
            }}
            hoverComponent={hoverComponent}
          />

          {mapLayout.title && <MapTitle text={mapLayout.title} />}

          {isNotExtremeValuesEmpty && (
            <MapLegend
              extremeValues={extremeValues}
              title={mapLayout.legendTitle}
              colorRange={colorRange}
            />
          )}
        </g>
      </svg>
      <div id="datamaps-tooltip" />
    </>
  )
}

export default DataMapsIndia
