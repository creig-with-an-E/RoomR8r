import React from 'react';

const Button =(props)=>{
    const styles={
        buttonStyle: {
            display: "block",
            height:"35px",
            // padding: "16px",
            margin: "15px auto",
            borderRadius:"3px",
            color:"#fffffa",
            fontWeight:"bold",
            border:"0",
            width:"266px",
            backgroundColor: !props.altButton ?"#FF5941": "#474A48",
            // backgroundColor:"#FCA311",
            fontSize: "14px",
          },
    }
    const combinedButtonStyles = props.style ? {...styles.buttonStyle, ...props.style} : styles.buttonStyle
    return(
       <button onClick={props.onClickHandler} style={combinedButtonStyles}>
           {props.children}
       </button>
    )
}

export { Button }