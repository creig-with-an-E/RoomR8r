import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import {connect} from "react-redux"
import Router from "next/router"
import {logoutUser} from "../../store/actions/authActions"

import Link from "next/Link"
const useStyles = makeStyles(theme => ({
  root: {
    // flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    color:"#474A48",
    fontFamily: 'Lexend Tera, sans-serif',
  },
  links:{
    fontFamily: 'Poppins, sans-serif',
    fontWeight:900,
    color: "#fffffa"
  }
}));

const ButtonAppBar=(props)=>{
  const classes = useStyles();
  const userAuthenticated = props.userToken?<Link href="/add"><Button className={classes.links} color="inherit">Add</Button></Link>: null

  const logout=()=>{
    props.logoutUser()
    Router.push("/login")
  }
  const logoClickedHandler=()=>{
    // navigates user to home page when logo is clicked
    Router.push("/")
  }
  return (
    <div className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"#191923", marginBottom:"10px"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            {/* <MenuIcon /> */}
          </IconButton>
          <Typography variant="h5" className={classes.title}>
              RoomR<span style={{color:"#FF5941"}}>8</span>r
          </Typography>
          {userAuthenticated}
          <Button className={classes.links} color="inherit" onClick={logout}>Logout</Button>
        </Toolbar>
      </AppBar>
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
    logoutUser: ()=>dispatch(logoutUser)
  }
}

export default connect(mapStateProps, mapDispatchToProps)(ButtonAppBar)