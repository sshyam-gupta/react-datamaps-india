import React from 'react'

interface TitleProps {
  text: string
  className: string
  coords: {
    x: number
    y: number
  }
}

const Title = (props: TitleProps) => (
  <g>
    <text className={props.className} x={props.coords.x} y={props.coords.y}>
      {props.text}
    </text>
  </g>
)

export default Title
