import React from 'react'
import * as d3 from 'd3-geo'

import { RegionData } from '../../../index'
import DataMapState from './DataMapState'
import { ScaleLinear } from 'd3-scale'

interface DataMapProps {
  topoData: any[]
  svgWidth: number
  svgHeight: number
  mouseMoveOnDatamap(data: any): void
  mouseEnterOnDatamap(): void
  mouseLeaveDatamap(): void
  mouseEnterOnState(name: string, value: number): void
  colorScale: number[] & ScaleLinear<number, number, never>
  regionData: RegionData
  noDataColor: string
  borderColor: string
  hoverColor?: string
  hoverBorderColor?: string
}

class DataMap extends React.Component<DataMapProps> {
  state = {
    topoJSONfeatures: this.props.topoData,
  }

  constructor(props: DataMapProps) {
    super(props)
    this.handleMouseEnterOnState = this.handleMouseEnterOnState.bind(this)
    this.renderDatamapStates = this.renderDatamapStates.bind(this)
  }

  drawPath = path(this.props.svgWidth, this.props.svgHeight)

  handleMouseEnterOnState(name: string, value: number, index: number) {
    const newData = [
      ...this.state.topoJSONfeatures.slice(0, index),
      ...this.state.topoJSONfeatures.slice(index + 1),
      this.state.topoJSONfeatures[index],
    ]

    this.setState({
      topoJSONfeatures: newData,
    })
    this.props.mouseEnterOnState(name, value)
  }

  renderDatamapStates() {
    const {
      colorScale,
      noDataColor,
      borderColor,
      hoverColor,
      hoverBorderColor,
    } = this.props

    return this.state.topoJSONfeatures.map((feature, index) => {
      const stateValue = this.props.regionData[feature.properties.name]
      const fillColor = !stateValue ? noDataColor : colorScale(stateValue.value)
      return (
        <DataMapState
          key={feature.id}
          index={index}
          // @ts-ignore
          path={() => this.drawPath(feature)}
          name={feature.properties.name}
          fillColor={fillColor}
          hoverColor={hoverColor}
          borderColor={borderColor}
          hoverBorderColor={hoverBorderColor}
          mouseEnterOnState={this.handleMouseEnterOnState}
          value={stateValue}
        />
      )
    })
  }

  render() {
    return (
      <g
        onMouseMove={this.props.mouseMoveOnDatamap}
        onMouseEnter={this.props.mouseEnterOnDatamap}
        onMouseLeave={this.props.mouseLeaveDatamap}
      >
        {this.renderDatamapStates()}
      </g>
    )
  }
}

function path(svgWidth: number, svgHeight: number) {
  const mapConfig = {
    projection: function _projection(width: number, height: number) {
      return d3
        .geoMercator()
        .center([78, 27])
        .scale(width * 1.3)
        .translate([width / 2.5, height / 3])
    },
  }
  const projection = mapConfig.projection(svgWidth, svgHeight)

  return d3.geoPath().projection(projection)
}

export default DataMap
