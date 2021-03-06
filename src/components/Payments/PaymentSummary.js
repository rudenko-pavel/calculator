import "./Payments.scss";

import { Card, Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";

import configPayments from "../../configs/configPayments";

const PaymentSummary = props => {
  const { payment } = props;
  const { paymentSummary } = configPayments;
  return (
    <Card style={{ width: 350, margin: "auto" }}>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[0]} : </Col>
        <Col span={10}>
          {payment.loanAmount.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
        </Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[1]} : </Col>
        <Col span={10}>
          {payment.principalAndInterest.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
        </Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[2]} : </Col>
        <Col span={10}>{`${payment.tax.toLocaleString("en-US", {
          style: "currency",
          currency: "USD"
        })} /year`}</Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[3]} : </Col>
        <Col span={10}>{payment.insurance}</Col>
      </Row>
      <Row className="txt-right">
        <Col span={14}>{paymentSummary[4]} : </Col>
        <Col span={10}>
          {payment.total.toLocaleString("en-US", {
            style: "currency",
            currency: "USD"
          })}
        </Col>
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
  // eslint-disable-next-line react/forbid-prop-types
  payment: PropTypes.object.isRequired
};
