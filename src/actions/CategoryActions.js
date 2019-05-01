import { UPDATE_SELECTED_CATEGORIES } from './types'

export const selectedCatagoriesChange = (selectedCatagories) => {
  return {
    type: UPDATE_SELECTED_CATEGORIES,
    payload: selectedCatagories
  }
}
