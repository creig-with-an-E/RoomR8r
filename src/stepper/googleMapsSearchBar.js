import React,{Component} from 'react';

import {SearchBar} from "../components"
import Script from "react-load-script"
import * as googleMapsFunctions from "../../lib/googlePlaceFunctions"


class GoogleMapsSearchBar extends Component{
  onChangeHandler=(input)=>{
    this.setState({address:input})
  }

  render(){
    return(
      <div>
        <Script
          url="https://maps.googleapis.com/maps/api/js?key=AIzaSyBWcDVGfs8R5EmWbh9xsuYEHycoqDyDf9I&libraries=places"
          onLoad={googleMapsFunctions.handleScriptLoad}
        />
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