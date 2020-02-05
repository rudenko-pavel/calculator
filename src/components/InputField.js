import "./InputField.scss";

import React, { Component } from "react";
import { connect } from "react-redux";

class InputField extends Component {
  state = { 
    rentValue: this.props.rentValue,
    propertyValue: this.props.propertyValue,
    downPayment: this.props.downPayment
  };

  onInputChange = event => {
    switch (this.props.name) {
      case "rentValue":
        this.setState({ rentValue: event.target.value });
        break;
      case "propertyValue":
        this.setState({ propertyValue: event.target.value });
        break;
      case "downPayment":
        this.setState({ downPayment: event.target.value });
        break;
      default:
        return null;
    }
  };

  getCurrentValue = () => {
    switch (this.props.name) {
      case "rentValue":
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
    console.log("InputField(): ", this.state);
    return (
      <div className="inputField field">
        <input
          type="text"
          autoComplete="off"
          name={this.props.name}
          value={this.getCurrentValue()}
          onChange={this.onInputChange}
        />
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

export default connect(mapStateToProps, {})(InputField);
