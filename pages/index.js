import React, { Component } from "react";
import {connect} from "react-redux"
import Router from "next/router"
import {ReviewCard, Layout, Spinner, SearchBar } from "../src/components"
import AddReviewForm from "../src/modal/addReviewForm"
import * as appActions from "../store/actions/appActions"

class App extends Component {
  componentDidMount(){
    !this.props.userToken? Router.push("/login") : null
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
        <div
          style={{
            alignSelf:"center",
            marginTop:"5px",
            padding: "20px",
            width: "380px",
            textAlign: "center",
          }}
        >
          <SearchBar
            placeholder="search by post code"
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
    fontSize: 26,
    color: "rgb(44,54,94)", 
    textAlign: "center",
    fontFamily:'Lexend Tera, sans-serif',
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
