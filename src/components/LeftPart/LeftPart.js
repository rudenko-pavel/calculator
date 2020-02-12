/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./LeftPart.scss";

import React from "react";
import { connect } from "react-redux";

import { setDownPayment, setPropertyValue, setRent } from "../../actions";

class LeftPart extends React.Component {
  render() {
    const { rentValue, propertyValue, downPayment } = this;
    const { setDownPayment, setPropertyValue, setRent } = this.props;

    return (
      <div className="LeftPart">
        <form className="ui form">
          <div>
            <h3>Rent</h3>
            <div className="inputField ui labeled input">
              <label htmlFor="rentValue" className="ui label">
                $
              </label>
              <input
                type="text"
                autoComplete="off"
                name="rentValue"
                id="rentValue"
                value={rentValue}
                onChange={e => setRent(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h3>Property Value</h3>
            <div className="inputField ui labeled input">
              <label htmlFor="propertyValue" className="ui label">
                $
              </label>
              <input
                type="text"
                autoComplete="off"
                name="propertyValue"
                id="propertyValue"
                value={propertyValue}
                onChange={e => setPropertyValue(e.target.value)}
              />
            </div>
          </div>
          <div>
            <h3>Down Payment</h3>
            <div className="inputField  ui labeled input">
              <label htmlFor="downPayment" className="ui label">
                $
              </label>
              <input
                type="text"
                autoComplete="off"
                name="downPayment"
                id="downPayment"
                value={downPayment}
                onChange={e => setDownPayment(e.target.value)}
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
    base: state.base
  };
};

export default connect(mapStateToProps, {
  setRent,
  setPropertyValue,
  setDownPayment
})(LeftPart);
