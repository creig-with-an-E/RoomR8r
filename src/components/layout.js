import React from 'react';
import Toolbar from "../navigation/toolbar"
import {Backdrop} from "@material-ui/core"
const Layout=(props)=>{
  // receives modal handle from index.js 
  return(
    <div style={styles.containerStyle}>
      <Toolbar showModalHandle={props.showModalHandle}/> 
      {props.children}
    </div>
  )
}

const styles ={
  containerStyle: {
    background: "#fffffa",
    // background:"url('static/imgs/background.jpeg')",
    backgroundRepeat: "no-repeat",
    backgroundSize:"cover",
    opacity:0.9,
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    },
}
export {Layout}
