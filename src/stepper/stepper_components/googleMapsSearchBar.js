import React,{Component} from 'react';

import {SearchBar} from "../../components"
import Script from "react-load-script"
import {connect} from "react-redux"

import {setAddress} from "../../../store/actions/appActions"

class GoogleMapsSearchBar extends Component{
  constructor(props){
    super(props)
    this.state={
      queryString:"",
    }
  }
  componentDidMount(){
    if(this.props.addressData){
      const {addressData} =this.props
      this.setState({
        queryString:`${addressData[0].long_name} ${addressData[1].long_name}, ${addressData[2].long_name}, ${addressData[4].long_name}`
      })
    }
  }

  componentDidUpdate(prevProps,prevState){
    if(this.props.addressData !== prevProps.addressData){
      const {addressData} =this.props
      this.setState({
        address: addressData,
        queryString:`${addressData[0].long_name} ${addressData[1].long_name}, ${addressData[2].long_name}, ${addressData[4].long_name}`
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
    addressData: state.app.addressData
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{
    setAddressData:(address)=>dispatch(setAddress(address))
  }
}

const styles ={
  searchBar:{
    backgroundColor:"#fffffa",
    width:"320px"
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(GoogleMapsSearchBar)