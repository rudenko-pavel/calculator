/* eslint-disable no-shadow */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./LeftPart.scss";

import { Card, Collapse, Input, Slider, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";

import {
  setAmortization,
  setAnnualTaxes,
  setBuyingHome,
  setDownPayment,
  setHeatingCosts,
  setMaintenance,
  setMortgageRate,
  setOwnerInsurance,
  setPropertyValue,
  setRateOfGrowth,
  setRent,
  setRentersInsurance,
  setRentMonthlyCosts,
  setReturnInvestment,
  setSellingHome
} from "../../actions";

class LeftPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sliderData: {
        rentData: {
          min: 400,
          max: 3900,
          step: 50
        },
        propertyValueData: {
          min: 40000,
          max: 3900000,
          step: 1000
        },
        downPaymentData: {
          min: 240,
          max: 600,
          step: 10
        },
        amortizationData: {
          min: 2,
          max: 9,
          step: 1
        },
        mortgageRateData: {
          min: 1,
          max: 9,
          step: 0.1
        },
        annualTaxesData: {
          min: 0,
          max: 1000,
          step: 100
        },
        heatingCostsData: {
          min: 0,
          max: 10000,
          step: 100
        },
        buyingHomeData: {
          min: 0,
          max: 10000,
          step: 100
        },
        sellingHomeData: {
          min: 0,
          max: 24000,
          step: 100
        },
        maintenanceData: {
          min: 0,
          max: 5,
          step: 0.1
        },
        ownerInsuranceData: {
          min: 0,
          max: 2,
          step: 0.1
        },
        rentersInsuranceData: {
          min: 0,
          max: 1000,
          step: 50
        },
        rentMonthlyCostsData: {
          min: 0,
          max: 1000,
          step: 50
        },
        rateOfGrowthData: {
          min: 0,
          max: 5,
          step: 0.1
        },
        returnInvestmentData: {
          min: 0,
          max: 10,
          step: 0.1
        }
      }
    };
  }

  formatNumber = (value, action) => {
    let newValue = parseFloat(value);
    const dataSlider = this.state.sliderData;
    const reg = /^-?[0-9]*(\.[0-9]*)?$/;
    // eslint-disable-next-line no-restricted-globals
    if ((!isNaN(newValue) && reg.test(newValue)) || newValue === "") {
      switch (action) {
        case 1:
          if (newValue < dataSlider.rentData.min)
            newValue = dataSlider.rentData.min;
          if (newValue > dataSlider.rentData.max)
            newValue = dataSlider.rentData.max;
          this.props.setRent(newValue);
          break;
        case 2:
          if (newValue < dataSlider.propertyValueData.min)
            newValue = dataSlider.propertyValueData.min;
          if (newValue > dataSlider.propertyValueData.max)
            newValue = dataSlider.propertyValueData.max;
          this.props.setPropertyValue(newValue);
          break;
        case 3:
          if (newValue < dataSlider.downPaymentData.min)
            newValue = dataSlider.downPaymentData.min;
          if (newValue > dataSlider.downPaymentData.max)
            newValue = dataSlider.downPaymentData.max;
          this.props.setDownPayment(newValue);
          break;
        case 4:
          if (newValue < dataSlider.amortizationData.min)
            newValue = dataSlider.amortizationData.min;
          if (newValue > dataSlider.amortizationData.max)
            newValue = dataSlider.amortizationData.max;
          this.props.setAmortization(newValue);
          break;
        case 5:
          if (newValue < dataSlider.mortgageRateData.min)
            newValue = dataSlider.mortgageRateData.min;
          if (newValue > dataSlider.mortgageRateData.max)
            newValue = dataSlider.mortgageRateData.max;
          this.props.setMortgageRate(newValue);
          break;
        case 6:
          if (newValue < dataSlider.annualTaxesData.min)
            newValue = dataSlider.annualTaxesData.min;
          if (newValue > dataSlider.annualTaxesData.max)
            newValue = dataSlider.annualTaxesData.max;
          this.props.setAnnualTaxes(newValue);
          break;
        case 7:
          if (newValue < dataSlider.heatingCostsData.min)
            newValue = dataSlider.heatingCostsData.min;
          if (newValue > dataSlider.heatingCostsData.max)
            newValue = dataSlider.heatingCostsData.max;
          this.props.setHeatingCosts(newValue);
          break;
        case 8:
          if (newValue < dataSlider.buyingHomeData.min)
            newValue = dataSlider.buyingHomeData.min;
          if (newValue > dataSlider.buyingHomeData.max)
            newValue = dataSlider.buyingHomeData.max;
          this.props.setBuyingHome(newValue);
          break;
        case 9:
          if (newValue < dataSlider.sellingHomeData.min)
            newValue = dataSlider.sellingHomeData.min;
          if (newValue > dataSlider.sellingHomeData.max)
            newValue = dataSlider.sellingHomeData.max;
          this.props.setSellingHome(newValue);
          break;
        case 10:
          if (newValue < dataSlider.maintenanceData.min)
            newValue = dataSlider.maintenanceData.min;
          if (newValue > dataSlider.maintenanceData.max)
            newValue = dataSlider.maintenanceData.max;
          this.props.setMaintenance(newValue);
          break;
        case 11:
          if (newValue < dataSlider.ownerInsuranceData.min)
            newValue = dataSlider.ownerInsuranceData.min;
          if (newValue > dataSlider.ownerInsuranceData.max)
            newValue = dataSlider.ownerInsuranceData.max;
          this.props.setOwnerInsurance(newValue);
          break;
        case 12:
          if (newValue < dataSlider.rentersInsuranceData.min)
            newValue = dataSlider.rentersInsuranceData.min;
          if (newValue > dataSlider.rentersInsuranceData.max)
            newValue = dataSlider.rentersInsuranceData.max;
          this.props.setRentersInsurance(newValue);
          break;
        case 13:
          if (newValue < dataSlider.rentMonthlyCostsData.min)
            newValue = dataSlider.rentMonthlyCostsData.min;
          if (newValue > dataSlider.rentMonthlyCostsData.max)
            newValue = dataSlider.rentMonthlyCostsData.max;
          this.props.setRentMonthlyCosts(newValue);
          break;
        case 14:
          if (newValue < dataSlider.rateOfGrowthData.min)
            newValue = dataSlider.rateOfGrowthData.min;
          if (newValue > dataSlider.rateOfGrowthData.max)
            newValue = dataSlider.rateOfGrowthData.max;
          this.props.setRateOfGrowth(newValue);
          break;
        case 15:
          if (newValue < dataSlider.returnInvestmentData.min)
            newValue = dataSlider.returnInvestmentData.min;
          if (newValue > dataSlider.returnInvestmentData.max)
            newValue = dataSlider.returnInvestmentData.max;
          this.props.setReturnInvestment(newValue);
          break;
        default:
          break;
      }
    }
  };

  render() {
    const { Text } = Typography;
    console.log("LeftPart: ", this.props.base);
    function callback(key) {
      console.log(key);
    }
    const {
      setAmortization,
      setMortgageRate,
      setDownPayment,
      setPropertyValue,
      setRent,
      setAnnualTaxes,
      setHeatingCosts,
      setBuyingHome,
      setSellingHome,
      setMaintenance,
      setOwnerInsurance,
      setRentersInsurance,
      setRentMonthlyCosts,
      setRateOfGrowth,
      setReturnInvestment,
      base
    } = this.props;
    const {
      amortizationValue,
      mortgageRateValue,
      rentValue,
      propertyValue,
      downPayment,
      annualTaxesValue,
      heatingCostsValue,
      buyingHomeValue,
      sellingHomeValue,
      maintenanceValue,
      ownerInsuranceValue,
      rentersInsuranceValue,
      rentMonthlyCostsValue,
      rateOfGrowthValue,
      returnInvestmentValue
    } = base;
    const { Panel } = Collapse;
    const { sliderData } = this.state;

    return (
      <div className="LeftPart">
        <form>
          <Collapse defaultActiveKey={["4"]} onChange={callback}>
            <Panel header="general data" key="1">
              <Card title="Rent">
                <Card.Grid hoverable={false}>
                  <Text type="secondary">
                    Indicate the amount of your current or projected monthly
                    rent.
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="rentValue"
                    id="rentValue"
                    value={rentValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 1)}
                  />
                  <Text code>
                    Between {sliderData.rentData.min} -{" "}
                    {sliderData.rentData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.rentData.min}
                    max={sliderData.rentData.max}
                    step={sliderData.rentData.step}
                    onChange={setRent}
                    value={rentValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="Property Value">
                <Card.Grid hoverable={false}>
                  <Text type="secondary">
                    Indicate the value of the property you are looking to buy.
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="propertyValue"
                    id="propertyValue"
                    value={propertyValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 2)}
                  />
                  <Text code>
                    Between {sliderData.propertyValueData.min} -{" "}
                    {sliderData.propertyValueData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.propertyValueData.min}
                    max={sliderData.propertyValueData.max}
                    step={sliderData.propertyValueData.step}
                    onChange={setPropertyValue}
                    value={propertyValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="Down Payment">
                <Card.Grid hoverable={false}>
                  <Text type="secondary">
                    Indicate how much you could pay for your down payment. Loans
                    with a down payment of less than 20% of property value will
                    require loan-insurance with CMHC or Genworth.
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="downPayment"
                    id="downPayment"
                    value={downPayment}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 3)}
                  />
                  <Text code>
                    Between {sliderData.downPaymentData.min} -{" "}
                    {sliderData.downPaymentData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.downPaymentData.min}
                    max={sliderData.downPaymentData.max}
                    step={sliderData.downPaymentData.step}
                    onChange={setDownPayment}
                    value={downPayment}
                  />
                </Card.Grid>
              </Card>
            </Panel>
            <Panel header="mortgage details" key="2">
              <Text>
                Imagine a scenario where you are buying a house and indicate the
                characteristics of your mortgage.
              </Text>
              <Card title="Amortization">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="amortizationValue"
                    id="amortizationValue"
                    value={amortizationValue}
                    suffix="years"
                    onChange={e => this.formatNumber(e.target.value, 4)}
                  />
                  <Text code>
                    Between {sliderData.amortizationData.min} -{" "}
                    {sliderData.amortizationData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.amortizationData.min}
                    max={sliderData.amortizationData.max}
                    step={sliderData.amortizationData.step}
                    onChange={setAmortization}
                    value={amortizationValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="mortgage rate">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="mortgageRateValue"
                    id="mortgageRateValue"
                    value={mortgageRateValue}
                    suffix="%"
                    onChange={e => this.formatNumber(e.target.value, 5)}
                  />
                  <Text code>
                    Between {sliderData.mortgageRateData.min} -{" "}
                    {sliderData.mortgageRateData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.mortgageRateData.min}
                    max={sliderData.mortgageRateData.max}
                    step={sliderData.mortgageRateData.step}
                    onChange={setMortgageRate}
                    value={mortgageRateValue}
                  />
                </Card.Grid>
              </Card>
            </Panel>
            <Panel header="taxes and basic costs" key="3">
              <Text>
                Buying a home comes with some expenses that should be expected.
              </Text>
              <Card title="Amount of annual municipal and school taxes.">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="annualTaxesValue"
                    id="annualTaxesValue"
                    value={annualTaxesValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 6)}
                  />
                  <Text code>
                    Between {sliderData.annualTaxesData.min} -{" "}
                    {sliderData.annualTaxesData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.annualTaxesData.min}
                    max={sliderData.annualTaxesData.max}
                    step={sliderData.annualTaxesData.step}
                    onChange={setAnnualTaxes}
                    value={annualTaxesValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="Annual heating costs">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="heatingCostsValue"
                    id="heatingCostsValue"
                    value={heatingCostsValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 7)}
                  />
                  <Text code>
                    Between {sliderData.heatingCostsData.min} -{" "}
                    {sliderData.heatingCostsData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.heatingCostsData.min}
                    max={sliderData.heatingCostsData.max}
                    step={sliderData.heatingCostsData.step}
                    onChange={setHeatingCosts}
                    value={heatingCostsValue}
                  />
                </Card.Grid>
              </Card>
            </Panel>
            <Panel header="closing costs" key="4">
              <Text>
                Closing costs are the initial charge you have to pay when you buy or sell a home.
              </Text>
              <Card title="Costs of buying a home">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="buyingHomeValue"
                    id="buyingHomeValue"
                    value={buyingHomeValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 8)}
                  />
                  <Text code>
                    Between {sliderData.buyingHomeData.min} -{" "}
                    {sliderData.buyingHomeData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.buyingHomeData.min}
                    max={sliderData.buyingHomeData.max}
                    step={sliderData.buyingHomeData.step}
                    onChange={setBuyingHome}
                    value={buyingHomeValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="Costs of selling a home">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="sellingHomeValue"
                    id="sellingHomeValue"
                    value={sellingHomeValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 9)}
                  />
                  <Text code>
                    Between {sliderData.sellingHomeData.min} -{" "}
                    {sliderData.sellingHomeData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.sellingHomeData.min}
                    max={sliderData.sellingHomeData.max}
                    step={sliderData.sellingHomeData.step}
                    onChange={setSellingHome}
                    value={sellingHomeValue}
                  />
                </Card.Grid>
              </Card>
            </Panel>
            <Panel header="maintenance costs" key="5">
              <Text>
                When buying a house, you have to think about its maintenance.
                It’s best to set an amount aside for maintenance related costs.
              </Text>
              <Card title="Maintenance and renovation">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="maintenanceValue"
                    id="maintenanceValue"
                    value={maintenanceValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 10)}
                  />
                  <Text code>
                    Between {sliderData.maintenanceData.min} -{" "}
                    {sliderData.maintenanceData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.maintenanceData.min}
                    max={sliderData.maintenanceData.max}
                    step={sliderData.maintenanceData.step}
                    onChange={setMaintenance}
                    value={maintenanceValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="Annual homeowner's insurance">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="ownerInsuranceValue"
                    id="ownerInsuranceValue"
                    value={ownerInsuranceValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 11)}
                  />
                  <Text code>
                    Between {sliderData.ownerInsuranceData.min} -{" "}
                    {sliderData.ownerInsuranceData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.ownerInsuranceData.min}
                    max={sliderData.ownerInsuranceData.max}
                    step={sliderData.ownerInsuranceData.step}
                    onChange={setOwnerInsurance}
                    value={ownerInsuranceValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="Renter's insurance">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="rentersInsuranceValue"
                    id="rentersInsuranceValue"
                    value={rentersInsuranceValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 12)}
                  />
                  <Text code>
                    Between {sliderData.rentersInsuranceData.min} -{" "}
                    {sliderData.rentersInsuranceData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.rentersInsuranceData.min}
                    max={sliderData.rentersInsuranceData.max}
                    step={sliderData.rentersInsuranceData.step}
                    onChange={setRentersInsurance}
                    value={rentersInsuranceValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="Rent monthly heating costs">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="rentMonthlyCostsValue"
                    id="rentMonthlyCostsValue"
                    value={rentMonthlyCostsValue}
                    prefix="$"
                    onChange={e => this.formatNumber(e.target.value, 13)}
                  />
                  <Text code>
                    Between {sliderData.rentMonthlyCostsData.min} -{" "}
                    {sliderData.rentMonthlyCostsData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.rentMonthlyCostsData.min}
                    max={sliderData.rentMonthlyCostsData.max}
                    step={sliderData.rentMonthlyCostsData.step}
                    onChange={setRentMonthlyCosts}
                    value={rentMonthlyCostsValue}
                  />
                </Card.Grid>
              </Card>
            </Panel>
            <Panel header="market trends" key="6">
              <Text>
                The value of a property changes over time, following market trends.
              </Text>
              <Card title="Property rate of growth">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="rateOfGrowthValue"
                    id="rateOfGrowthValue"
                    value={rateOfGrowthValue}
                    suffix="years"
                    onChange={e => this.formatNumber(e.target.value, 14)}
                  />
                  <Text code>
                    Between {sliderData.rateOfGrowthData.min} -{" "}
                    {sliderData.rateOfGrowthData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.rateOfGrowthData.min}
                    max={sliderData.rateOfGrowthData.max}
                    step={sliderData.rateOfGrowthData.step}
                    onChange={setRateOfGrowth}
                    value={rateOfGrowthValue}
                  />
                </Card.Grid>
              </Card>
              <Card title="Rate of return on investment">
                <Card.Grid hoverable={false}>
                  <Text type="secondary"> </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Input
                    name="returnInvestmentValue"
                    id="returnInvestmentValue"
                    value={returnInvestmentValue}
                    suffix="%"
                    onChange={e => this.formatNumber(e.target.value, 15)}
                  />
                  <Text code>
                    Between {sliderData.returnInvestmentData.min} -{" "}
                    {sliderData.returnInvestmentData.max}{" "}
                  </Text>
                </Card.Grid>
                <Card.Grid hoverable={false}>
                  <Slider
                    min={sliderData.returnInvestmentData.min}
                    max={sliderData.returnInvestmentData.max}
                    step={sliderData.returnInvestmentData.step}
                    onChange={setReturnInvestment}
                    value={returnInvestmentValue}
                  />
                </Card.Grid>
              </Card>
            </Panel>
          </Collapse>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    base: state.base
  };
};

export default connect(mapStateToProps, {
  setAmortization,
  setMortgageRate,
  setRent,
  setPropertyValue,
  setDownPayment,
  setAnnualTaxes,
  setHeatingCosts,
  setBuyingHome,
  setSellingHome,
  setMaintenance,
  setOwnerInsurance,
  setRentersInsurance,
  setRentMonthlyCosts,
  setRateOfGrowth,
  setReturnInvestment
})(LeftPart);
