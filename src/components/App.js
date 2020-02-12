import "./App.scss";

import { Col, Row  } from "antd";
import React from "react";

import LeftPart from "./LeftPart/LeftPart";
import RightPart from "./RightPart/RightPart";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col span={14}>
            <LeftPart />
          </Col>
          <Col span={10}>
            <RightPart />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;
