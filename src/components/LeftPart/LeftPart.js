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

  returnPopover = (name, condition) => {
    let txt = "";
    if (this.state.popover.hasOwnProperty(name)) {
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
    function callback(key) {
      console.log(key);
    }

    const { Panel } = Collapse;

    return (
      <div className="LeftPart">
        <form>
          <Collapse
            defaultActiveKey={[]}
            onChange={callback}
            className="div-wrapper"
          >
            <Panel header="general data" key="1">
              <CardComponent
                title="Rent"
                text="Indicate the amount of your current or projected monthly rent."
                nameValue="rentValue"
                prefix="$"
                suffix=""
              />
              <CardComponent
                title="Property Value"
                text="Indicate the value of the property you are looking to buy."
                nameValue="propertyValue"
                prefix="$"
                suffix=""
                dependencies={[
                  "downPaymentValue",
                  "amountAnnualTaxesValue",
                  "annualHeatingCostsValue",
                  "buyingHomeValue",
                  "sellingHomeValue"
                ]}
                downPaymentValueCondition={this.downPaymentValueCondition}
              />
              <CardComponent
                title="Down Payment"
                text="Indicate how much you could pay for your down payment. Loans with a down payment of less than 20% of property value will require loan-insurance with CMHC or Genworth."
                nameValue="downPaymentValue"
                prefix="$"
                suffix=""
                popover={this.returnPopover(
                  "downPaymentValue",
                  this.downPaymentValueCondition(this.props.state.propertyValue)
                )}
                isProc={this.props.state.propertyValue.val}
              />
            </Panel>
            <Panel header="mortgage details" key="2">
              <Text className="hint">
                Imagine a scenario where you are buying a house and indicate the
                characteristics of your mortgage.
              </Text>
              <CardComponent
                title="Amortization"
                text=" "
                nameValue="amortizationValue"
                prefix=""
                suffix="years"
              />
              <CardComponent
                title="mortgage rate"
                text=" "
                nameValue="mortgageRateValue"
                prefix=""
                suffix="%"
              />
            </Panel>
            <Panel header="taxes and basic costs" key="3">
              <Text className="hint">
                Buying a home comes with some expenses that should be expected.
              </Text>
              <CardComponent
                title="Amount of annual municipal and school taxes."
                text=" "
                nameValue="amountAnnualTaxesValue"
                prefix="$"
                suffix=""
                popover={this.returnPopover("amountAnnualTaxesValue")}
                isProc={this.props.state.propertyValue.val}
              />
              <CardComponent
                title="Annual heating costs"
                text=" "
                nameValue="annualHeatingCostsValue"
                prefix="$"
                suffix=""
                isProc={this.props.state.propertyValue.val}
              />
            </Panel>
            <Panel header="closing costs" key="4">
              <Text className="hint">
                Closing costs are the initial charge you have to pay when you
                buy or sell a home.
              </Text>
              <CardComponent
                title="Costs of buying a home"
                text=" "
                nameValue="buyingHomeValue"
                prefix="$"
                suffix=""
                isProc={this.props.state.propertyValue.val}
              />
              <CardComponent
                title="Costs of selling a home"
                text=" "
                nameValue="sellingHomeValue"
                prefix="$"
                suffix=""
                isProc={this.props.state.propertyValue.val}
              />
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
              <CardComponent
                title="Maintenance and renovation"
                text=" "
                nameValue="maintenanceValue"
                prefix=""
                suffix="%"
                isProc={this.props.state.propertyValue.val}
              />
              <CardComponent
                title="Annual homeowner's insurance"
                text=" "
                nameValue="ownerInsuranceValue"
                prefix=""
                suffix="%"
                isProc={this.props.state.propertyValue.val}
              />
              <CardComponent
                title="Renter's insurance"
                text=" "
                nameValue="rentersInsuranceValue"
                prefix="$"
                suffix=""
              />
              <CardComponent
                title="Rent monthly heating costs"
                text=" "
                nameValue="rentMonthlyCostsValue"
                prefix="$"
                suffix=""
              />
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
              <CardComponent
                title="Property rate of growth"
                text=" "
                nameValue="rateOfGrowthValue"
                prefix=""
                suffix="years"
              />
              <CardComponent
                title="Rate of return on investment"
                text=" "
                nameValue="returnInvestmentValue"
                prefix=""
                suffix="%"
              />
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
