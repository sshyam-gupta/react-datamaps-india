import { geoIdentity, geoPath } from 'd3-geo'
import { MAP_HEIGHT, MAP_WIDTH } from '../constants'
import INDIA_JSON from '../data/india.json'

const MAP_RATIO_TO_CONTAINER = 0.9

function path() {
  return geoPath(
    geoIdentity()
      .reflectY(true)
      .fitSize(
        [
          MAP_WIDTH * MAP_RATIO_TO_CONTAINER,
          MAP_HEIGHT * MAP_RATIO_TO_CONTAINER,
        ],
        INDIA_JSON
      )
  )
}

export default path
