import DataMapState from './DataMapState'
import path from '../util/getPath'
import { DataMapProps } from '../types'
import { NO_DATA_COLOR } from '../constants'

function DataMap(props: DataMapProps) {
  const renderDataMapStates = () => {
    const { colorScale, layout, features, regionData } = props

    return features.map((feature) => {
      const stateValue = regionData[feature.id]

      const fillColor = !stateValue
        ? layout.noDataColor || NO_DATA_COLOR
        : colorScale(stateValue.value)

      return (
        <DataMapState
          key={feature.id}
          name={feature.id}
          fillColor={fillColor}
          // @ts-ignore
          path={() => path()(feature)}
          hoverColor={layout.hoverColor}
          borderColor={layout.borderColor}
          hoverValuePrefix={layout.hoverValuePrefix}
          value={stateValue?.value}
          hoverComponent={props.hoverComponent}
        />
      )
    })
  }
  return <g>{renderDataMapStates()}</g>
}

export default DataMap
