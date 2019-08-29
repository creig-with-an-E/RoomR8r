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
      Router.push("/auth")
    }else{
      this.props.updateSavedToken(this.props.savedToken)
    }
  }

  state = {
    address: "",
    modalVisible: false,
    startingUp: true
  };

  onAddressChangeHandler = input => {
    //handles user input and stores in local state
    this.setState({
      address: input.toUpperCase()
    });
  };

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
        <div style={{marginTop:"60px"}}>
          <h2 style={styles.headerStyle}>
            Because not all landlords are built the same
          </h2>
        </div>
        <section style={styles.sectionStyle}>
          <SearchBar
            placeholder="X5X-X5X"
            value={this.state.address}
            onChange={this.onAddressChangeHandler}
            onRequestSearch={this.searchByAddressHandler}
          />
          <p style={styles.searchHeading}>Search for reviews by Postal Code</p>
          {spinner}
        </section>            
        { cards.length !== 0 ? <div style={{overflowY:"scroll", width:"100%"}}>{cards}</div>: null}
      </Layout>
    );
  }
}

const styles = {
  headerStyle:{
    fontSize: 24,
    color: "rgb(44,54,94)", 
    textAlign: "center",
    fontFamily:'Lexend Tera, sans-serif',
    fontWeight:"bold"
  },
  sectionStyle:{
    alignSelf:"center",
    marginTop:"5px",
    padding: "20px",
    width: "380px",
    textAlign: "center",
  },
  searchHeading:{
    fontSize:16,
    marginTop:20,
    color: "rgb(44,54,94)", 
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
