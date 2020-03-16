import * as React from 'react'

interface HoverInfoProps {
  position: {
    x: number
    y: number
  }
  active: boolean
  valueTitle?: string
  name: string
  value: number
}

function HoverInfo(props: HoverInfoProps) {
  const hoverInfoStyle = {
    left: props.position.x + 20,
    top: props.position.y - 90 + 20,
    display: props.active ? 'block' : 'none'
  }

  return (
    <div className="HoverInfo" style={hoverInfoStyle}>
      <p>{props.name}</p>
      {isFinite(props.value) && (
        <p>
          {props.valueTitle ? `${props.valueTitle}: ` : ''}
          {props.value}
        </p>
      )}
      {/*
      // @ts-ignore */}
      <style>{`
        .HoverInfo {
          position: fixed;
          min-width: 100px;
          background-color: white;
          box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
          padding: 5px;
          border-radius: 4px;
        }
        .HoverInfo p {
          margin: 0;
          font-size: 0.8em;
        }
      `}</style>
    </div>
  )
}

export default HoverInfo
