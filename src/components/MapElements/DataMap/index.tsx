import { ScaleLinear } from 'd3-scale'

// import { RegionData } from '../../../index'

import DataMapState from './DataMapState'
import path from '../../../util/getPath'

interface DataMapProps {
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
  // mouseMoveOnDatamap(data: any): void
  // mouseEnterOnDatamap(): void
  // mouseLeaveDatamap(): void
  // mouseEnterOnState(name: string, value: number): void
  colorScale: ScaleLinear<number, string, never>
  regionData: any
  // noDataColor: string
  // borderColor: string
  // hoverColor?: string
  // hoverBorderColor?: string
}

// class DataMap extends React.Component<DataMapProps> {
function DataMap(props: DataMapProps) {
  // handleMouseEnterOnState(name: string, value: number, index: number) {
  //   const newData = [
  //     ...this.state.topoJSONfeatures.slice(0, index),
  //     ...this.state.topoJSONfeatures.slice(index + 1),
  //     this.state.topoJSONfeatures[index],
  //   ]

  //   this.setState({
  //     topoJSONfeatures: newData,
  //   })
  //   this.props.mouseEnterOnState(name, value)
  // }

  const renderDatamapStates = () => {
    const {
      colorScale,
      // noDataColor,
      // borderColor,
      // hoverColor,
      // hoverBorderColor,
      features,
      regionData,
    } = props

    return features.map((feature, index) => {
      const stateValue = regionData[feature.id]
      // console.log({ feature })
      // console.log('stateValue', stateValue, feature.id)
      const fillColor = !stateValue ? '#fff' : colorScale(stateValue.value)
      return (
        <DataMapState
          key={feature.id}
          name={feature.id}
          fillColor={fillColor}
          path={() => path()(feature)}
          // hoverColor={hoverColor}
          // borderColor={borderColor}
          // hoverBorderColor={hoverBorderColor}
          // mouseEnterOnState={this.handleMouseEnterOnState}
          value={stateValue}
        />
      )
    })
  }
  return (
    <g
    // onMouseMove={this.props.mouseMoveOnDatamap}
    // onMouseEnter={this.props.mouseEnterOnDatamap}
    // onMouseLeave={this.props.mouseLeaveDatamap}
    >
      {renderDatamapStates()}
    </g>
  )
}

export default DataMap
