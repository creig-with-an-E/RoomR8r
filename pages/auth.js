import React, { Component } from "react";
import Router from "next/router"
import Head from "next/head"
import { connect } from "react-redux"
import Cookie from "js-cookie"

import {Button, Spinner} from "../src/components"
import * as actions from "../store/actions/authActions"


class Auth extends Component {
  state = {
    registrationFormSelected:false, //boolean to toggle betweeen the login and registration fo
    email:"",
    password:"",
    password_confirm:"",
    rememberMe:false, //used to determine whether to store create cookie or not
    loading: false, //updated by componentDidUpdate
  };
  componentDidMount(){
    //reseting errors on initial page mount
    this.props.clearError()
  }
  componentDidUpdate(prevProps, prevState){
    // checks that loading has completed at state level
    if(this.props.userToken !== prevProps.userToken){
      // storing cookie value
      Cookie.set("userToken",this.props.userToken)
      this.props.userToken ? Router.push("/") : null
      this.setState({loading: false})
    }
    if(this.props.error !== prevProps.error){
      this.setState({loading: false, password:""})
    }
  }
  onSubmitHandler=(event)=>{
    // handles both form submissions passing data to either login or signup action
    event.preventDefault()
    this.setState({loading: true})
    const {email, password} = this.state
    if(!this.state.registrationFormSelected){
      this.props.login(email,password)
    }else if(this.state.registrationFormSelected){
      this.props.signup(email,password)
    }
  }

  onChange=(event)=>{
    if(event.target.name === "password" && this.props.error){
      this.props.clearError()
    }
    this.setState({
        [event.target.name]:event.target.value
    })
  }

  toggleAuthForms=()=>{
    this.setState({registrationFormSelected:!this.state.registrationFormSelected})
  }
  render() {
    const button = !this.state.loading ?(<Button onClick={this.onSubmitHandler}>
      {!this.state.registrationFormSelected? "Login" :"Create Account"}</Button>
      ): <Spinner />
    const registrationFormSelected = this.state.registrationFormSelected

    let form = (
            <React.Fragment>
              <form onSubmit={this.onSubmitHandler}>
                <input required value={this.state.email} onChange={this.onChange} 
                style={styles.inputStyle} placeholder="email@gmail.com"
                type="email" name="email" />
               <input required value={this.state.password}
                onChange={this.onChange} 
                style={styles.inputStyle}
                placeholder="password"
                type="password" name="password" />
                {this.state.registrationFormSelected?  
                  ( <input required value={this.state.password_confirm}
                      onChange={this.onChange} 
                      style={styles.inputStyle}
                      placeholder="confirm password"
                      type="password" name="password_confirm" /> ) : null }
                  {/* displaying button or spinner */}
                  <label style={styles.rememberLabel}>Remember me 
                    <input type="checkbox" style={styles.rememberCheckbox}/>
                  </label>
                  {button}
                  { this.props.error ? <p style={styles.errorStyle}> {this.props.error} </p>: null }
                </form>
          </React.Fragment>)

    return (
      <div style={styles.containerStyle}>
        <Head>
          <title>RoomR8r • {!this.state.registrationFormSelected ? "Login" : "Signup"}</title>
        </Head>
          <div>
            <h1 style={styles.logoStyle}>RoomR<span style={{color:"#FF5941"}}>8</span>r</h1>
            <p style={styles.header}>Gamble with the lottery not your accomodation</p>
          </div>
        <div style={styles.mainAreaStyle}>
          {form}
        </div>
        <p style={styles.paragraphStyle}>
            {!registrationFormSelected?"Dont Have an account?":"Returning user"}
            <span className="createAccountButton" style={styles.createAccountButton} 
              onClick={this.toggleAuthForms}>
                {!registrationFormSelected?"Create Account":"login"}
            </span>
          </p>
          <style jsx>{`
          .createAccountButton :hover {
            opacity: 0.7;
            cursor: pointer
          }
        `}
        </style>
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    height: "100vh",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor:"#fffffa",
    flexDirection: 'column',
  },
  mainAreaStyle: {
    backgroundColor: "#191923",
    width: "300px",
    borderRadius: "5px",
    padding:"20px",
    justifyContent:"center"
  },
  logoStyle:{textAlign:"center", 
    color:"#474A48",
    fontFamily: 'Lexend Tera, sans-serif', 
    fontWeight:"bold"},
  inputStyle: {
    display: "block",
    // padding: "10px",
    height:"36px",
    width: "266px",
    // paddingLeft:"10px",
    margin: "15px auto",
    borderRadius: "5px"
  },
  header:{
    textAlign:"center",
    color:"#191923",
    fontWeight: 'bolder',
    fontSize:22,
    fontFamily: 'Poppins, sans-serif', 
  },
  errorStyle:{
    marginBottom:"20px",
    color:"#f50",
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold"
  },
  paragraphStyle:{
    textAlign:"left",
    padding: 20,
    fontSize:16,
    fontFamily:"Poppins, sans serif",
    backgroundColor:"#fff"
  },
  createAccountButton:{
    marginLeft:"5px",
    fontWeight: "bold",
    color:"#FF5941",
    textDecoration: "underline"
  },
  rememberLabel:{
    padding: 15,
    margin:"30px auto",
    textAlign:"center",
    color: "#fffffa",
  },
  rememberCheckbox :{
    padding: 25
  }
};
const mapStateToProps=(state)=>{
  return {
    userToken: state.auth.userToken,
    error: state.auth.error,
    loading: state.auth.loading
  }
}


export default connect(mapStateToProps,actions)(Auth)
