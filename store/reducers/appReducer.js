import * as actionTypes from "../actions/actionTypes"

const INITIAL_STATE = {
    searchResults:null,
    loading: null,
    error: null,
    stepperFormData:{
      // store for stepper form fields
      landlord_bio:{
        // actual review and landlord name
        landlord_review: "",
        name: ""
      },
      postal_code:"",
      addressData: null,    //address lookup state used in creating new review      
    },

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
      return INITIAL_STATE
    case actionTypes.SET_ADDRESS_OBJECT:
      // return {...state, stepperFormData:{...state.stepperFormData,addressData: action.payload}}
      const data = action.payload
      return {...state, stepperFormData:{
        ...state.stepperFormData,
        postal_code:data[data.length-1].long_name,
        addressData: {
          street_number:data[0].long_name + " " + data[1].long_name,
          city:data[data.length-5].long_name,
          postal_code:data[data.length-1].long_name,
          province: data[data.length-3].long_name,
          country: data[data.length-2].long_name,
        }
    }}
    case actionTypes.LOGOUT_USER:
      return INITIAL_STATE
    case actionTypes.SET_REVIEW_FORM_FIELDS:
      const keys = Object.keys(action.payload)
      const landlord_bio_copy = JSON.parse(JSON.stringify(state.stepperFormData.landlord_bio))
      const value = landlord_bio_copy[keys[0]].toString()
      landlord_bio_copy[keys[0]] = action.payload[keys[0]]
      return {
        ...state, stepperFormData:{ ...state.stepperFormData, landlord_bio: landlord_bio_copy }
      }
    default:
      return state
  }
}

export default reducer