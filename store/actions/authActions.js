import * as actionTypes from "./actionTypes"
import axios from "axios"

// ********** start of login actions
const loginStart=()=>{
  return{
    type: actionTypes.LOGIN_START
  }
}

const loginSuccess=(idToken)=>{
  return {
    type:actionTypes.LOGIN_SUCCESS,
    payload:{
      userToken: idToken
    }
  }
}
export const login=(email, password)=>{
  return (dispatch)=>{
    loginStart()
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI`,{email, password, returnSecureToken:true})
    .then(response=>{
      dispatch(loginSuccess(response.data.idToken))
      localStorage.setItem("userToken",response.data.idToken)
    })
    .catch(error=>{
      dispatch({
        type: actionTypes.LOGIN_FAIL
      })
    })
  }
}

// *********end of login actions

// *********start of signup actions
export const signup=(email, password)=>{
  return (dispatch)=>{
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI`,{email, password, returnSecureToken:true})
    .then(response=>{
      dispatch({
        type:actionTypes.SIGNUP_USER_SUCCESS,
        payload:{
          userToken: response.data.idToken
        }
      })
      localStorage.setItem("userToken",response.data.idToken)
    })
    .catch(error=>{
      dispatch({
        type: actionTypes.SIGNUP_USER_FAIL
      })
    })
  }
}


// *******end of signup actions
export const clearError=()=>{
  return{
    type: actionTypes.CLEAR_ERRORS
  }
}

export const logoutUser=()=>{
  localStorage.removeItem("userToken")

  return{
    type: actionTypes.LOGOUT_USER
  }
}