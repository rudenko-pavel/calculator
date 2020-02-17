import "./App.scss";

import { BackTop, Col, Row } from "antd";
import React from "react";

import LeftPart from "./LeftPart/LeftPart";
import RightPart from "./RightPart/RightPart";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Row>
          <Col lg={14} md={14} sm={24}>
            <LeftPart />
          </Col>
          <Col lg={10} md={10} sm={24}>
            <RightPart />
          </Col>
        </Row>
        <BackTop visibilityHeight={100}>
          <div className="ant-back-top-inner">UP</div>
        </BackTop>
      </div>
    );
  }
}

export default App;
