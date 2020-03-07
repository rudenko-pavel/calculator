import "./LeftPart.scss";

import { Button, Collapse } from "antd";
import React from "react";

import { resetValues } from "../../actions";
import configTFE from "../../configs/configTextForElements";
import CardComponentLogic from "../CardComponent/CardComponentLogic";
import TextPanel from "../TextPanel/TextPanel";

const LeftPart = () => {
  function callbackCollapse(key) {
    console.log("callbackCollapse(): ", key);
  }

  const { Panel } = Collapse;
  const buttons = configTFE.buttons.resetValues;

  return (
    <div className="LeftPart">
      <form>
        <Collapse
          defaultActiveKey={[1]}
          onChange={callbackCollapse}
          className="div-wrapper"
        >
          <Panel header="general data" key="1">
            <CardComponentLogic name="rentValue" />
            <CardComponentLogic name="propertyValue" />
            <CardComponentLogic name="downPaymentValue" />
          </Panel>
          <Panel header="mortgage details" key="2">
            <TextPanel num="2" />
            <CardComponentLogic name="amortizationValue" />
            <CardComponentLogic name="mortgageRateValue" />
          </Panel>
          <Panel header="taxes and basic costs" key="3">
            <TextPanel num="3" />
            <CardComponentLogic name="amountAnnualTaxesValue" />
            <CardComponentLogic name="annualHeatingCostsValue" />
          </Panel>
          <Panel header="closing costs" key="4">
            <TextPanel num="4" />
            <CardComponentLogic name="buyingHomeValue" />
            <CardComponentLogic name="sellingHomeValue" />
          </Panel>
          <Panel header="maintenance costs" key="5">
            <TextPanel num="5" />
            <Button
              type="primary"
              onClick={() =>
                resetValues([
                  "maintenanceValue",
                  "ownerInsuranceValue",
                  "rentersInsuranceValue",
                  "rentMonthlyCostsValue"
                ])
              }
            >
              {buttons.btn2.text}
            </Button>
            <CardComponentLogic name="maintenanceValue" />
            <CardComponentLogic name="ownerInsuranceValue" />
            <CardComponentLogic name="rentersInsuranceValue" />
            <CardComponentLogic name="rentMonthlyCostsValue" />
          </Panel>
          <Panel header="market trends" key="6">
            <TextPanel num="6" />
            <Button
              type="primary"
              onClick={() =>
                resetValues(["rateOfGrowthValue", "returnInvestmentValue"])
              }
            >
              {buttons.btn3.text}
            </Button>
            <CardComponentLogic name="rateOfGrowthValue" />
            <CardComponentLogic name="returnInvestmentValue" />
          </Panel>
        </Collapse>
      </form>
    </div>
  );
};

export default LeftPart;
