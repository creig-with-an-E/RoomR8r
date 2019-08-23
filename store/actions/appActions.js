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
    axios.get(`https://accomo-rater.firebaseio.com/landlord_data.json?auth=${
      userToken}&orderBy="postal_code"&startAt="${address}"&endAt="${
      address }"`
    )
    .then(response => {
      dispatch(findByAddressSuccess(response))
    })
    .catch(error => {
      dispatch(findByAddressFail(error))
    });
  }
  };
