import { UPDATE_SELECTED_CATEGORIES } from '../actions/types'

const INITIAL_STATE = []

export default (state = INITIAL_STATE, action) => {
  console.log(action.payload)
  switch (action.type){

    case UPDATE_SELECTED_CATEGORIES:
      return action.payload

    default: return state
  }
}
