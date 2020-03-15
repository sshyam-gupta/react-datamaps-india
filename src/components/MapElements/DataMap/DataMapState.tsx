import * as React from 'react'

interface DatamapStateProps {
  path(): string
  mouseEnterOnState(name: string, value: number, index: number): void
  name: string
  value: number
  fillColor: string
  hoverColor?: string
  borderColor: string
  index: number
}

class DatamapState extends React.Component<DatamapStateProps> {
  state = {
    isActive: false
  }

  constructor(props: DatamapStateProps) {
    super(props)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }

  handleMouseEnter() {
    const { name, value, index } = this.props
    this.props.mouseEnterOnState(name, value, index)
    this.setState({
      isActive: true
    })
  }

  handleMouseLeave() {
    this.setState({
      isActive: false
    })
  }

  render() {
    const stateStyle = {
      fill: this.state.isActive ? this.props.hoverColor || '#FFCCBC' : this.props.fillColor,
      stroke: this.state.isActive ? this.props.hoverColor || '#FF5722' : this.props.borderColor,
      strokeWidth: 0.5
    }
    return (
      <path
        className="datamap-state"
        style={stateStyle}
        d={this.props.path()}
        onMouseEnter={this.handleMouseEnter}
        onMouseLeave={this.handleMouseLeave}
      />
    )
  }
}

export default DatamapState
