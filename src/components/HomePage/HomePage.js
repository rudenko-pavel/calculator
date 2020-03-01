import "./HomePage.scss";

import { Col, Row } from "antd";
import React from "react";

import LeftPart from "../LeftPart/LeftPart";
import RightPart from "../RightPart/RightPart";

class HomePage extends React.Component {
  render() {
    return (
      <div className="HomePage">
        <Row>
          <Col lg={14} md={14} sm={24}>
            <LeftPart />
          </Col>
          <Col lg={10} md={10} sm={24}>
            <RightPart />
          </Col>
        </Row>
      </div>
    );
  }
}

export default HomePage;