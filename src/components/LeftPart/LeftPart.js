import "./LeftPart.scss";

import React from "react";
import { connect } from "react-redux";

import { setDownPayment, setPropertyValue, setRent } from "../../actions";
// import InputField from "../InputField/InputField";

class LeftPart extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.props.onInputChange(event.target.value, event.target.name);
  }

  render() {
    // console.log("LeftPart: ", this.props.values);
    const { rentValue } = this.props.values;
    const { propertyValue } = this.props.values;
    const { downPayment } = this.props.values;
    return (
      <div className="LeftPart">
        <form className="ui form">
          <div>
            <h3>Rent</h3>
            <div className="inputField field">
              <input
                type="text"
                autoComplete="off"
                name="rentValue"
                value={rentValue}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <h3>Property Value</h3>
            <div className="inputField field">
              <input
                type="text"
                autoComplete="off"
                name="propertyValue"
                value={propertyValue}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div>
            <h3>Down Payment</h3>
            <div className="inputField field">
              <input
                type="text"
                autoComplete="off"
                name="downPayment"
                value={downPayment}
                onChange={this.handleChange}
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
