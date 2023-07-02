import { geoIdentity, geoPath } from 'd3-geo'
import { MAP_HEIGHT, MAP_WIDTH } from '../constants'
import INDIA_JSON from '../data/india.json'

const MAP_RATIO_TO_CONTAINER = 0.93

function path() {
  return geoPath(
    geoIdentity()
      .reflectY(true)
      .fitExtent(
        [
          [30, 20],
          [
            MAP_WIDTH * MAP_RATIO_TO_CONTAINER,
            MAP_HEIGHT * MAP_RATIO_TO_CONTAINER,
          ],
        ],
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        INDIA_JSON
      )
  )
}

export default path
