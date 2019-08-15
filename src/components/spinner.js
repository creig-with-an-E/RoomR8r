import React from 'react';

const spinner=()=>{
  return(
      <img style={styles.spinnerStyle} src="/static/imgs/spinner.gif" alt="spinner" />
)
}

const styles={
  spinnerStyle:{
    width:"100px",
    height:"100px",
    margin: "0 auto",
    alignSelf: 'center',
    display:"block",
  }
}

export default spinner;