import React,{Component} from "react"

class googlePlaceFunctions extends Component {
  state={
    address:{}
  }

  static handleScriptLoad=()=>{
    /***loads google script on load */
    // Declare Options For Autocomplete
    const options = {
      // types: ['(cities)'],
      componentRestrictions: {country: 'ca'}
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
    autocomplete.addListener('place_changed', ()=>this.constructor.handlePlaceSelect(autocomplete))
    }
    
  handlePlaceSelect=(autocomplete)=>{
    // Extract City From Address Object
    let addressObject = autocomplete.getPlace();
    let address = addressObject.address_components;
    
    // Check if address is valid
    if (address) {
      this.setState(
      {
        // city: address[0].long_name,
        address: address,
      }
      );

    }
    }
}

export default googlePlaceFunctions