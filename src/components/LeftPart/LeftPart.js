import "./LeftPart.scss";

import React from "react";
import { connect } from "react-redux";

import { setDownPayment, setPropertyValue, setRent } from "../../actions";

class LeftPart extends React.Component {
  handleChangeRent(event) {
    this.props.setRent(event.target.value);
    console.log("handleChangeRent(): ", event.target.value);
  }

  handleChangePropertyValue(event) {
    this.props.setPropertyValue(event.target.value);
    console.log("handleChangePropertyValue(): ", event.target.value);
  }

  handleChangeSetDownPayment(event) {
    this.props.setDownPayment(event.target.value);
    console.log("handleChangeAge(): ", event.target.value);
  }

  render() {
    const rentValue = this.rentValue;
    const propertyValue = this.propertyValue;
    const downPayment  = this.downPayment;

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
                onChange={this.handleChangeRent.bind(this)}
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
                onChange={this.handleChangePropertyValue.bind(this)}
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
                onChange={this.handleChangeSetDownPayment.bind(this)}
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
