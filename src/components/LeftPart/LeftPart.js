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
          text: (
            <div>
              The minimum downpayment is based on property value:{" "}
              <li>5% of the first $500k</li>
              <li>10% of the remainder if less than $1M</li>
              <li>A property over 1 million requires a 20% downpayment</li>
            </div>
          )
        },
        annualTaxesValue: {
          text: (
            <div>
              <p>
                These amounts are determined by your municipality, according to
                the value of the property.
              </p>
              <p>School taxes are only applicable in Quebec.</p>
            </div>
          )
        }
      }
    };
  }

  returnPopover = name => {
    if (this.state.popover.hasOwnProperty(name)) {
      const txt = this.state.popover[name];
      return txt.text;
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
              />
              <CardComponent
                title="Down Payment"
                text="Indicate how much you could pay for your down payment. Loans with a down payment of less than 20% of property value will require loan-insurance with CMHC or Genworth."
                nameValue="downPaymentValue"
                prefix="$"
                suffix=""
                popover={this.returnPopover("downPaymentValue")}
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
                nameValue="annualTaxesValue"
                prefix="$"
                suffix=""
                popover={this.returnPopover("annualTaxesValue")}
              />
              <CardComponent
                title="Annual heating costs"
                text=" "
                nameValue="heatingCostsValue"
                prefix="$"
                suffix=""
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
              />
              <CardComponent
                title="Costs of selling a home"
                text=" "
                nameValue="sellingHomeValue"
                prefix="$"
                suffix=""
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
              />
              <CardComponent
                title="Annual homeowner's insurance"
                text=" "
                nameValue="ownerInsuranceValue"
                prefix=""
                suffix="%"
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
