import React, { Component } from "react";
import {connect} from "react-redux"
import Router from "next/router"
import {parseCookies} from "../lib/parseCookies"

import {ReviewCard, Layout, Spinner, SearchBar } from "../src/components"
import AddReviewForm from "../src/modal/addReviewForm"
import * as appActions from "../store/actions/appActions"
import * as authActions from "../store/actions/authActions"
import Script from "react-load-script"

const handleScriptLoad=()=>{
  /***loads google script on load */
  // Declare Options For Autocomplete
  let options = {
    // types: ['(cities)'],
  };
  // Initialize Google Autocomplete
   let autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    options,
  );
  
  // Avoid paying for data that you don't need by restricting the set of
  // place fields that are returned to just the address components.
  autocomplete.setFields(['address_components']);
  
  // Fire Event when a suggested name is selected
  autocomplete.addListener('place_changed', handlePlaceSelect);
  }
  
const handlePlaceSelect=()=>{
  // Extract City From Address Object
  let addressObject = autocomplete.getPlace();
  let address = addressObject.address_components;
  // Check if address is valid
  if (address) {
    console.log(address)
    // this.setState(
    // {
    //   city: address[0].long_name,
    // }
    // );
  }
}

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
    searchInitiated: false, //used as flag to check if user has attempted searching if so show no result 
    addressError:false,
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
    const val = input.split("") //storing the values in array
    let valid = true
    let counter = 0
    val.forEach((element,index)=>{
      /******
        counter used to keep track of spaces where value should be digit
        even array index is alphabetic character and odd is numeric
        counter is not incremented after 3 so as to add dash which is not counted
      ******/
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
    let cards = null
    /**
     *  emptyResultsText: this is used to display feedback when empty list returned.
     *  display of this warning is handled by state.showEmptyResultsWarning flag
     * */ 
    let emptyResultsText = ""
    if(this.props.searchResults !== null && this.props.searchResults.length > 0){
      cards= this.props.searchResults ? this.props.searchResults.map(element=><ReviewCard data={element} key={element.id} />): null
    }else if(this.props.searchResults){
      /*** this handle the empty array case where no results where found**/ 
      if(this.props.searchResults.length === 0){
        emptyResultsText = <p style={styles.noResultsStyle}>Currently no reviews exist for this postal code</p>
      }
    }
    const spinner = !this.props.loading ? null : <Spinner />;
    /***  showModal handle is passed down to Layout ***/
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
          <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWcDVGfs8R5EmWbh9xsuYEHycoqDyDf9I&libraries=places"
          onLoad={handleScriptLoad}
        />
          <SearchBar
            id="autocomplete"
            invalid={this.state.addressError ? true : false}
            placeholder="X5X-X5X"
            value={this.state.address}
            // onChange={this.onAddressChangeHandler}
            onRequestSearch={this.searchByAddressHandler}
          />
          <p style={styles.errorStyle}> {this.state.addressError ? "Acceptable format is X9X-9X9" : ""} </p>
          <p style={styles.searchHeading}>Search for reviews by Postal Code</p>
          {spinner}
          {emptyResultsText}
        <div style={{ width:"100%"}}>{cards}</div>
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
  },
  noResultsStyle:{
    color:"rgb(255,89,65)",
    fontSize:20,
    fontWeight:"bold",
    fontFamily:"Fira Sans, sans serif"
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
