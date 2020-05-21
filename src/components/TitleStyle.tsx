import * as React from "react";

function TitleStyle() {
  return (
    <div>
      <style>{`
        .map-title {
          text-anchor: start;
          font-size: 18px;
        }

        .legend-title {
          fill: gray;
          text-anchor: end;
          font-size: 8px;
        }
      `}</style>
    </div>
  );
}

export default TitleStyle;
