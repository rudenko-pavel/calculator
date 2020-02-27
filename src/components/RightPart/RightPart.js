/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import "./RightPart.scss";

import {
  Button,
  Card,
  Col,
  Divider,
  Drawer,
  Modal,
  Row,
  Typography
} from "antd";
import mortgageJs from "mortgage-js";
import React from "react";
import { connect } from "react-redux";

import { resetValues } from "../../actions";
import { initialState } from "../../reducers/baseReducer";

class RightPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
      visibleModal: false
    };
  }

  showModal = () => {
    this.setState({
      visibleModal: true
    });
  };

  handleOk = () => {
    this.setState({
      visibleModal: false
    });
  };

  handleCancel = () => {
    this.setState({
      visibleModal: false
    });
  };

  showDrawer = () => {
    this.setState({
      visible: true
    });
  };

  onClose = () => {
    this.setState({
      visible: false
    });
  };

  comparisonValues = currentValue => {
    let currentClass = "";
    const nameV = Object.entries(currentValue)[0][0];
    const valueV = Object.entries(currentValue)[0][1];
    if (valueV === initialState[nameV]) currentClass = "default-value";
    else currentClass = "new-value";
    return currentClass;
  };

  showCard = (name, value, preffix, suffix) => {
    const { Text } = Typography;
    const valueV = Object.entries(value)[0][1].val;
    return (
      <div className={this.comparisonValues(value)}>
        <Row>
          <Col lg={15} md={15} sm={15} xs={15}>
            {name}:
          </Col>
          <Col lg={9} md={9} sm={9} xs={9}>
            <span>
              {preffix} {new Intl.NumberFormat().format(valueV)} {suffix}
            </span>
            <Text type="secondary">*</Text>
          </Col>
        </Row>
      </div>
    );
  };

  showPaymentSchedule = array => {
    let result = "";
    array.forEach(entry => {
      // eslint-disable-next-line no-restricted-syntax
      for (const [key, value] of Object.entries(entry)) {
        result += `<p> + ${key} + :   + ${value} + </p>`;
      }
    });

    return result;
  };

  showMortgage = () => {
    const mortgageCalculator = mortgageJs.createMortgageCalculator();
    mortgageCalculator.totalPrice = initialState.propertyValue.val;
    mortgageCalculator.downPayment = initialState.downPaymentValue.val;
    mortgageCalculator.interestRate = 0.045;
    mortgageCalculator.months = initialState.amortizationValue.val * 12;
    mortgageCalculator.taxRate = 0.012;
    mortgageCalculator.insuranceRate = 0.0013;
    mortgageCalculator.mortgageInsuranceRate = 0.01;
    mortgageCalculator.mortgageInsuranceEnabled = true;
    mortgageCalculator.mortgageInsuranceThreshold = 0.2;
    mortgageCalculator.additionalPrincipalPayment = 100;
    const payment = mortgageCalculator.calculatePayment();

    return (
      <div>
        <p>loanAmount: {payment.loanAmount}</p>
        <p>principalAndInterest: {payment.principalAndInterest}</p>
        <p>tax: {payment.tax}</p>
        <p>insurance: {payment.insurance}</p>
        <p>total: {payment.total}</p>
        <p>termMonths: {payment.termMonths}</p>
        <Button type="primary" onClick={this.showModal}>
          Payment Schedule
        </Button>
        <Modal
          title="Payment Schedule"
          visible={this.state.visibleModal}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          {this.showPaymentSchedule(payment.paymentSchedule)}
        </Modal>
      </div>
    );
  };

  render() {
    console.log("initialState: ", initialState);
    const { state } = this.props;
    const {
      amortizationValue,
      mortgageRateValue,
      rentValue,
      propertyValue,
      downPaymentValue,
      amountAnnualTaxesValue,
      annualHeatingCostsValue,
      buyingHomeValue,
      sellingHomeValue,
      maintenanceValue,
      ownerInsuranceValue,
      rentersInsuranceValue,
      rentMonthlyCostsValue,
      rateOfGrowthValue,
      returnInvestmentValue
    } = state;

    return (
      <div className="RightPart">
        <div>
          <h3>showMortgage</h3>
          {this.showMortgage()}
        </div>
        <Card title="monthly payments" className="table-money div-wrapper">
          <Row>
            <Col span={10}>&nbsp;</Col>
            <Col span={7}>RENT</Col>
            <Col span={7}>BUY</Col>
          </Row>
          <Row>
            <Col span={10}>Rent or Mortgage</Col>
            <Col span={7}>{new Intl.NumberFormat().format(rentValue.val)}</Col>
            <Col span={7}>col-8</Col>
          </Row>
          <Row>
            <Col span={10}>Property expenses</Col>
            <Col span={7}>col-8</Col>
            <Col span={7}>col-8</Col>
          </Row>
          <Row>
            <Col span={10}>Monthly savings</Col>
            <Col span={7}>col-8</Col>
            <Col span={7}>col-8</Col>
          </Row>
          <Row>
            <Col span={10} className="caption">
              Total
            </Col>
            <Col span={7}>col-8</Col>
            <Col span={7}>col-8</Col>
          </Row>
        </Card>
        <Divider dashed />
        <Button type="primary" onClick={() => this.props.resetValues([])}>
          Reset all
        </Button>
        <Button
          type="primary"
          className="show-selected-data"
          onClick={this.showDrawer}
        >
          Show Selected Data
        </Button>
        <Drawer
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.state.visible}
        >
          <Card title="selected data" className="selectedData div-wrapper">
            <Row>
              <Col lg={12} md={24}>
                <Divider orientation="left">general data</Divider>
                <Card type="inner">
                  {this.showCard("Rent", { rentValue }, "$", "")}
                  {this.showCard("Property Value", { propertyValue }, "$", "")}
                  {this.showCard("Down Payment", { downPaymentValue }, "$", "")}
                </Card>
              </Col>
              <Col lg={12} md={24}>
                <Divider orientation="left">mortgage details</Divider>
                <Card type="inner">
                  {this.showCard(
                    "Amortization",
                    { amortizationValue },
                    "",
                    "years"
                  )}
                  {this.showCard(
                    "Mortgage rate",
                    { mortgageRateValue },
                    "",
                    "%"
                  )}
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={24}>
                <Divider orientation="left">taxes and basic costs</Divider>
                <Card type="inner">
                  {this.showCard(
                    "Amount of annual municipal and school taxes",
                    { amountAnnualTaxesValue },
                    "$",
                    ""
                  )}
                  {this.showCard(
                    "Annual heating costs",
                    { annualHeatingCostsValue },
                    "$",
                    ""
                  )}
                </Card>
              </Col>
              <Col lg={12} md={24}>
                <Divider orientation="left">closing costs</Divider>
                <Card type="inner">
                  {this.showCard(
                    "Costs of buying a home",
                    { buyingHomeValue },
                    "$",
                    ""
                  )}
                  {this.showCard(
                    "Costs of selling a home",
                    { sellingHomeValue },
                    "$",
                    ""
                  )}
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={24}>
                <Divider orientation="left">maintenance costs</Divider>
                <Card type="inner">
                  {this.showCard(
                    "Maintenance and renovation",
                    { maintenanceValue },
                    "",
                    "%"
                  )}
                  {this.showCard(
                    "Annual homeowner's insurance",
                    { ownerInsuranceValue },
                    "",
                    "%"
                  )}
                  {this.showCard(
                    "Renter's insurance",
                    { rentersInsuranceValue },
                    "$",
                    ""
                  )}
                  {this.showCard(
                    "Rent monthly heating costs",
                    { rentMonthlyCostsValue },
                    "$",
                    ""
                  )}
                </Card>
              </Col>
              <Col lg={12} md={24}>
                <Divider orientation="left">market trends</Divider>
                <Card type="inner">
                  {this.showCard(
                    "Property rate of growth",
                    { rateOfGrowthValue },
                    "",
                    "years"
                  )}
                  {this.showCard(
                    "Rate of return on investment",
                    { returnInvestmentValue },
                    "",
                    "%"
                  )}
                </Card>
              </Col>
            </Row>
          </Card>
        </Drawer>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.state
  };
};

export default connect(mapStateToProps, {
  resetValues
})(RightPart);
