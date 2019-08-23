import React, { Component } from "react";
import Spinner from "../src/components/spinner";
import Layout from "../src/components/layout"
import {connect} from "react-redux"
import Router from "next/router"
import Card from "../src/components/card"

import * as appActions from "../store/actions/appActions"

import SearchBar from "../src/components/searchBar";
import Modal from "../src/components/modal"

class App extends Component {
  componentDidMount(){
    !this.props.userToken? Router.push("/login") : null
  }
  state = {
    address: "",
    modalVisible: false
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
    const cards = this.props.searchResults.map(element=><Card data={element} key={element.id} />)
    const spinner = !this.props.loading ? null : <Spinner />;
    return (
      <Layout showModalHandle={this.showModalHandle}>
        {/* showModal passed to layout then to toolbar */}
        <Modal modalVisible={this.state.modalVisible}
            hideModalHandle={this.hideModalHandle}  />
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
          />
          {spinner}
        </div>            
        { cards.length !== 0 ? <div style={{overflowY:"scroll", width:"100%"}}>{cards}</div>: null}
      </Layout>
    );
  }
}

const styles = {
  headerStyle:{
    color: "#2C365E", 
    textAlign: "center",
    fontFamily:'Fira Sans, sans-serif',
    fontWeight:"bold"
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
    findByAddress:(userToken,address)=>dispatch(appActions.findReviewByAddress(userToken,address))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
