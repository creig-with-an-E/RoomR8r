import * as actionTypes from "./actionTypes"
import axios from "axios"
import Cookie from "js-cookie"

// ********** start of login actions
const loginStart=()=>{
  return{
    type: actionTypes.LOGIN_START
  }
}

const loginSuccess=(idToken)=>{
  createCookie(idToken)
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
    })
    .catch(error=>{
      dispatch({
        type: actionTypes.LOGIN_FAIL
      })
    })
  }
}

//**handling persistant storage */ 
const createCookie=(idToken)=>{
  // creates cookie that expires in an hour
  Cookie.set("userToken",idToken,{expires:1/24})
}

const destroyCookie=()=>{
  // deletes cookie when user logs out
  Cookie.remove("userToken")
}

// *********end of login actions

// *********start of signup actions
const signupSuccess=(idToken)=>{
  createCookie(idToken)
  return {
    type:actionTypes.SIGNUP_USER_SUCCESS,
    payload:{
      userToken: idToken
    }
  }
}
export const signup=(email, password)=>{
  return (dispatch)=>{
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI`,{email, password, returnSecureToken:true})
    .then(response=>{
      dispatch(signupSuccess(response.data.idToken))
    })
    .catch(error=>{
      dispatch({ type: actionTypes.SIGNUP_USER_FAIL })
    })
  }
}

// *******end of signup actions
export const clearError=()=>{
  return{
    type: actionTypes.CLEAR_ERRORS
  }
}

//****** */
export const logoutUser=()=>{
  destroyCookie()
  return{
    type: actionTypes.LOGOUT_USER
  }
}

//****** */

// saving userToken
export const updateSavedToken=(token)=>{
  return {
    type: actionTypes.UPDATE_TOKEN_WITH_COOKIE,
    payload:token
  }
}