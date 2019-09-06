import React, { Component } from "react";
import {connect} from "react-redux"
import Router from "next/router"
import {parseCookies} from "../lib/parseCookies"

import {ReviewCard, Layout, Spinner, SearchBar } from "../src/components"
import AddReviewForm from "../src/modal/addReviewForm"
import * as appActions from "../store/actions/appActions"
import * as authActions from "../store/actions/authActions"

class App extends Component {
  static getInitialProps=({req})=>{
    const cookie = parseCookies(req)
    return {
      savedToken: cookie.userToken
    }
  }

  componentDidMount(){
    if(!this.props.savedToken){
      Router.replace("/auth")
    }else{
      this.props.updateSavedToken(this.props.savedToken)
    }
  }

  state = {
    address: "",
    modalVisible: false,
    startingUp: true,
    returnedNoResult:false, //used as flag to check if user has attempted searching 
    addressError:false
  };

  onAddressChangeHandler = input => {
    //handles user input and stores in local state
    const valid = this.isValidatePostalCode(input)
      if(valid){
      const addDash = input.length===3 ? `${input.slice(0,3)}-${input.slice(3)}`:input
      this.setState({
       addressError:false,
       address: addDash.toUpperCase()
    })
    return
    }
    this.setState({addressError:!valid})
  };

  isValidatePostalCode=(input)=>{
    // validates the postal code to fit canadian format of X1X-X1X
    const val = input.split("")
    let valid = true
    let counter = 0
    val.forEach((element,index)=>{
      if((counter % 2) !== 0){
        if(element === "-"){
          return
        }else{
          counter++
          valid = valid && !isNaN(parseInt(element)) 
        }    
      }else{
        counter++
        // validates the strings are in the right place by canadian postal code format
        valid = valid && /^[A-Za-z\-]/.test(element)
      }
    })
    return valid
  }
  searchByAddressHandler = event => {
    this.props.findByAddress(this.props.userToken, this.state.address)
  }

  showModalHandle=()=>{
    this.setState({modalVisible: true})
  }

  hideModalHandle=()=>{
    this.setState({modalVisible: false})
  } 
  render() {
    const cards = this.props.searchResults.map(element=><ReviewCard data={element} key={element.id} />)
    const spinner = !this.props.loading ? null : <Spinner />;
    // showModal is passed down to Layout
    return (
      <Layout showModalHandle={this.showModalHandle}>
        <AddReviewForm 
            userToken={this.props.userToken}
            modalVisible={this.state.modalVisible}
            hideModalHandle={this.hideModalHandle}>
        </AddReviewForm>
        <section style={styles.sectionStyle}>
        <h2 style={styles.headerStyle}>
            Because not all landlords are built the same
          </h2>
          <SearchBar
            invalid={this.state.addressError ? true : false}
            placeholder="X5X-X5X"
            value={this.state.address}
            onChange={this.onAddressChangeHandler}
            onRequestSearch={this.searchByAddressHandler}
          />
          <p style={styles.errorStyle}> {this.state.addressError ? "Acceptable format is X9X-9X9" : ""} </p>
          <p style={styles.searchHeading}>Search for reviews by Postal Code</p>
          {spinner}
        { cards.length !== 0 ? <div style={{ width:"100%"}}>{cards}</div>: null}
        </section>            
      </Layout>
    );
  }
}

const styles = {
  headerStyle:{
    marginTop:"80px",
    fontSize: 22,
    color: "rgb(44,54,94)",
    textAlign: "center",
    fontFamily:'Poppins, sans-serif',
    fontWeight:"bold"
  },
  sectionStyle:{
    overflowY:"scroll",
    alignSelf:"center",
    marginTop:"5px",
    padding: "20px",
    textAlign: "center",
    width:"100%"
  },
  searchHeading:{
    fontSize:16,
    marginTop:20,
    color: "rgb(44,54,94)", 
    fontWeight:"bold",
    fontFamily:"Poppins, sans serif"
  },
  errorStyle:{
    color:"rgb(255,89,65)",
    fontWeight:"bold",
    fontFamily:"Poppins, sans serif"
  }
};

const mapStateToProps=(state)=>{
  return{
    userToken: state.auth.userToken,
    searchResults:state.app.searchResults,
    loading: state.app.loading
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    updateSavedToken:(token)=>dispatch(authActions.updateSavedToken(token)),
    findByAddress:(userToken,address)=>dispatch(appActions.findReviewByAddress(userToken,address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
