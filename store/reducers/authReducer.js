import * as actionTypes from "../actionsTypes"

const INITIAL_STATE = {
  loading: false,
  user: null,
  error: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOGIN_START:
        return {...state, loading: true, error: null}
    case actionTypes.LOGIN_FAIL:
        return {...state, loading: false, error: action.payload.error}
    case actionTypes.LOGIN_SUCCESS:
        return {...state, loading: false, error: null, user: action.payload.user}
    default:
        return state
      
  }
};

export default reducer