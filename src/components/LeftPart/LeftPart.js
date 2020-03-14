import "./LeftPart.scss";

import { Button, Collapse } from "antd";
import React from "react";
import { useDispatch } from "react-redux";

import { resetValues } from "../../actions";
import configTFE from "../../configs/configTextForElements";
import CardComponentLogic from "../CardComponent/CardComponentLogic";
import TextPanel from "../TextPanel/TextPanel";

const LeftPart = () => {
  const { Panel } = Collapse;
  const { buttons, divElements } = configTFE;
  const dispatch = useDispatch();

  return (
    <div className="LeftPart">
      <form>
        <Collapse defaultActiveKey={[]} className="div-wrapper">
          <Panel header={divElements.titles.title1.text} key="1">
            <CardComponentLogic name="rentValue" />
            <CardComponentLogic name="propertyValue" />
            <CardComponentLogic name="downPaymentValue" />
          </Panel>
          <Panel header={divElements.titles.title2.text} key="2">
            <TextPanel num="2" />
            <CardComponentLogic name="amortizationValue" />
            <CardComponentLogic name="mortgageRateValue" />
          </Panel>
          <Panel header={divElements.titles.title3.text} key="3">
            <TextPanel num="3" />
            <CardComponentLogic name="amountAnnualTaxesValue" />
            <CardComponentLogic name="annualHeatingCostsValue" />
          </Panel>
          <Panel header={divElements.titles.title4.text} key="4">
            <TextPanel num="4" />
            <CardComponentLogic name="buyingHomeValue" />
            <CardComponentLogic name="sellingHomeValue" />
          </Panel>
          <Panel header={divElements.titles.title5.text} key="5">
            <TextPanel num="5" />
            <Button
              type="primary"
              onClick={() =>
                dispatch(
                  resetValues([
                    "maintenanceValue",
                    "ownerInsuranceValue",
                    "rentersInsuranceValue",
                    "rentMonthlyCostsValue"
                  ])
                )
              }
            >
              {buttons.resetValues.btn2.text}
            </Button>
            <CardComponentLogic name="maintenanceValue" />
            <CardComponentLogic name="ownerInsuranceValue" />
            <CardComponentLogic name="rentersInsuranceValue" />
            <CardComponentLogic name="rentMonthlyCostsValue" />
          </Panel>
          <Panel header={divElements.titles.title6.text} key="6">
            <TextPanel num="6" />
            <Button
              type="primary"
              onClick={() =>
                dispatch(
                  resetValues(["rateOfGrowthValue", "returnInvestmentValue"])
                )
              }
            >
              {buttons.resetValues.btn3.text}
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
