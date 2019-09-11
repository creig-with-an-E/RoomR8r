import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import GMapsSearchBar from "./googleMapsSearchBar"

const styles = theme => ({
  root:{
  },
  stepper: {
    backgroundColor:"rgba(44,54,94,0.6)",
    borderTopLeftRadius: 7,
    borderTopRightRadius: 7,
  },
  button: {
    marginRight: 15,
    "& $disabled":{
      backgroundColor:"red"
    },

  },
  step: {
    
  },
  "step-body":{ 
      height:300, 
      display:"flex", 
      alignItems: 'center', 
      justifyContent:"center", 
      background:"rgb(44,54,94)",
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7,
  },
  stepIcon:{
    color:"#FF5941"
  },
  completed:{}
});


const getSteps=()=>{
  return ['Location settings', 'Add land lord details', 'Verify details'];
}

const getStepContent=(step, address= "")=>{
  switch (step) {
    case 0:
      // switching to the Google maps search bar slde
      return ( <GMapsSearchBar />)
    case 1:
      return 'What is an ad group anyways?';
    case 2:
      return 'This is the bit I really care about!';
    default:
      return 'Unknown step';
  }
}

const HorizontalStepper=(props)=>{
  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());
  const [address, setAddress] = React.useState("")

  

  const steps = getSteps();

  function isStepOptional(step) {
    return step === null;
  }

  function isStepSkipped(step) {
    return skipped.has(step);
  }

  function handleNext() {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(newSkipped);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleSkip() {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep(prevActiveStep => prevActiveStep + 1);
    setSkipped(prevSkipped => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  }

  function handleReset() {
    setActiveStep(0);
  }

  const { classes } = props;
  return (
    <div>
      <Stepper activeStep={activeStep} className={classes.stepper}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = <Typography variant="caption">Optional</Typography>;
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps} classes={{
              root: classes.step,
              completed: classes.completed,
              active: classes.active
            }}>
              <StepLabel {...labelProps} StepIconProps={{
                  classes: { root: classes.stepIcon }
                  }}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div className={classes["step-body"]}>
        {activeStep === steps.length ? (
          <div>
            <Typography className="instructions">
              Review complete.<a className={classes.completeButton} onClick={props.closeModal}>Close</a>
            </Typography>
          </div>
        ) : (
          <div>
            <Typography className={classes.instructions}>{getStepContent(activeStep, address)}</Typography>
            <div style={{marginTop:60, textAlign:"center"}}>
              <Button style={{backgroundColor:"#ccc"}} disabled={activeStep === 0}  onClick={handleBack} className={classes.button} color="primary">
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className={classes.button}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default withStyles(styles)(HorizontalStepper)