import React from 'react'

interface HoverInfoProps {
  position: {
    x: number
    y: number
  }
  active: boolean
  valueTitle?: string
  name: string
  value: any
  hoverComponent?: any
}

class HoverInfo extends React.Component<HoverInfoProps> {
  refHoverInfo: any

  render() {
    const hoverInfoStyle = {
      left: this.props.position.x - 50,
      top: this.props.position.y - (this.refHoverInfo?.offsetHeight ?? 0) - 20,
      display: this.props.active ? 'block' : 'none',
    }

    const HoverComponent = this.props.hoverComponent
    return (
      <div
        ref={(ref) => (this.refHoverInfo = ref)}
        className="HoverInfo"
        style={hoverInfoStyle}
      >
        {this.props.hoverComponent ? (
          <HoverComponent
            value={{ ...this.props.value, name: this.props.name }}
          />
        ) : (
          <>
            <p>{this.props.name}</p>
            {isFinite(this.props.value) && (
              <p>
                {this.props.valueTitle ? `${this.props.valueTitle}: ` : ''}
                {this.props.value}
              </p>
            )}
          </>
        )}
        <style>{`
          .HoverInfo {
            position: fixed;
            min-width: 8ch;
            background-color: white;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
            padding: 7px;
            border-radius: 4px;
          }
          .HoverInfo p {
            margin: 0;
            font-size: 0.9em;
          }
        `}</style>
      </div>
    )
  }
}

export default HoverInfo
