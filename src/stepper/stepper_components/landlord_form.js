import React, { Component } from "react";

class LandlordForm extends Component {
  state = {};

  landLordformSubmitHandle = event => {
    event.preventDefault();
  };

  onChangeText = ({input,name}) => {
    /* handles input change for the form*/
    this.setState({
        [name]:input
    })
  };
  render() {
    return (
      <div>
        <form onSubmit={this.landLordformSubmitHandle}>
          <input placeholder="John Doe" type="text" style={styles.inputStyle} name="landlord_name"/>
          <textarea
            placeholder="bio" name="landlord_bio"
            cols="10" rows="6"
            style={styles.inputStyle}
          />
        </form>
      </div>
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
export default LandlordForm;
