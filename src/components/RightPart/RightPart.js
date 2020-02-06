import "./RightPart.scss";

import React, { Component } from "react";

class RightPart extends Component {
  sumFunc = () => {
    const a = this.props.values.rentValue;
    const b = this.props.values.propertyValue;
    const с = this.props.values.downPayment;

    const result = a + b + с;
    return result;
  };

  render() {
    // console.log("RightPart: ", this.props.values);
    const rentValue = this.props.values.rentValue;
    const propertyValue = this.props.values.propertyValue;
    const downPayment = this.props.values.downPayment;
    return (
      <div className="RightPart">
        <div>Rent: {rentValue}</div>
        <div>Property Value: {propertyValue}</div>
        <div>Down Payment: {downPayment}</div>
        <div>
          RESULT: <span id="result">{this.sumFunc()}</span>
        </div>
      </div>
    );
  }
}
export default RightPart;
