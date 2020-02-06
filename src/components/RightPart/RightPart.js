import "./RightPart.scss";

import React, { Component } from "react";

class RightPart extends Component {
  render() {
    return (
      <div className="RightPart">
        <div>
          Rent: <span id="rentValue"></span>
        </div>
        <div>
          Property Value: <span id="propertyValue"></span>
        </div>
        <div>
          Down Payment: <span id="downPayment"></span>
        </div>
        <div>
          RESULT: <span id="result"></span>
        </div>
      </div>
    );
  }
}
export default RightPart;
