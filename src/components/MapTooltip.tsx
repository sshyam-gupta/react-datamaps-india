import { createPortal } from 'react-dom'
import { StateToolTip } from '../types'

function MapTooltip(props: StateToolTip) {
  const HoverComponent = props.hoverComponent

  return createPortal(
    <>
      <div
        style={{
          top: props.mouseEvent?.clientY - 150,
          left: props.mouseEvent?.clientX - 100,
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
    document.getElementById('datamaps-tooltip') as HTMLDivElement
  )
}

export default MapTooltip
