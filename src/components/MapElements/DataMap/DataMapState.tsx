import React from 'react'
// import { transition } from 'd3-transition'

interface DatamapStateProps {
  path(): string
  // mouseEnterOnState(name: string, value: number, index: number): void
  name: string
  value: any
  fillColor: string | number
  // hoverColor?: string
  // borderColor: string
  // hoverBorderColor?: string
  // index: number
}

class DatamapState extends React.Component<DatamapStateProps> {
  state = {
    isActive: false,
  }

  constructor(props: DatamapStateProps) {
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleMouseLeave)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleMouseLeave)
  }

  handleMouseEnter(e, d) {
    // console.log({ e, d })
    const { name, value, index } = this.props

    this.setState({
      isActive: true,
    })
    console.log({ name, value })
    // this.props.mouseEnterOnState(name, value, index)
  }

  handleMouseLeave() {
    this.setState({
      isActive: false,
    })
  }

  render() {
    const stateStyle = {
      fill: this.state.isActive
        ? this.props.hoverColor || '#FFCCBC'
        : this.props.fillColor || '#d0cfcf80',
      stroke: this.state.isActive
        ? this.props.hoverBorderColor || '#FF5722'
        : this.props.borderColor || '#d0cfcf',
      strokeWidth: 0.2,
    }

    return (
      <path
        className="datamap-state"
        style={stateStyle}
        d={this.props.path()}
        // onMouseEnter={this.handleMouseEnter}
        // onMouseLeave={this.handleMouseLeave}
        // .style('cursor', 'pointer')
        //     .on('mouseenter', (event, d) => {
        //       if (onceTouchedRegion.current) return
        //       setRegionHighlighted({
        //         stateCode: STATE_CODES[d.properties.st_nm],
        //       })
        //     })
        //     .on('pointerdown', (event, d) => {
        //       if (onceTouchedRegion.current === d)
        //         onceTouchedRegion.current = null
        //       else onceTouchedRegion.current = d
        //       setRegionHighlighted({
        //         stateCode: STATE_CODES[d.properties.st_nm],
        //       })
        //     })
      />
    )
  }
}

export default DatamapState
