import "./LeftPart.scss";

import React, { Component } from "react";
import { connect } from "react-redux";

import { setDownPayment, setPropertyValue, setRent } from "../actions";
import InputField from "./InputField";

class LeftPart extends Component {
  render() {
    return (
      <div className="LeftPart">
        <form className="ui form">
          <div>
            <h3>Rent</h3>
            <p>
              Indicate the amount of your current or projected monthly rent.
            </p>
            <InputField name="rentValue" />
          </div>
          <div>
            <h3>Property Value</h3>
            <p>Indicate the value of the property you are looking to buy.</p>
            <InputField name="propertyValue" />
          </div>
          <div>
            <h3>Down Payment</h3>
            <p>
              Indicate how much you could pay for your down payment. Loans with
              a down payment of less than 20% of property value will require
              loan-insurance with CMHC or Genworth.
            </p>
            <InputField name="downPayment" />
          </div>
        </form>
      </div>
    );
  }
}

export default connect(null, {
  setRent,
  setPropertyValue,
  setDownPayment
})(LeftPart);
