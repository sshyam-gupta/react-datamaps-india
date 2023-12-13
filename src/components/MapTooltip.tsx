import { createPortal } from 'react-dom'
import { StateToolTip } from '../types'

function MapTooltip(props: StateToolTip) {
  const HoverComponent = props.hoverComponent
  const e = props.mouseEvent

  return createPortal(
    <>
      <div
        style={{
          top: e.pageY - 75,
          left: e.pageX,
          position: 'absolute',
        }}
        className="state-tooltip"
      >
        {HoverComponent ? (
          <HoverComponent value={{ value: props.value, name: props.name }} />
        ) : (
          <>
            <p>{props.name}</p>
            {isFinite(props.value) && (
              <p>
                {props.hoverValuePrefix ? `${props.hoverValuePrefix}: ` : ''}
                {props.value}
              </p>
            )}
          </>
        )}
      </div>
      <style>{`
          .state-tooltip {
            position: absolute;
            min-width: 8ch;
            background-color: white;
            box-shadow: 0px 0px 14px rgba(0, 0, 0, 0.3);
            padding: 7px;
            border-radius: 4px;
          }
          .state-tooltip p {
            margin: 0;
            font-size: 0.9em;
          }
        `}</style>
    </>,
    document.querySelector('body') as HTMLBodyElement
  )
}

export default MapTooltip
