import "./LeftPart.scss";

import { Button, Collapse } from "antd";
import React from "react";
import { connect } from "react-redux";

import { resetValues, setValue } from "../../actions";
import CardComponentLogic from "../CardComponent/CardComponentLogic";
import TextPanel from "../TextPanel/TextPanel";

class LeftPart extends React.Component {
  render() {
    function callbackCollapse(key) {
      console.log("callbackCollapse(): ", key);
    }

    const { Panel } = Collapse;

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
                  this.props.resetValues([
                    "maintenanceValue",
                    "ownerInsuranceValue",
                    "rentersInsuranceValue",
                    "rentMonthlyCostsValue"
                  ])
                }
              >
                Reset maintenance costs
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
                  this.props.resetValues([
                    "rateOfGrowthValue",
                    "returnInvestmentValue"
                  ])
                }
              >
                Reset market trends
              </Button>
              <CardComponentLogic name="rateOfGrowthValue" />
              <CardComponentLogic name="returnInvestmentValue" />
            </Panel>
          </Collapse>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.state
  };
};

export default connect(mapStateToProps, { setValue, resetValues })(LeftPart);
