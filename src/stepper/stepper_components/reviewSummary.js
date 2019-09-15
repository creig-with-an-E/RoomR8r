import React from 'react';
import {connect} from "react-redux"

const reviewForm=(props)=>{
  const {addressData, landlord_bio} = props.data.stepperFormData
  const street_address = addressData.street_number
  const city = addressData.city
  const country = addressData.country
  const province = addressData.province
  const postal_code = addressData.postal_code

  const {name, landlord_review}= landlord_bio
return(
  <div>
    <h3 style={styles.header}>Summary</h3>
    <hr style={styles.hRule}/>
    {
      props.data ? (<section><p style={styles.p}>Street Address: <span style={styles.span}>{street_address}</span></p>
        <p style={styles.p}>City: <span style={styles.span}>{city}</span></p>
        <p style={styles.p}>Province: <span style={styles.span}>{province}</span></p>
        <p style={styles.p}>Postal Code: <span style={styles.span}>{postal_code}</span></p>
        <p style={styles.p}>Country: <span style={styles.span}>{country}</span></p>
        <p style={styles.p}>Name: <span style={styles.span}>{name}</span></p>
        <p style={styles.p}>Bio: <span style={styles.span}>{landlord_review}</span></p>
        </section>) : <h3>no data entered</h3> 
    }
    
  </div>
)}

const mapStateToProps=(state)=>{
  return{
    data: state.app
  }
}

const styles=  { 
  p:{
  width:"350px",
  color: "#fffffa"
},

span :{
  color: "#FF5941",
  marginRight: "10px",
  textAlign: "right"
},

header:{
  color: "#fffffa",
  margin: 0,
  padding:0,
  textAlign: "center",
  fontFamily: "poppin, san-serif",
},
hRule: {
  width: "120px",
  padding: "1px",
  backgroundColor: "#FF5941",
  border: "none"
}
}
export default connect(mapStateToProps)(reviewForm)