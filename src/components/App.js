import "./App.scss";

import React from "react";

import LeftPart from "./LeftPart/LeftPart";
import RightPart from "./RightPart/RightPart";

class App extends React.Component {
  render() {
    return (
      <div className="ui container grid App">
        <div className="ui row">
          <div className="column ten wide">
            <LeftPart />
          </div>
          <div className="column six wide">
            <RightPart />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
