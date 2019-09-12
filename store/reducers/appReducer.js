import * as actionTypes from "../actions/actionTypes"

const INITIAL_STATE = {
    searchResults:null,
    loading: null,
    error: null,
    addressData: null,    //address lookup state used in creating new review

}

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_BY_ADDRESS_START:
      return {...state,loading: true, error: null}
    case actionTypes.SEARCH_BY_ADDRESS_SUCCESS:
      return {...state,loading: false, searchResults: action.payload.data}
    case actionTypes.SEARCH_BY_ADDRESS_FAIL:
      return {...state, loading: false, error: "SOMETHING WENT WRONG"}
    case actionTypes.RESET_APPLICATION_STATE:
      return {...INITIAL_STATE}
    case actionTypes.SET_ADDRESS_OBJECT:
      return {...state, addressData: action.payload}
    default:
      return state
  }
}

export default reducer