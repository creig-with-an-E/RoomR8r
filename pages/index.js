import React,{ Component } from "react";
import Spinner from "../src/components/spinner"
import axios from "axios"

class App extends Component {
  state = {
    address: "",
    loading:null
  };

  onAddressChangeHandler = event => {
    this.setState({
      address: event.target.value
    });
  };

  searchHandler = event => {
    event.preventDefault();
    this.setState({loading:true})
    axios.get(`https://maps.googleapis.com/maps/api/js?key=${"AIzaSyDY95FpDC9eJ3W5gZrZrvcAH3zVirelFzI"}&libraries=places`)
  };
  render() {
    const button = !this.state.loading ? <input type="submit" value="Find Now" style={styles.searchButton}/> : <Spinner />
    return (
      <div style={styles.containerStyle}>
        <div>
          <h1 style={{color: "#E2E1E1", textAlign:"center"}}>
            Find out about your potential landlord by address
          </h1>
        </div>
        <div
          style={{
            display: "block",
            padding: "20px",
            width: "60%",
            textAlign: "center",
          }}
        >
          <form onSubmit={this.searchHandler} >
            <input
              style={styles.inputStyle}
              type="text"
              name="address"
              placeholder="3 example street"
              onChange={this.onAddressChangeHandler}
              value={this.state.address}
            />

            {/* button rendered based on loading state */}
            {button}
          </form>
        </div>
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
    backgroundColor: "#1a1a1a"
  },
  inputStyle: {
    width: "80%",
    height: "100%",
    padding: "20px",
    textAlign: "center",
    fontSize: "16px",
    borderRadius: "5px"
  },
  searchButton:{
    width: "35%",
    textAlign:"center",
    padding: "20px",
    marginTop: "15px",
    backgroundColor:"#AF003D",
    border:0,
    color:"#E2E1E1",
    borderRadius: "2%",
    fontWeight: 'bold',
    fontSize:15,
  }
};

export default App;
