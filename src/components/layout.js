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
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    backgroundColor: "#fffffa"
    },
}
export {Layout}
