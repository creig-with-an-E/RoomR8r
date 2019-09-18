import React, { Component } from "react";
import {connect} from "react-redux"
import Router from "next/router"
import {parseCookies} from "../lib/parseCookies"

import {ReviewCard, Layout, Spinner, SearchBar } from "../src/components"
import * as appActions from "../store/actions/appActions"
import * as authActions from "../store/actions/authActions"
import classes from "../static/css/style.css"

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
      const addDash = input.length===3 ? `${input.slice(0,3)} ${input.slice(3)}`:input
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
        if(element === " "){
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
        <section style={styles.sectionStyle} className={classes.sectionStyle}>
        <h2 className={classes.headerStyle}>
            Because not all landlords are built the same
          </h2>
          <h3 className={classes.secondaryHeader}><i className="fa fa-home fa-2x" style={{color:"#FF5941"}}/> WARMING or <i class="fa fa-home fa-2x"></i> <span className={classes.highlightText}>WARNING</span> ?</h3>
          <SearchBar
            style={{backgroundColor:"#FF5941",color:"#fffffa"}}
            invalid={this.state.addressError ? true : false}
            placeholder="X5X X5X"
            value={this.state.address}
            onChange={this.onAddressChangeHandler}
            onRequestSearch={this.searchByAddressHandler}
          />
          <p className={classes.errorStyle}> {this.state.addressError ? "Acceptable format is X9X-9X9" : ""} </p>
          <p className={classes.searchHeading}>Search for reviews by Postal Code</p>
          {spinner}
          {emptyResultsText}
        <div style={{ width:"100%"}}>{cards}</div>
        </section>            
      </Layout>
    );
  }
}

const styles = {
  sectionStyle:{
    overflowY:"scroll",
    alignSelf:"center",
    // marginTop:"5px",
    // padding: "20px",
    // textAlign: "center",
    // width:"60%",
    // backgroundColor: "rgba(44,54,94,.1)",
  },
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
