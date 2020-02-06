import "./App.scss";

import React from "react";

import LeftPart from "./LeftPart/LeftPart";
import RightPart from "./RightPart/RightPart";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.state = { rentValue: 200, propertyValue: 300, downPayment: 400 };
  }

  handleInputChange(value, el) {
    if (value === "") value = 0;
    switch (el) {
      case "rentValue":
        this.setState({ rentValue: parseInt(value) });
        break;
      case "propertyValue":
        this.setState({ propertyValue: parseInt(value) });
        break;
      case "downPayment":
        this.setState({ downPayment: parseInt(value) });
        break;
      default:
        return null;
    }
  }

  render() {
    return (
      <div className="ui container grid App">
        <div className="ui row">
          <div className="column ten wide">
            <LeftPart
              values={this.state}
              onInputChange={this.handleInputChange}
            />
          </div>
          <div className="column six wide">
            <RightPart values={this.state} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
