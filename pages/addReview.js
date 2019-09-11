import React from 'react';
import {Layout, SearchBar} from "../src/components"

import Stepper from "../src/stepper"
import Modal from "../src/modal/addReviewForm"
import Script from "react-load-script"

import * as googleMapsFunctions from "../lib/googlePlaceFunctions"

class addReview extends React.Component{
    render(){
      return(
        <Layout>
          <div>
            <Stepper>
            </Stepper>
          </div>
        </Layout>
      )
    }
}

export default addReview