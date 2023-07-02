import { MouseEventHandler, createRef, useEffect, useState } from 'react'

import {
  DEFAULT_BORDER_COLOR,
  DEFAULT_FILL_COLOR,
  DEFAULT_HOVER_COLOR,
} from '../constants'

import { DataMapStateProps } from '../types'
import MapTooltip from './MapTooltip'

function DataMapState(props: DataMapStateProps) {
  const [isActive, setActive] = useState(false)
  const [mouseEvent, setMouseEvent] =
    useState<MouseEventHandler<SVGPathElement>>()
  const pathRef = createRef<SVGPathElement>()

  function resetActive() {
    setActive(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', resetActive)

    return () => {
      window.removeEventListener('scroll', resetActive)
    }
  }, [])

  const onMouseMove = (evt: MouseEventHandler<SVGPathElement>) => {
    setActive(true)
    setMouseEvent(evt)
    return
  }

  const { hoverColor, fillColor, borderColor, path } = props

  const stateStyle = {
    fill: isActive
      ? hoverColor || DEFAULT_HOVER_COLOR
      : fillColor || DEFAULT_FILL_COLOR,
    stroke: borderColor || DEFAULT_BORDER_COLOR,
    strokeWidth: 0.3,
  }

  return (
    <>
      <path
        style={stateStyle}
        d={path()}
        // @ts-ignore
        onMouseMove={onMouseMove}
        onMouseLeave={resetActive}
        ref={pathRef}
      />
      {isActive && mouseEvent && (
        <MapTooltip
          name={props.name}
          value={props.value}
          mouseEvent={mouseEvent}
        />
      )}
    </>
  )
}

export default DataMapState
