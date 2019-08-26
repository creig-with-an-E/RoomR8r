import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import ModalComponent from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Rating from "@material-ui/lab/Rating";

import { Button } from "../components";

const useStyles = makeStyles(theme => ({
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
    padding: theme.spacing(4, 4, 3)
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
}));

const Modal = props => {
  const classes = useStyles();
  const [rating, setRating] = useState(1);
  
  const handleClose = () => {
    props.hideModalHandle();
  };

  return (
    <div>
      <ModalComponent
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.modalVisible}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={props.modalVisible}>
          <div className={classes.paper}>
            <h2 className={classes.heading}
              id="transition-modal-title" >
              Add Review
            </h2>
            <form>
              <input
                className={classes.input}
                type="text"
                required
                placeholder="Post Code"
              />
              <input
                required
                className={classes.input}
                type="text"
                placeholder="Street address"
              />
              <input
                className={classes.input}
                type="text"
                placeholder="Apartment Number"
              />
              <input
                required
                className={classes.input}
                type="text"
                placeholder="City"
              />
              <legend title="Land lord info">
                <input className={classes.input} placeholder="Full Name" />
              </legend>
              <span style={{
                margin: "15px auto",
                justifyContent: "center",
                display: "flex"
              }}>
                <Rating
                  value={rating}
                  onChange={(event, newValue) => setRating(newValue)}
                />
              </span>
              <Button onClick={handleClose} className={classes.buttonStyle}>
                Submit
              </Button>
            </form>
          </div>
        </Fade>
      </ModalComponent>
    </div>
  );
};

export default Modal;
