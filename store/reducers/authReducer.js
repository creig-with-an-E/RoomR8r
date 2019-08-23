import * as actionTypes from "../actions/actionTypes"

const INITIAL_STATE = {
  userToken: null,
  error: null
};

const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CLEAR_ERRORS:
      return {...state, error:""}
    case actionTypes.LOGIN_START:
      return {...state, error: null}
    case actionTypes.LOGIN_FAIL:
      return {...state, error: "PLEASE VERIFY CREDENTIALS"}
    case actionTypes.LOGIN_SUCCESS:
      return {...state,error: null, userToken: action.payload.userToken}
    case actionTypes.LOGOUT_USER:
      return {...state, userToken: null}
    default:
      return state
  }
};

export default reducer