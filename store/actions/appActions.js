import axios from "axios";
import * as actionTypes from "./actionTypes"

const findByAddressStart=()=>{
  // called when findReviewByAddress starts
  // params: 
  // return:
  return { type: actionTypes.SEARCH_BY_ADDRESS_START }
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
  console.log(address)
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
      console.log(response)
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

  export const createReview =(userToken,data)=>{
    return (dispatch)=>{
      axios.post(`https://accomo-rater.firebaseio.com/landlord_data.json?auth=${userToken}`,data)
       .then(response=>{
        dispatch({
          type: actionTypes.CREATE_REVIEW_SUCCESS,
          payload: response.data
        })
      }).catch(error=>{
        dispatch({
          type:actionTypes.CREATE_REVIEW_FAIL
        })
      })
    }
  }
  
/**functions for google maps auto complete */
export const setAddress=(address)=>{
  return {
    type: actionTypes.SET_ADDRESS_OBJECT,
    payload: address
  }
}

/*******end of google maps functions********/ 

/**start of review form functions**********/ 
export const setFormFields=(data)=>{
  //  handles input change for landlord_form review component
  return {
    type: actionTypes.SET_REVIEW_FORM_FIELDS,
    payload: data
  }
}

/*************end of review form data***************************/ 