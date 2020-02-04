import "./LeftPart.scss";

import React, { Component } from "react";
import { connect } from "react-redux";

import { getDownPayment, getPropertyValue, getRentValue } from "../actions";

class LeftPart extends Component {
  getCurrentValue = curVal => {
    switch (curVal) {
      case "isRent":
        return "isRent";
      case "isPropertyValue":
        return "isPropertyValue";
      case "isDownPayment":
        return "isDownPayment";
      default:
        return null;
    }
  };

  render() {
    return (
      <div className="LeftPart">
        <div>isRent: {this.props.rentValue}</div>
        <div>isPropertyValue:{this.props.propertyValue} </div>
        <div>isDownPayment: {this.props.downPayment}</div>
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
})(LeftPart);
