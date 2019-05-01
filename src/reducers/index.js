import { combineReducers } from 'redux'
import AuthReducer from './AuthReducer'
import CategoryReducer from './CategoryReducer'

export default combineReducers({
  auth: AuthReducer,
  selectedCatagories: CategoryReducer
})
