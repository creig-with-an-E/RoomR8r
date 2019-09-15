import React,{Component} from 'react';

import {SearchBar} from "../../components"
import Script from "react-load-script"
import {connect} from "react-redux"
import Router from "next/router"

import {setAddress,resetApplicationState} from "../../../store/actions/appActions"

class GoogleMapsSearchBar extends Component{
  constructor(props){
    super(props)
    this.state={
      queryString:"",
    }
    this.props.resetState()
  }
  componentDidMount(){
    if(!this.props.userToken){
      Router.replace("/auth")
      return
    }
    if(this.props.addressData){
      const {street_number, city, province} =this.props.addressData
      this.setState({
        queryString:`${street_number},${city},${province}`
      })
    }
  }

  componentDidUpdate(prevProps,prevState){
    // return
    if(this.props.addressData !== prevProps.addressData){
      const {street_number, city, province} =this.props.addressData
      this.setState({
        address: this.props.addressData,
        queryString:`${street_number},${city},${province}`
      })
    }
  }

  /******start of google maps functions */
  handleScriptLoad=()=>{
    /***loads google script on load and 
     * declares the options for autocomplete */
    const options = {
      // types: ['(cities)'],
      componentRestrictions: {country: 'ca'}  //setting results to canada
    };
    // Initialize Google Autocomplete
     const autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );
    
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields(['address_components']);
    
    // Fire Event when a suggested name is selected
    autocomplete.addListener('place_changed', ()=>this.handlePlaceSelect(autocomplete))
    }
    
  handlePlaceSelect=(autocomplete)=>{
    // Extract City From Address Object
    let addressObject = autocomplete.getPlace();
    let address = addressObject.address_components;
    
    // Check if address is valid
    if (address) {
      this.props.setAddressData(address)
    }
  }
  /** end of google maps functions ************/

  onChangeHandler=(input, name=null)=>{
    /** handles the input change in search bar*/ 
    this.setState({queryString:input})
  }

  render(){
    return(
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWcDVGfs8R5EmWbh9xsuYEHycoqDyDf9I&libraries=places"
          onLoad={this.handleScriptLoad}
        />
        <SearchBar
          style={styles.searchBar}
          id="autocomplete"
          onChange={this.onChangeHandler}
          placeholder="X5X-X5X"
          value={this.state.queryString}
        />
      </div>)
  }
}

const mapStateToProps=(state)=>{
  return{
    addressData: state.app.stepperFormData.addressData,
    userToken: state.auth.userToken
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    setAddressData:(address)=>dispatch(setAddress(address)),
    resetState:()=>dispatch(resetApplicationState())
  }
}

const styles ={
  searchBar:{
    backgroundColor:"#fffffa",
    width:"320px"
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(GoogleMapsSearchBar)