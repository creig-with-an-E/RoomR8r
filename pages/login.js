import React, { Component } from "react";
import Router from "next/router"
import axios from "axios"
import Spinner from "../src/components/spinner"

class Login extends Component {
  state = {
    email:"",
    password:"",
    loading: false,
    error:""
  };

  onSubmitHandler=(event)=>{
    event.preventDefault()
    this.setState({loading: true, error:""})
    const {email, password} = this.state
    axios.post(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI`,{email, password, returnSecureToken:true})
      .then(response=>{
        setTimeout(()=>{
          this.setState({loading: false})
          return(Router.push({
          pathname:"/"
          }))
        },3000)
      })
      .catch(error=>{
        this.setState({error:"Please verify credentials", loading:false,password:"",})
      })
  }

  onChange=(event)=>{
    console.log(event.target.name + " " + event.target.value)
    this.setState({
        [event.target.name]:event.target.value
    })
  }
  render() {
    const button = !this.state.loading ?<input  type="submit" style={styles.buttonStyle} value="LOGIN"/> : <Spinner />
    
    return (
      <div style={styles.containerStyle}>
          <div>
            <h1 style={{textAlign:"center", color:"#AF003D"}}>RoomR8r</h1>
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

            {/* displaying error based on state */}
            {this.state.error ?<p style={styles.errorStyle}>PLEASE VERIFY CREDENTIALS</p>:""}
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
    backgroundColor:"#000",
    flexDirection: 'column',
  },
  mainAreaStyle: {
    backgroundColor: "#1a1a1a",
    height: "220px",
    width: "400px",
    borderRadius: "2px",
    paddingTop:"20px",
    justifyContent:"center"
  },
  inputStyle: {
    display: "block",
    padding: "10px",
    width: "80%",
    margin: "15px auto",
    borderRadius: "5px"
  },
  buttonStyle: {
    display: "block",
    padding: "16px",
    margin: "20px auto",
    borderRadius:"2px",
    color:"#fffffa",
    border:"0",
    width:"100px",
    backgroundColor:"#AF003D",
    fontSize: "14px",
  },
  header:{
    textAlign:"center",
    color:"#E2E1E1",
    fontWeight: 'bold',
    fontSize:22
  },
  errorStyle:{
    color:"#f50",
    textAlign:"center",
    fontSize:16,
    fontWeight:"bold"
  }
};
export default Login;
