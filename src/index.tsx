import * as React from 'react'
import * as topojson from 'topojson-client'

import INDIA_JSON from './data/india.json'
import MapElements from './components/MapElements/index'
import HoverInfo from './components/HoverInfo'
import TitleStyle from './components/TitleStyle'

// @ts-ignore
const TOPO_INDIA_DATA = topojson.feature(INDIA_JSON, INDIA_JSON.objects['india']).features

export interface MapLayout {
  title: string
  legendTitle: string
  startColor: string
  endColor: string
  hoverTitle: string
  noDataColor: string
  borderColor: string
  hoverColor: string
  width?: number
  height?: number
}

export interface RegionData {
  [key: string]: number
}

interface IDatamapBox {
  regionData: RegionData
  mapLayout: MapLayout
}

class DatamapBox extends React.Component<IDatamapBox> {
  static defaultProps = {
    regionData: {
      Maharashtra: 10,
      Mizoram: 20,
      Delhi: 12,
      Karnataka: 5
    },
    mapLayout: {
      title: '',
      legendTitle: '',
      startColor: 'orange',
      endColor: 'red',
      hoverTitle: 'Count',
      noDataColor: '#f5f5f5',
      borderColor: '#8D8D8D',
      hoverColor: 'green'
    }
  }

  state = {
    infoWindowPosition: {
      x: 0,
      y: 0
    },
    isInfoWindowActive: false,
    activeState: {
      name: '',
      value: 0
    }
  }

  constructor(props: IDatamapBox) {
    super(props)
    this.mouseMoveOnDatamap = this.mouseMoveOnDatamap.bind(this)
    this.mouseEnterOnDatamap = this.mouseEnterOnDatamap.bind(this)
    this.mouseLeaveDatamap = this.mouseLeaveDatamap.bind(this)
    this.mouseEnterOnState = this.mouseEnterOnState.bind(this)
  }

  extremeValues = {
    min: Math.min(...Object.values(this.props.regionData)),
    max: Math.max(...Object.values(this.props.regionData))
  }

  mouseMoveOnDatamap(e: any) {
    this.setState({
      infoWindowPosition: { x: e.clientX, y: e.clientY }
    })
  }

  mouseEnterOnDatamap() {
    this.setState({
      isInfoWindowActive: true
    })
  }

  mouseLeaveDatamap() {
    this.setState({
      isInfoWindowActive: false
    })
  }

  mouseEnterOnState(name: string, value: number) {
    this.setState({
      activeState: {
        name,
        value
      }
    })
  }

  render() {
    return (
      <div className="DatamapBox">
        <MapElements
          topoData={TOPO_INDIA_DATA}
          mapLayout={this.props.mapLayout}
          regionData={this.props.regionData}
          extremeValues={this.extremeValues}
          mouseMoveOnDatamap={this.mouseMoveOnDatamap}
          mouseEnterOnDatamap={this.mouseEnterOnDatamap}
          mouseLeaveDatamap={this.mouseLeaveDatamap}
          mouseEnterOnState={this.mouseEnterOnState}
          infoWindowPos={this.state.infoWindowPosition}
        />
        <HoverInfo
          active={this.state.isInfoWindowActive}
          position={this.state.infoWindowPosition}
          name={this.state.activeState.name}
          value={this.state.activeState.value}
          valueTitle={this.props.mapLayout.hoverTitle || ''}
        />

        <TitleStyle />
        {/*
        // @ts-ignore */}
        <style jsx>{`
          .DatamapBox {
            height: 100%;
            position: relative;
          }
        `}</style>
      </div>
    )
  }
}

export default DatamapBox
