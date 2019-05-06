import { UPDATE_USER_LOCATION } from '../actions/types'

const INITIAL_STATE = {latitude: 0, longitude: 0}

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload)
  switch (action.type){

    case UPDATE_USER_LOCATION:
      return {latitude: action.payload.coords.latitude, longitude: action.payload.coords.longitude}

    default: return state
  }
}
