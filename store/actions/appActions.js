import axios from "axios";
import * as actionTypes from "./actionTypes"

export const findReviewByAddress= (userToken,address) => {
  // fetches reviews from firebase
  // return: array of objects
  // params: userToken passed from authState and address 
  
  return (dispatch)=>{
    dispatch({type: actionTypes.SEARCH_BY_ADDRESS_START})
    axios.get(`https://accomo-rater.firebaseio.com/landlord_data.json?auth=${
      userToken}&orderBy="postal_code"&startAt="${address}"&endAt="${
      address }"`
    )
    .then(response => {
      // iterating over response placing id as part of object
      const arrayData = Object.keys(response.data).map(key => {
      return { ...response.data[key], id: key };
      });
      dispatch({
        type: actionTypes.SEARCH_BY_ADDRESS_SUCCESS,
        payload: { data:arrayData }
      })
    })
    .catch(error => {
      dispatch({
        type:actionTypes.SEARCH_BY_ADDRESS_FAIL,
        payload:{ data: error }
      })
    });
  }
  };




  // export const purchaseBurger=(orderData, token)=>{
  //   return (dispatch)=>{
  //     dispatch(purchaseBurgerStart())
  //     axios.post(`/orders.json?auth=${token}` ,orderData)
  //       .then(response=>{
  //         dispatch(purchaseBurgerSuccess(response.data.name,orderData))
  //       }).catch(error=>{
  //         dispatch(purchaseBurgerFailed(error))
  //       })
  
  //   }
  // }
