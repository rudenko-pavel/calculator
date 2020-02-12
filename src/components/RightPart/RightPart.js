/* eslint-disable react/prop-types */
import { Card, Col, Row } from "antd";
import React from "react";
import { connect } from "react-redux";

import { setDownPayment, setPropertyValue, setRent } from "../../actions";
import styles from "./RightPart.scss";

class RightPart extends React.Component {
  sumFunc = () => {
    const result = "a + b + с";
    return result;
  };

  render() {
    const { base } = this.props;
    const { rentValue } = base;
    const { propertyValue } = base;
    const { downPayment } = base;
    return (
      <div className="RightPart">
        <Card title="MONTHLY PAYMENTS">
          <Row>
            <Col span={8}>&nbsp;</Col>
            <Col span={8}>RENT</Col>
            <Col span={8}>BUY</Col>
          </Row>
          <Row>
            <Col span={8}>Rent or Mortgage</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={8}>Property expenses</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={8}>Monthly savings</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
          <Row>
            <Col span={8} className="caption">Total</Col>
            <Col span={8}>col-8</Col>
            <Col span={8}>col-8</Col>
          </Row>
        </Card>
        <div>Rent: {rentValue}</div>
        <div>Property Value: {propertyValue}</div>
        <div> Down Payment: {downPayment} </div>
        <hr />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    base: state.base
  };
};

export default connect(mapStateToProps, {
  setRent,
  setPropertyValue,
  setDownPayment
})(RightPart);
