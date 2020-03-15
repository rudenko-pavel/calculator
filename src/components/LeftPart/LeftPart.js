import "./LeftPart.scss";

import { LineChartOutlined } from "@ant-design/icons";
import { Checkbox, Collapse } from "antd";
import React, { useState } from "react";
import { useSelector } from "react-redux";

import config from "../../configs/configCards";
import configTFE from "../../configs/configTextForElements";
import { returnFormatter } from "../CardComponent/CardComponent";
import CardComponentLogic from "../CardComponent/CardComponentLogic";
import TextPanel from "../TextPanel/TextPanel";

const LeftPart = () => {
  const { Panel } = Collapse;
  const [compare, setCompare] = useState(false);
  const { divElements } = configTFE;

  const state = useSelector(s => s.state);

  const getForemttedValue = name => {
    return returnFormatter(
      state[name].val,
      config[name].prefix,
      config[name].suffix
    );
  };

  const getAnnualMaintenanceAndTaxes = () => {
    const val =
      (state.amountAnnualTaxesValue.val +
        state.propertyValue.val * (state.maintenanceValue.val / 100) +
        state.propertyValue.val * (state.ownerInsuranceValue.val / 100) +
        state.annualHeatingCostsValue.val) /
      12;
    return `${returnFormatter(val, "$")} per month`;
  };

  return (
    <div className="LeftPart">
      <form>
        <Collapse defaultActiveKey={[1]} className="div-wrapper">
          <Panel
            header={divElements.titles.title1.text}
            extra={
              <>
                Borrowing:{" "}
                {returnFormatter(
                  state.propertyValue.val - state.downPaymentValue.val,
                  "$"
                )}
              </>
            }
            key="1"
          >
            <CardComponentLogic name="propertyValue" />
            <CardComponentLogic name="downPaymentValue" />
          </Panel>
          <Panel
            header={divElements.titles.title2.text}
            extra={
              <>
                {getForemttedValue("amortizationValue")}
                {"   "}
                {getForemttedValue("mortgageRateValue")}
              </>
            }
            key="2"
          >
            <TextPanel num="2" />
            <CardComponentLogic name="amortizationValue" />
            <CardComponentLogic name="mortgageRateValue" />
          </Panel>
          <Panel
            header={divElements.titles.title4.text}
            extra={getForemttedValue("buyingHomeValue")}
            key="4"
          >
            <TextPanel num="4" />
            <CardComponentLogic name="buyingHomeValue" />
            <CardComponentLogic name="sellingHomeValue" />
          </Panel>
          <Panel
            header={divElements.titles.title5.text}
            extra={getAnnualMaintenanceAndTaxes()}
            key="5"
          >
            <TextPanel num="5" />
            <CardComponentLogic name="amountAnnualTaxesValue" />
            <CardComponentLogic name="maintenanceValue" />
            <CardComponentLogic name="ownerInsuranceValue" />
            <CardComponentLogic name="annualHeatingCostsValue" />
          </Panel>
          <Panel
            header={
              <>
                {divElements.titles.title6.text}{" "}
                <LineChartOutlined style={{ color: "green" }} />
              </>
            }
            extra={getForemttedValue("rateOfGrowthValue")}
            key="6"
          >
            <TextPanel num="6" />
            <CardComponentLogic name="rateOfGrowthValue" />
          </Panel>
        </Collapse>

        <br />
        <Checkbox onChange={e => setCompare(e.target.checked)}>
          Compare to rent the same property
        </Checkbox>
        {compare && (
          <Collapse defaultActiveKey={[1, 2, 3]} className="div-wrapper">
            <Panel
              header={config.rentValue.title}
              extra={`${getForemttedValue("rentValue")} per month`}
              key="1"
            >
              <CardComponentLogic name="rentValue" />
            </Panel>
            <Panel
              header={config.rentersInsuranceValue.title}
              extra={`${getForemttedValue("rentersInsuranceValue")} per month`}
              key="2"
            >
              <CardComponentLogic name="rentersInsuranceValue" />
            </Panel>
            <Panel
              header={
                <>
                  {config.returnInvestmentValue.title}{" "}
                  <LineChartOutlined style={{ color: "green" }} />
                </>
              }
              extra={getForemttedValue("returnInvestmentValue")}
              key="3"
            >
              <TextPanel num="7" />
              <CardComponentLogic name="returnInvestmentValue" />
            </Panel>
          </Collapse>
        )}
      </form>
    </div>
  );
};

export default LeftPart;
