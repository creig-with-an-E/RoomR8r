import axios from "axios";
import * as actionTypes from "./actionTypes"

const findByAddressStart=()=>{
  // called when findReviewByAddress starts
  // params: 
  // return:
  return {type: actionTypes.SEARCH_BY_ADDRESS_START}
}

const findByAddressSuccess=(response)=>{
  // iterating over response placing id as part of object
  const arrayData = Object.keys(response.data).map(key => {
    return { ...response.data[key], id: key };
    });
  return {
    type: actionTypes.SEARCH_BY_ADDRESS_SUCCESS,
    payload: { data:arrayData }
  }
}

const findByAddressFail=(error)=>{
  return {
    type:actionTypes.SEARCH_BY_ADDRESS_FAIL,
    payload:{ data: error }
  }
}

export const findReviewByAddress= (userToken,address) => {
  // fetches reviews from firebase
  // return: array of objects
  // params: userToken passed from authState and address 
  return (dispatch)=>{
    dispatch(findByAddressStart())

    /*** searchParametersPassed: if search parameter is blank it returns all results
     *   in the event parameter is passed, it returns relevant postal code results
    */
    const searchParametersPassed = address ?`&orderBy="postal_code"&startAt="${address}"&endAt="${
      address }"` :""
    axios.get(`https://accomo-rater.firebaseio.com/landlord_data.json?auth=${
      userToken}${searchParametersPassed}`
    )
    .then(response => {
      dispatch(findByAddressSuccess(response))
    })
    .catch(error => {
      dispatch(findByAddressFail(error))
    });
  }
  };

  /** resetting state */

  export const resetApplicationState=()=>{
    return{
      type: actionTypes.RESET_APPLICATION_STATE
    }
  }
