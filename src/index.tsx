import React from 'react'
import * as topojson from 'topojson-client'

import INDIA_JSON from './data/india.json'
import MapElements from './components/MapElements/index'
import HoverInfo from './components/HoverInfo'
import TitleStyle from './components/TitleStyle'

const TOPO_INDIA_DATA = topojson.feature(
  // @ts-ignore
  INDIA_JSON,
  INDIA_JSON.objects['india']
  // @ts-ignore
).features

export interface MapLayout {
  title: string
  legendTitle: string
  startColor: string
  endColor: string
  hoverTitle: string
  noDataColor: string
  borderColor: string
  hoverColor?: string
  hoverName?: string
  hoverBorderColor?: string
  width?: number
  height?: number
}

export interface RegionData {
  [key: string]: {
    value: number
    [key: string]: any
  }
}

interface IDatamapBox {
  regionData: RegionData
  mapLayout: MapLayout
  hoverComponent?: any
}

const DEFAULT_MAP_LAYOUT = {
  title: '',
  hoverName: '',
  legendTitle: '',
  startColor: 'orange',
  endColor: 'red',
  hoverTitle: 'Count',
  noDataColor: '#f5f5f5',
  borderColor: '#8D8D8D',
  hoverColor: 'green',
}

class DatamapBox extends React.Component<IDatamapBox> {
  static defaultProps = {
    regionData: {},
  }
  state = {
    infoWindowPosition: {
      x: 0,
      y: 0,
    },
    isInfoWindowActive: false,
    activeState: {
      name: '',
      value: 0,
    },
    regionData: this.props.regionData,
    mapLayout: { ...DEFAULT_MAP_LAYOUT, ...this.props.mapLayout },
  }

  constructor(props: IDatamapBox) {
    super(props)
    this.mouseMoveOnDatamap = this.mouseMoveOnDatamap.bind(this)
    this.mouseEnterOnDatamap = this.mouseEnterOnDatamap.bind(this)
    this.mouseLeaveDatamap = this.mouseLeaveDatamap.bind(this)
    this.mouseEnterOnState = this.mouseEnterOnState.bind(this)
    this.calculateExtremeValues = this.calculateExtremeValues.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.mouseLeaveDatamap)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.mouseLeaveDatamap)
  }

  static getDerivedStateFromProps(props: IDatamapBox, state: any) {
    if (props.regionData !== state.regionData) {
      return {
        regionData: props.regionData,
      }
    } else if (props.mapLayout !== state.mapLayout) {
      return {
        mapLayout: { ...DEFAULT_MAP_LAYOUT, ...props.mapLayout },
      }
    }
    return null
  }

  calculateExtremeValues(regions: RegionData) {
    const regionValues: any[] = Object.values(regions).map(
      (region) => region.value ?? region
    )

    return {
      min: Math.min(...regionValues),
      max: Math.max(...regionValues),
    }
  }

  mouseMoveOnDatamap(e: any) {
    this.setState({
      infoWindowPosition: { x: e.clientX, y: e.clientY },
      isInfoWindowActive: true,
    })
  }

  mouseEnterOnDatamap() {
    this.setState({
      isInfoWindowActive: true,
    })
  }

  mouseLeaveDatamap() {
    this.setState({
      isInfoWindowActive: false,
    })
  }

  mouseEnterOnState(name: string, value: number) {
    this.setState({
      activeState: {
        name,
        value,
      },
      isInfoWindowActive: true,
    })
  }

  render() {
    return (
      <>
        <MapElements
          topoData={TOPO_INDIA_DATA}
          mapLayout={this.state.mapLayout}
          regionData={this.state.regionData}
          extremeValues={this.calculateExtremeValues(this.state.regionData)}
          mouseMoveOnDatamap={this.mouseMoveOnDatamap}
          mouseEnterOnDatamap={this.mouseEnterOnDatamap}
          mouseLeaveDatamap={this.mouseLeaveDatamap}
          mouseEnterOnState={this.mouseEnterOnState}
          infoWindowPos={this.state.infoWindowPosition}
        />
        {this.state.mapLayout.hoverName || this.state.activeState.name ? (
          <HoverInfo
            active={this.state.isInfoWindowActive}
            position={this.state.infoWindowPosition}
            name={this.state.mapLayout.hoverName || this.state.activeState.name}
            value={this.state.activeState.value}
            valueTitle={this.state.mapLayout.hoverTitle || ''}
            hoverComponent={this.props.hoverComponent}
          />
        ) : null}

        <TitleStyle />
      </>
    )
  }
}

export default DatamapBox
