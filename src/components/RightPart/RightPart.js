/* eslint-disable react/prop-types */
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
    const { base } = this.props;
    const { rentValue } = base;
    const { propertyValue } = base;
    const { downPayment } = base;
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
    base: state.base
  };
};

export default connect(mapStateToProps, {
  setRent,
  setPropertyValue,
  setDownPayment
})(RightPart);
