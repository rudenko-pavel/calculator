import "./RightPart.scss";

import { Button, Card, Col, Divider, Drawer, Row } from "antd";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetValues } from "../../actions";
import configTFE from "../../configs/configTextForElements";
import getMortgageCalculator from "../../lib/mortgage";
import { returnFormatter } from "../CardComponent/CardComponent";
import ShowDataLogic from "./ShowDataLogic";

const RightPart = () => {
  const [visiblePanel, toggleDrawer] = useState(false);
  const { buttons, divElements } = configTFE;
  const dispatch = useDispatch();

  const data = useSelector(s => s.state);
  const mortgageCalculator = getMortgageCalculator();
  mortgageCalculator.totalPrice = data.propertyValue.val;
  mortgageCalculator.downPayment = data.downPaymentValue.val;
  mortgageCalculator.interestRate = data.mortgageRateValue.val / 100;
  mortgageCalculator.months = data.amortizationValue.val * 12;
  mortgageCalculator.taxRate =
    data.amountAnnualTaxesValue.val / data.propertyValue.val;
  mortgageCalculator.insuranceRate = data.ownerInsuranceValue.val / 100;
  const payment = mortgageCalculator.calculatePayment();

  console.log("payment ", payment);

  // tax + maint + insurance + heating
  const mMonthlyExpenses =
    (data.amountAnnualTaxesValue.val +
      data.propertyValue.val * (data.maintenanceValue.val / 100) +
      data.propertyValue.val * (data.ownerInsuranceValue.val / 100) +
      data.annualHeatingCostsValue.val) /
    12;

  const rMonthlyExpenses = data.rentersInsuranceValue.val;

  const mTotal = payment.principalAndInterest + mMonthlyExpenses;
  const rTotal = data.rentValue.val + rMonthlyExpenses;

  const total = Math.max(mTotal, rTotal);
  const mSaving = total - mTotal;
  const rSaving = total - rTotal;

  return (
    <div className="RightPart">
      <h3>{divElements.summaryBlock.div0.text}</h3>
      <Row>
        <Col span={8}>&nbsp;</Col>
        <Col span={8}>{divElements.summaryBlock.div1.text}</Col>
        <Col span={8}>{divElements.summaryBlock.div2.text}</Col>
      </Row>
      <Row>
        <Col span={8}>{divElements.summaryBlock.div3.text}</Col>
        <Col span={8}>{returnFormatter(data.rentValue.val, "$")}</Col>
        <Col span={8}>{returnFormatter(payment.principalAndInterest, "$")}</Col>
      </Row>
      <Row>
        <Col span={8}>{divElements.summaryBlock.div4.text}</Col>
        <Col span={8}>{returnFormatter(rMonthlyExpenses, "$")}</Col>
        <Col span={8}>{returnFormatter(mMonthlyExpenses, "$")}</Col>
      </Row>
      <Row>
        <Col span={8}>{divElements.summaryBlock.div5.text}</Col>
        <Col span={8}>{returnFormatter(rSaving, "$")}</Col>
        <Col span={8}>{returnFormatter(mSaving, "$")}</Col>
      </Row>
      <Row>
        <Col span={8} className="caption">
          {divElements.summaryBlock.div6.text}
        </Col>
        <Col span={8}>{returnFormatter(total, "$")}</Col>
        <Col span={8}>{returnFormatter(total, "$")}</Col>
      </Row>
      <Divider dashed />
      <Button type="primary" onClick={() => dispatch(resetValues([]))}>
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
        className="drawer-custom"
        placement="right"
        closable={false}
        onClose={() => toggleDrawer(!visiblePanel)}
        visible={visiblePanel}
      >
        <Card title="selected data" className="selectedData div-wrapper">
          <Row>
            <Col lg={12} md={24}>
              <Divider orientation="left">
                {divElements.titles.title1.text}
              </Divider>
              <Card type="inner">
                <ShowDataLogic name="propertyValue" />
                <ShowDataLogic name="downPaymentValue" />
              </Card>
            </Col>
            <Col lg={12} md={24}>
              <Divider orientation="left">
                {divElements.titles.title2.text}
              </Divider>
              <Card type="inner">
                <ShowDataLogic name="amortizationValue" />
                <ShowDataLogic name="mortgageRateValue" />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={24}>
              <Divider orientation="left">
                {divElements.titles.title4.text}
              </Divider>
              <Card type="inner">
                <ShowDataLogic name="buyingHomeValue" />
                <ShowDataLogic name="sellingHomeValue" />
              </Card>
            </Col>
            <Col lg={12} md={24}>
              <Divider orientation="left">
                {divElements.titles.title5.text}
              </Divider>
              <Card type="inner">
                <ShowDataLogic name="amountAnnualTaxesValue" />
                <ShowDataLogic name="maintenanceValue" />
                <ShowDataLogic name="ownerInsuranceValue" />
                <ShowDataLogic name="annualHeatingCostsValue" />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={24}>
              <Divider orientation="left">
                {divElements.titles.title6.text}
              </Divider>
              <Card type="inner">
                <ShowDataLogic name="rateOfGrowthValue" />
              </Card>
            </Col>
          </Row>
        </Card>
      </Drawer>
    </div>
  );
};

export default RightPart;
