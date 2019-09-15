import React, { Component } from "react";
import {connect} from "react-redux"

import {setFormFields} from "../../../store/actions/appActions"

class LandlordForm extends Component {
  landLordformSubmitHandle = event => {
    event.preventDefault(); //preventing page refresh
  };

  onChangeText = (event) => {
    /* handles input change for the form
    *  values stored in redux state 
       retional: this is because local state was being cleared 
        on step change
    */
    const {name,value} = event.target
    this.props.updateFields({ [name]: value })
  }

  render() {
    const {name,landlord_review} = this.props.landlord_bio
    console.log(name)
    return (
        <form onSubmit={this.landLordformSubmitHandle}>
          <input
            placeholder="John Doe"
            type="text" style={styles.inputStyle}
            name="name" value={name}
            onChange={this.onChangeText}
          />
          <textarea
            placeholder="bio" onChange={this.onChangeText}
            name="landlord_review" value={landlord_review}
            cols="10" rows="6"
            style={styles.inputStyle}
          />
        </form>
    );
  }
}
const styles = {
  inputStyle: {
    padding: 15,
    width: "300px",
    borderRadius: 7,
    fontSize: 14,
    marginTop: "10px",
    marginBottom: "10px",
    display: "block"
  }
};

const mapStateToProps=(state)=>{
  return{
    landlord_bio:state.app.stepperFormData.landlord_bio
  }
}

const mapDispatchTopProps=(dispatch)=>{
  return{
    updateFields:(data)=>dispatch(setFormFields(data))
  }
}
export default connect(mapStateToProps,mapDispatchTopProps)(LandlordForm)
