import React from 'react';

const Button =(props)=>{
    return(
       <button  onClick={props.onClickHandler} style={styles.buttonStyle}>
           {props.children}
       </button>
    )
}

const styles={
    buttonStyle: {
        display: "block",
        padding: "16px",
        margin: "15px auto",
        borderRadius:"3px",
        color:"#fffffa",
        fontWeight:"bold",
        border:"0",
        width:"100px",
        backgroundColor:"#FF5941",
        // backgroundColor:"#FCA311",
        fontSize: "14px",
      },
}

export { Button }