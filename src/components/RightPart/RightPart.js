import "./RightPart.scss";

import { Button, Card, Col, Divider, Drawer, Row } from "antd";
import React, { useState } from "react";

import { resetValues } from "../../actions";
import configTFE from "../../configs/configTextForElements";
import { initialState } from "../../reducers/baseReducer";
import ShowDataLogic from "./ShowDataLogic";

const RightPart = () => {
  const iState = initialState;
  console.log("initialState: ", iState);
  const { rentValue } = iState;

  const [visiblePanel, toggleDrawer] = useState(false);
  const { buttons, divElements } = configTFE;

  return (
    <div className="RightPart">
      <Card
        title={divElements.summaryBlock.div0.text}
        className="table-money div-wrapper"
      >
        <Row>
          <Col span={10}>&nbsp;</Col>
          <Col span={7}>{divElements.summaryBlock.div1.text}</Col>
          <Col span={7}>{divElements.summaryBlock.div2.text}</Col>
        </Row>
        <Row>
          <Col span={10}>{divElements.summaryBlock.div3.text}</Col>
          <Col span={7}>{new Intl.NumberFormat().format(rentValue.val)}</Col>
          <Col span={7}>col-8</Col>
        </Row>
        <Row>
          <Col span={10}>{divElements.summaryBlock.div4.text}</Col>
          <Col span={7}>col-8</Col>
          <Col span={7}>col-8</Col>
        </Row>
        <Row>
          <Col span={10}>{divElements.summaryBlock.div5.text}</Col>
          <Col span={7}>col-8</Col>
          <Col span={7}>col-8</Col>
        </Row>
        <Row>
          <Col span={10} className="caption">
            {divElements.summaryBlock.div6.text}
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
                <ShowDataLogic name="rentValue" />
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
                {divElements.titles.title3.text}
              </Divider>
              <Card type="inner">
                <ShowDataLogic name="amountAnnualTaxesValue" />
                <ShowDataLogic name="annualHeatingCostsValue" />
              </Card>
            </Col>
            <Col lg={12} md={24}>
              <Divider orientation="left">
                {divElements.titles.title4.text}
              </Divider>
              <Card type="inner">
                <ShowDataLogic name="buyingHomeValue" />
                <ShowDataLogic name="sellingHomeValue" />
              </Card>
            </Col>
          </Row>
          <Row>
            <Col lg={12} md={24}>
              <Divider orientation="left">
                {divElements.titles.title5.text}
              </Divider>
              <Card type="inner">
                <ShowDataLogic name="maintenanceValue" />
                <ShowDataLogic name="ownerInsuranceValue" />
                <ShowDataLogic name="rentersInsuranceValue" />
                <ShowDataLogic name="rentMonthlyCostsValue" />
              </Card>
            </Col>
            <Col lg={12} md={24}>
              <Divider orientation="left">
                {divElements.titles.title6.text}
              </Divider>
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
