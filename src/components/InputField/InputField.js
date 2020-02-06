import "./InputField.scss";

import React, { Component } from "react";
//import { connect } from "react-redux";

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

  render() {
    console.log("InputField(): ", this.props);
    return (
      <div className="inputField field">
        <input
          type="text"
          autoComplete="off"
          name={this.props.name}
          value={this.props.val}
          onChange={this.onInputChange}
        />
      </div>
    );
  }
}

export default InputField;
