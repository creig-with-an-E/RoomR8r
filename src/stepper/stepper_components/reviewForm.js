import React from 'react';
import {connect} from "react-redux"

const reviewForm=(props)=>{
    const street_address = props.data.stepperFormData.addressData[0].long_name + " " + props.data.stepperFormData.addressData[1].long_name || " "
    const city = props.data.stepperFormData.addressData[2].long_name || " "
    const country = props.data.stepperFormData.addressData[6].long_name || " "
    const province = props.data.stepperFormData.addressData[5].long_name || " "
     
    const {name, landlord_review}=props.data.stepperFormData.landlord_bio
return(
  <div>
    <h3>Summary</h3>
    <hr />
    <p>Street Address: <span>{street_address}</span></p>
    <p>City: <span>{city}</span></p>
    <p>Province: <span>{province}</span></p>
    <p>Country: <span>{country}</span></p>
    <p>Name: <span>{name}</span></p>
    <p>Bio: <span>{landlord_review}</span></p>
    <div style={{float:"none", display: "block"}}></div>
    <style jsx>{`
    p {
      width:350px;
      color: #fffffa;
    };

    p span {
      color: #FF5941;
      margin-right: 10px;
      text-align: right
    };

    h3 {
      color: #fffffa;
      margin: 0;
      padding:0;
      text-align: center;
      font-family: poppin, san-serf
    };
    hr {
      width: 30px,
      height:5px;
      padding:2px;
      background-color: #FF5941;
      border: none
    }
    `}</style>
  </div>
)}

const mapStateToProps=(state)=>{
  return{
    data: state.app
  }
}
export default connect(mapStateToProps)(reviewForm)