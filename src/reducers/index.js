import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import CategoryReducer from './CategoryReducer'
import LocationReducer from './LocationReducer'

export default combineReducers({
  auth: AuthReducer,
  selectedCatagories: CategoryReducer,
  location: LocationReducer
})
