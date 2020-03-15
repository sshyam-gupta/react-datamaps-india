import * as React from 'react'

function TitleStyle() {
  return (
    <div>
      {/*
      // @ts-ignore */}
      <style jsx global="true">{`
        .map-title {
          text-anchor: start;
          font-size: 25px;
        }

        .legend-title {
          fill: gray;
          text-anchor: end;
          font-size: 12px;
        }
      `}</style>
    </div>
  )
}

export default TitleStyle
