/* eslint-disable no-console */
/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./LeftPart.scss";

import { Button, Collapse, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";

import { resetValues, setValue } from "../../actions";
import CardComponent from "../CardComponent/CardComponent";
import CardComponentLogic from "../CardComponent/CardComponentLogic";

class LeftPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      popover: {
        downPaymentValue: {
          conditions: true,
          response: [
            {
              condition: 0,
              text: (
                <div>
                  The minimum downpayment is based on property value:{" "}
                  <li>5% of the first $500k</li>
                  <li>10% of the remainder if less than $1M</li>
                  <li>A property over 1 million requires a 20% downpayment</li>
                </div>
              )
            },
            {
              condition: 1,
              text: (
                <div>
                  Your down payment should represent at least 5% of the value of
                  the property when it does not exceed $250,000.
                </div>
              )
            },
            {
              condition: 2,
              text: (
                <div>
                  Your down payment should represent 5% of the first $500k + 10%
                  of the remainder when it surpasses $500,000 but does not
                  exceed $1,000,000.
                </div>
              )
            },
            {
              condition: 3,
              text: (
                <div>
                  Your down payment should represent 20% of the value of the
                  property when it exceeds $1,000,000.
                </div>
              )
            }
          ]
        },
        amountAnnualTaxesValue: {
          conditions: false,
          response: {
            text: (
              <div>
                <p>
                  These amounts are determined by your municipality, according
                  to the value of the property.
                </p>
                <p>School taxes are only applicable in Quebec.</p>
              </div>
            )
          }
        }
      }
    };
  }

  downPaymentValueCondition = value => {
    let result = 0;
    switch (true) {
      case value.val < 250001:
        result = 0;
        break;
      case value.val > 250000 && value.val < 500001:
        result = 1;
        break;
      case value.val > 500000 && value.val < 1000001:
        result = 2;
        break;
      case value.val > 1000000:
        result = 3;
        break;
      default:
        result = 0;
    }
    return result;
  };

  /*
    returnPopover()
    возвращает popup для выбранного поля
    Поля могут иметь безусловный popup или popup, который зависит от какого-то условия.
    Например, поле downPaymentValue, в зависимости от значения поля propertyValue 
    может иметь различный popup

    condition - значение берется из  downPaymentValueCondition()


*/

  // eslint-disable-next-line consistent-return
  returnPopover = (name, condition) => {
    let txt = "";
    if (this.state.popover.hasOwnProperty.call(name, "key")) {
      if (this.state.popover[name].conditions === false)
        txt = this.state.popover[name].response.text;
      else {
        txt = this.state.popover[name].response[condition].text;
      }
      return txt;
    }
  };

  render() {
    const { Text } = Typography;
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
              <Text className="hint">
                Imagine a scenario where you are buying a house and indicate the
                characteristics of your mortgage.
              </Text>
              <CardComponentLogic name="amortizationValue" />
              <CardComponentLogic name="mortgageRateValue" />
            </Panel>
            <Panel header="taxes and basic costs" key="3">
              <Text className="hint">
                Buying a home comes with some expenses that should be expected.
              </Text>
              <CardComponentLogic name="amountAnnualTaxesValue" />
              <CardComponentLogic name="annualHeatingCostsValue" />
            </Panel>
            <Panel header="closing costs" key="4">
              <Text className="hint">
                Closing costs are the initial charge you have to pay when you
                buy or sell a home.
              </Text>
              <CardComponentLogic name="buyingHomeValue" />
              <CardComponentLogic name="sellingHomeValue" />
            </Panel>
            <Panel header="maintenance costs" key="5">
              <Text className="hint">
                When buying a house, you have to think about its maintenance.
                It’s best to set an amount aside for maintenance related costs.
              </Text>
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
              <Text className="hint">
                The value of a property changes over time, following market
                trends.
              </Text>
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
