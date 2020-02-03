import "./App.scss";

import React from "react";

import LeftPart from "./LeftPart";
import RightPart from "./RightPart";

const App = () => {
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
};

export default App;
