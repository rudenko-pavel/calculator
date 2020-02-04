import "./InputField.scss";

import React, { Component } from "react";
import { connect } from "react-redux";

import { getDownPayment, getPropertyValue, getRentValue } from "../actions";

class InputField extends Component {
  state = {
    rentValue: this.props.rentValue,
    propertyValue: this.props.propertyValue,
    downPayment: this.props.downPayment
  };

  onInputChange = event => {
    this.setState({ rentValue: event.target.value });
    console.log("onInputChange: ",this.props.name, " - ", this.state);
  };

  getCurrentValue = () => {
    switch (this.props.name) {
      case "rent":
        return this.state.rentValue;
      case "propertyValue":
        return this.state.propertyValue;
      case "downPayment":
        return this.state.downPayment;
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="inputField">
        <form className="ui form">
          <div className="field">
            <input
              type="text"
              autoComplete="off"
              value={this.getCurrentValue()}
              onChange={this.onInputChange}
            />
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
  getRentValue,
  getPropertyValue,
  getDownPayment
})(InputField);
