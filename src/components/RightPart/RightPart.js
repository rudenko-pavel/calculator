import "./RightPart.scss";

import React from "react";
import { connect } from "react-redux";

import { setDownPayment, setPropertyValue, setRent } from "../../actions";

class RightPart extends React.Component {
  sumFunc = () => {
    const result = "a + b + с";
    return result;
  };

  render() {
    const rentValue = this.props.rentValue.rentValue;
    const propertyValue = this.props.propertyValue.propertyValue;
    const downPayment = this.props.downPayment.downPayment;
    return (
      <div className="RightPart">
        <div>Rent: {rentValue}</div>
        <div>Property Value: {propertyValue}</div>
        <div> Down Payment: {downPayment} </div>
        <hr />
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
})(RightPart);
