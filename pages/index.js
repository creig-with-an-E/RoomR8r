import React, { Component } from "react";
import Spinner from "../src/components/spinner";
import ReviewCard from "../src/components/reviewCard"
import Toolbar from "../src/components/toolbar"

import axios from "axios";
import {connect} from "react-redux"
import Router from "next/router"

import SearchBar from "material-ui-search-bar";
class App extends Component {
  componentDidMount(){
    !this.props.userToken? Router.push("/login") : null
  }
  state = {
    address: "",
    loading: null,
    data: []
  };

  onAddressChangeHandler = input => {
    //handles user input and stores in local state
    this.setState({
      address: input.toUpperCase()
    });
  };

  searchHandler = event => {
    this.setState({ loading: true });
    axios.get(`https://accomo-rater.firebaseio.com/landlord_data.json?auth=${this.props.userToken}&orderBy="postal_code"&startAt="${this.state.address}"&endAt="${this.state.address}"`)
      .then(response=>{
        const arrayData= Object.keys(response.data).map(key=>{
           return {...response.data[key],id:key}
        })
        this.setState({
          loading:false,
          data: arrayData
        })
      }).catch(error=>{
        this.setState({loading:false})
      })
  }

  render() {
    const cards = this.state.data.map(element=><ReviewCard data={element} key={element.id} />)
    const spinner = !this.state.loading ? null : <Spinner />;
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
            onRequestSearch={this.searchHandler}
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
    userToken: state.auth.userToken
  }
}

export default connect(mapStateToProps)(App);
