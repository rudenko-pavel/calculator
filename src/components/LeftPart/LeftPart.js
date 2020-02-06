import "./LeftPart.scss";

import React, { Component } from "react";
import ReactDOM from "react-dom";
import { connect } from "react-redux";

import { setDownPayment, setPropertyValue, setRent } from "../../actions";
// import InputField from "../InputField/InputField";

class LeftPart extends Component {
  state = {
    rentValue: 100,
    propertyValue: 200,
    downPayment: 300
  };

  componentDidMount(){
    ReactDOM.render(this.state.rentValue, document.getElementById("rentValue"));
    ReactDOM.render(this.state.propertyValue, document.getElementById("propertyValue"));
    ReactDOM.render(this.state.downPayment, document.getElementById("downPayment"));
}

  onInputChange = event => {
    let resultSum = parseInt(this.state.rentValue) + parseInt(this.state.propertyValue) + parseInt(this.state.downPayment);
    switch (event.target.name) {
      case "rentValue":
        this.setState({ rentValue: event.target.value });
        resultSum = parseInt(event.target.value) + parseInt(this.state.propertyValue) + parseInt(this.state.downPayment);
        break;
      case "propertyValue":
        this.setState({ propertyValue: event.target.value });
        resultSum = parseInt(this.state.rentValue) + parseInt(event.target.value) + parseInt(this.state.downPayment);
        break;
      case "downPayment":
        this.setState({ downPayment: event.target.value });
        resultSum = parseInt(this.state.rentValue) + parseInt(this.state.propertyValue) + parseInt(event.target.value);
        break;
      default:
        return null;
    }

    ReactDOM.render(event.target.value, document.getElementById(event.target.name));
    ReactDOM.render(resultSum, document.getElementById("result"));
  };

  render() {
    return (
      <div className="LeftPart">
        <form className="ui form">
          <div>
            <h3>Rent</h3>
            <p>
              Indicate the amount of your current or projected monthly rent.
            </p>
            <div className="inputField field">
              <input
                type="text"
                autoComplete="off"
                name="rentValue"
                value={this.state.rentValue}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div>
            <h3>Property Value</h3>
            <p>Indicate the value of the property you are looking to buy.</p>
            <div className="inputField field">
              <input
                type="text"
                autoComplete="off"
                name="propertyValue"
                value={this.state.propertyValue}
                onChange={this.onInputChange}
              />
            </div>
          </div>
          <div>
            <h3>Down Payment</h3>
            <p>
              Indicate how much you could pay for your down payment. Loans with
              a down payment of less than 20% of property value will require
              loan-insurance with CMHC or Genworth.
            </p>
            <div className="inputField field">
              <input
                type="text"
                autoComplete="off"
                name="downPayment"
                value={this.state.downPayment}
                onChange={this.onInputChange}
              />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    rentValue: state.rentValue,
    propertyValue: state.propertyValue,
    downPayment: state.downPayment
  };
};

export default connect(mapStateToProps, {
  setRent,
  setPropertyValue,
  setDownPayment
})(LeftPart);
