import React,{Component} from 'react';

import {SearchBar} from "../components"

class GoogleMapsSearchBar extends Component{

  handleScriptLoad=()=>{
    /***loads google script on load */
    // Declare Options For Autocomplete
    options = {
      // types: ['(cities)'],
    };
    // Initialize Google Autocomplete
     this.autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );
    
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components.
    autocomplete.setFields(['address_components']);
    
    // Fire Event when a suggested name is selected
    autocomplete.addListener('place_changed', handlePlaceSelect);
    }
    
  handlePlaceSelect=()=>{
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
  state ={
      address:""
  }
  onChangeHandler=(input)=>{
    this.setState({address:input})
  }

  render(){
    return(
      <div>
        <SearchBar
          style={{backgroundColor:"#ddd"}}
          id="autocomplete"
          onChange={this.onChangeHandler}
          placeholder="X5X-X5X"
          value={this.state.address}
        />
      </div>)
  }
}

export default GoogleMapsSearchBar