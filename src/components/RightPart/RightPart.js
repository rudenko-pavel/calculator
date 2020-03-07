import "./RightPart.scss";

import { Button, Card, Col, Divider, Drawer, Row, Typography } from "antd";
import React, { useState } from "react";

import { resetValues } from "../../actions";
import configTFE from "../../configs/configTextForElements";
import { initialState } from "../../reducers/baseReducer";
import ShowDataLogic from "./ShowDataLogic";

const RightPart = () => {
  const iState = initialState;
  console.log("initialState: ", iState);
  const {
    amortizationValue,
    mortgageRateValue,
    rentValue,
    propertyValue,
    downPaymentValue,
    amountAnnualTaxesValue,
    annualHeatingCostsValue,
    buyingHomeValue,
    sellingHomeValue,
    maintenanceValue,
    ownerInsuranceValue,
    rentersInsuranceValue,
    rentMonthlyCostsValue,
    rateOfGrowthValue,
    returnInvestmentValue
  } = iState;

  const [visiblePanel, toggleDrawer] = useState(false);
  const { buttons } = configTFE;

  return (
    <div className="RightPart">
      <Card title="monthly payments" className="table-money div-wrapper">
        <Row>
          <Col span={10}>&nbsp;</Col>
          <Col span={7}>RENT</Col>
          <Col span={7}>BUY</Col>
        </Row>
        <Row>
          <Col span={10}>Rent or Mortgage</Col>
          <Col span={7}>{new Intl.NumberFormat().format(rentValue.val)}</Col>
          <Col span={7}>col-8</Col>
        </Row>
        <Row>
          <Col span={10}>Property expenses</Col>
          <Col span={7}>col-8</Col>
          <Col span={7}>col-8</Col>
        </Row>
        <Row>
          <Col span={10}>Monthly savings</Col>
          <Col span={7}>col-8</Col>
          <Col span={7}>col-8</Col>
        </Row>
        <Row>
          <Col span={10} className="caption">
            Total
          </Col>
          <Col span={7}>col-8</Col>
          <Col span={7}>col-8</Col>
        </Row>
      </Card>
      <Divider dashed />
      <Button type="primary" onClick={() => resetValues([])}>
        {buttons.resetValues.btn1.text}
      </Button>
      <Button
        type="primary"
        className="show-selected-data"
        onClick={() => toggleDrawer(!visiblePanel)}
      >
        {buttons.commonButtons.showSelectedData.text}
      </Button>
      <Drawer
        placement="right"
        closable={false}
        onClose={() => toggleDrawer(!visiblePanel)}
        visible={visiblePanel}
      >
        <Card title="selected data" className="selectedData div-wrapper">
          <Row>
            <Col lg={12} md={24}>
              <Divider orientation="left">general data</Divider>
              <Card type="inner">
                <ShowDataLogic name="rentValue" />
                <ShowDataLogic name="propertyValue" />
                <ShowDataLogic name="downPaymentValue" />
              </Card>
            </Col>
            <Col lg={12} md={24}>
              <Divider orientation="left">mortgage details</Divider>
              <Card type="inner">
                <ShowDataLogic name="amortizationValue" />
                <ShowDataLogic name="mortgageRateValue" />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={24}>
              <Divider orientation="left">taxes and basic costs</Divider>
              <Card type="inner">
                <ShowDataLogic name="amountAnnualTaxesValue" />
                <ShowDataLogic name="annualHeatingCostsValue" />
              </Card>
            </Col>
            <Col lg={12} md={24}>
              <Divider orientation="left">closing costs</Divider>
              <Card type="inner">
                <ShowDataLogic name="buyingHomeValue" />
                <ShowDataLogic name="sellingHomeValue" />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={24}>
              <Divider orientation="left">maintenance costs</Divider>
              <Card type="inner">
                <ShowDataLogic name="maintenanceValue" />
                <ShowDataLogic name="ownerInsuranceValue" />
                <ShowDataLogic name="rentersInsuranceValue" />
                <ShowDataLogic name="rentMonthlyCostsValue" />
              </Card>
            </Col>
            <Col lg={12} md={24}>
              <Divider orientation="left">market trends</Divider>
              <Card type="inner">
                <ShowDataLogic name="rateOfGrowthValue" />
                <ShowDataLogic name="returnInvestmentValue" />
              </Card>
            </Col>
          </Row>
        </Card>
      </Drawer>
    </div>
  );
};

export default RightPart;
