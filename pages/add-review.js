import React from 'react';
import {Layout} from "../src/components"

import Stepper from "../src/stepper"

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