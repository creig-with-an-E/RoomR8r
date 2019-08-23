import React, { Component } from "react";
import Router from "next/router"
import axios from "axios"
import Spinner from "../src/components/spinner"
import * as actions from "../store/actions/authActions"

import { connect } from "react-redux"

class Login extends Component {
  state = {
    email:"",
    password:"",
    loading: false, //updated by componentDidUpdate
  };
  componentDidMount(){
    //reseting errors on initial page mount
    this.props.clearError()
  }
  componentDidUpdate(prevProps, prevState){
    if(this.props.userToken !== prevProps.userToken){
      this.setState({loading: false})
      this.props.userToken ? Router.push("/") : null
    }
    if(this.props.error !== prevProps.error){
      this.setState({loading: false})
    }
  }
  onSubmitHandler=(event)=>{
    event.preventDefault()
    this.setState({loading: true})
    const {email, password} = this.state
    this.props.login(email,password)
  }

  onChange=(event)=>{
    if(event.target.name === "password" && this.props.error){
      this.props.clearError()
    }
    this.setState({
        [event.target.name]:event.target.value
    })
  }
  render() {
    const button = !this.state.loading ?<input  type="submit" style={styles.buttonStyle} value="LOGIN"/> : <Spinner />
    
    return (
      <div style={styles.containerStyle}>
          <div>
            <h1 style={{textAlign:"center", color:"#474A48",fontFamily: 'Lexend Tera, sans-serif', fontWeight:"bold"}}>RoomR<span style={{color:"#FF5941"}}>8</span>r</h1>
            <p style={styles.header}>Gamble with the lottery not your accomodation</p>
          </div>
        <div style={styles.mainAreaStyle}>
          <form onSubmit={this.onSubmitHandler}>
            <input required value={this.state.email} 
               onChange={this.onChange} 
               style={styles.inputStyle} placeholder="email@gmail.com"
               type="email" name="email" />
            <input required value={this.state.password}
               onChange={this.onChange} 
               style={styles.inputStyle}
               placeholder="password"
               type="password" name="password" />
            
            {/* displaying button or spinner */}
            {button}

            {
              // 
              this.props.error ? 
                <p style={styles.errorStyle}>
                  {this.props.error}
                </p>:""
          }
          </form>
        </div>
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
    height: "210px",
    width: "400px",
    borderRadius: "2px",
    paddingTop:"20px",
    justifyContent:"center"
  },
  inputStyle: {
    display: "block",
    padding: "10px",
    width: "75%",
    margin: "15px auto",
    borderRadius: "5px"
  },
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
  }
};
const mapStateToProps=(state)=>{
  return {
    userToken: state.auth.userToken,
    error: state.auth.error,
    loading: state.auth.loading
  }
}


export default connect(mapStateToProps,actions)(Login)
