import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles(theme => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background:"rgba(0,0,0,0.5)"
  },
  paper: {
    backgroundColor: "#ccc",
    // border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4, 4, 3),
  },
}));

export default function TransitionsModal(props) {
  const classes = useStyles();

  const handleClose = () => {
    props.hideModalHandle()
  };

  return (
    <div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={props.modalVisible}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={props.modalVisible}>
          <div className={classes.paper}>
            <h2 id="transition-modal-title">Transition modal</h2>
            <p id="transition-modal-description">react-transiton-group animates me.</p>
            <button type="button" onClick={handleClose}>
                Click me
            </button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}