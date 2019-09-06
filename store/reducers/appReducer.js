import * as actionTypes from "../actions/actionTypes"

const INITIAL_STATE = {
    searchResults:null,
    loading: null,
    error: null

}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_BY_ADDRESS_START:
      return {...state,loading: true, error: null}
    case actionTypes.SEARCH_BY_ADDRESS_SUCCESS:
      return {...state,loading: false, searchResults: action.payload.data}
    case actionTypes.SEARCH_BY_ADDRESS_FAIL:
      return {...state, loading: false, error: "SOMETHING WENT WRONG"}
    default:
      return state
  }
}

export default reducer