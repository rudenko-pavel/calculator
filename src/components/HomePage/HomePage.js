import "./HomePage.scss";

import { Col, Row } from "antd";
import React from "react";

import LeftPart from "../LeftPart/LeftPart";
import RightPart from "../RightPart/RightPart";

const HomePage = () => {
  return (
    <div className="HomePage">
      <Row>
        <Col lg={14} md={24} sm={24} className="ant-col-24">
          <LeftPart />
        </Col>
        <Col lg={10} className="onlyWeb">
          <RightPart />
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
