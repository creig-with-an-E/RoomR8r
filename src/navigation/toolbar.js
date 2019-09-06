import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

import {connect} from "react-redux"
import Router from "next/router"
import {logoutUser} from "../../store/actions/authActions"

import Link from "next/link"
const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  appBar:{
    backgroundColor:"#191923",
    // backgroundColor:"rgba(0,0,0,1)", 
    marginBottom:"10px"
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:"#646865",  /** used in place of #474A48 as there is better contrast*/
    fontFamily: 'Lexend Tera, sans-serif',
  },
  links:{
    fontFamily: 'Poppins, sans-serif',
    fontWeight:900,
    color: "#fffffa"
  }
}));

const toolbar=(props)=>{
  const classes = useStyles();
  const userAuthenticated = props.userToken ? (
            <React.Fragment>
              <Link href="/"><Button className={classes.links} >Home</Button></Link> 
              <Button onClick={props.showModalHandle} className={classes.links} color="inherit">Add</Button>
              <Button className={classes.links} color="inherit" onClick={()=>logout()}>Logout</Button>
            </React.Fragment>
            ):
           <Button className={classes.links} color="inherit" onClick={()=>Router.push("/auth")}>Login</Button>

  const logout=()=>{
    props.endSession()
    Router.push("/auth")
  }

  return (
    <div className={classes.root}>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
            <Typography onClick={()=>Router.push("/")} variant="h5" className={classes.title}>
              <span className="logoHeader">RoomR<span style={{color:"#FF5941"}} >8</span>r</span>
            </Typography>
          {userAuthenticated}
        </Toolbar>
      </AppBar>
      <style jsx>{`
          .logoHeader:hover {
            opacity: 0.7;
            cursor: pointer
          }
        `}
      </style>
    </div>
  );
}

const mapStateProps=(state)=>{
  return{
    userToken: state.auth.userToken
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    endSession: ()=>dispatch(logoutUser())
  }
}

export default connect(mapStateProps, mapDispatchToProps)(toolbar)