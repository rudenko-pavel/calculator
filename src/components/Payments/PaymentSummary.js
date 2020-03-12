import "./Payments.scss";

import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";

import configPayments from "../../configs/configPayments";

const PaymentSummary = props => {
  const { payment } = props;
  const { paymentSummary } = configPayments;
  return (
    <Card style={{ width: 300 }}>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[0]} : </Col>
        <Col span={10}>{payment.loanAmount}</Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[1]} : </Col>
        <Col span={10}>{payment.principalAndInterest}</Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[2]} : </Col>
        <Col span={10}>{payment.tax}</Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[3]} : </Col>
        <Col span={10}>{payment.insurance}</Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[4]} : </Col>
        <Col span={10}>{payment.total}</Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[5]} : </Col>
        <Col span={10}>{payment.termMonths}</Col>
      </Row>
    </Card>
  );
};

export default PaymentSummary;

PaymentSummary.propTypes = {
  payment: PropTypes.object.isRequired
};
