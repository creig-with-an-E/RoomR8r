import React, { Component } from "react";
import Spinner from "../src/components/spinner";
import ReviewCard from "../src/components/reviewCard"
import Toolbar from "../src/components/toolbar"

import {connect} from "react-redux"
import Router from "next/router"
import * as appActions from "../store/actions/appActions"

import SearchBar from "material-ui-search-bar";
class App extends Component {
  componentDidMount(){
    !this.props.userToken? Router.push("/login") : null
  }
  state = {
    address: ""
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

  render() {
    const cards = this.props.searchResults.map(element=><ReviewCard data={element} key={element.id} />)
    const spinner = !this.props.loading ? null : <Spinner />;
    return (
      <div style={styles.containerStyle}>
        <Toolbar />
        <div style={{marginTop:"60px"}}>
          <h2 style={styles.headerStyle}>
            Because not all landlords are built the same
          </h2>
        </div>
        <div
          style={{
            marginTop:"5px",
            padding: "20px",
            width: "60%",
            textAlign: "center",
          }}
        >
          <SearchBar
            placeholder="Enter address"
            value={this.state.address}
            onChange={this.onAddressChangeHandler}
            onRequestSearch={this.searchByAddressHandler}
            style={styles.searchbarStyle}
          />
          {spinner}
        </div>            
        { cards.length !== 0 ? <div style={{overflowY:"scroll", width:"100%"}}>{cards}</div>: null}
      </div>
    );
  }
}

const styles = {
  containerStyle: {
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    height: "100vh",
    justifyContent: "center",
    backgroundColor: "#fffffa"
  },
  headerStyle:{
    color: "#2C365E", 
    textAlign: "center",
    fontFamily:'Fira Sans, sans-serif',
    fontWeight:"bold"
  },
  searchbarStyle:{
    margin: "0 auto",
    maxWidth: 600,
    padding: 7,
    boxShadow: '1px 3px 6px 2px rgba(44,54,94,0.6)'  
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
    findByAddress:(userToken,address)=>dispatch(appActions.findReviewByAddress(userToken,address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
