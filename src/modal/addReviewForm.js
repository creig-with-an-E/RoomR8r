import React, { Component,useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModalComponent from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Rating from "@material-ui/lab/Rating";

import axios from "axios"

import { Button } from "../components";

  class addReviewForm extends Component{
  
  state={
    rating:0,
    postal_code:"",
    street_number:"",
    apartment_number:"",
    first_name:"",
    last_name:"",
    comment:"",
    city:""

  }
  handleClose = () => {
    this.props.hideModalHandle();
  };

  onInputChange=(event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  addReviewHandle=(event)=>{
    event.preventDefault()
    axios.post(`https://accomo-rater.firebaseio.com/landlord_data.json?auth=${
      this.props.userToken}`,{
        "postal_code":this.state.postal_code,
        "address":{
          "street_number":this.state.street_number,
          "apartment_number":this.state.apartment_number
          },
        "landlord_bio":{
          "first_name":this.state.first_name,
          "last_name":this.state.last_name
        },
        "comment":this.state.comment,
        "rating": this.state.rating
        }
    ).then(response=>{
        this.handleClose()
    })
  }
  render(){
  return (
    <div>
      <ModalComponent aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        style={styles.modal}
        open={this.props.modalVisible}
        onClose={this.handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={this.props.modalVisible}>
          <div style={styles.paper}>
            <h2 style={styles.heading}
              id="transition-modal-title" >
              Add Review
            </h2>
            <form onSubmit={this.addReviewHandle}>
              <input onChange={this.onInputChange} style={styles.input} type="text" value={this.state.postal_code}
                required placeholder="Post Code" name="postal_code"/>
              <input onChange={this.onInputChange}  style={styles.input} type="text" name="street_number"
                required placeholder="Street address" value={this.state.street_number} />
              <input onChange={this.onInputChange}  style={styles.input} 
                type="text" placeholder="Apartment Number"
                name="apartment_number" value={this.state.apartment_number}
              />
              <input onChange={this.onInputChange} style={styles.input}
                type="text" required
                placeholder="City"
                name="city" value={this.state.city}
              />
              <legend title="Land lord info">
                <input onChange={this.onInputChange} style={styles.input} placeholder="landlord's name" name="first_name" value={this.state.first_name}/>
              </legend>
              <span style={{
                margin: "15px auto",
                justifyContent: "center",
                display: "flex"
              }}>
                <Rating
                  value={this.state.rating}
                  onChange={(event, newValue) => this.setState({rating: newValue})}
                />
              </span>
              <Button onClick={this.addReviewHandle} style={styles.buttonStyle}>
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </ModalComponent>
    </div>
  )}
};

const styles = {
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(44,54,94,0.8)"
  },
  paper: {
    margin: "0 auto",
    borderRadius: "3px",
    background: "rgb(44,54,94)",
    boxShadow: "#000",
    width: 320,
    padding: "4px, 4px, 3px"
  },
  input: {
    padding: 15,
    display: "block",
    margin: "10px auto"
  },
  heading:{
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
    color: "#fffff0"
  }
};


export default addReviewForm;
