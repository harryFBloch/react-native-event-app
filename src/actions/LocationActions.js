import { UPDATE_USER_LOCATION } from './types'

export const userLocationChange = (locationObject) => {
  return {
    type: UPDATE_USER_LOCATION,
    payload: locationObject
  }
}
