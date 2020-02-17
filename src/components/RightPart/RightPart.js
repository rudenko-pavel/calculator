/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import "./RightPart.scss";

import { Button, Card, Col, Divider, Row, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";

import { resetValues, saveDefault } from "../../actions";

class RightPart extends React.Component {
  componentDidMount() {
    this.props.saveDefault();
  }

  comparisonValues = currentValue => {
    let currentClass = "";
    const nameV = Object.entries(currentValue)[0][0];
    const valueV = Object.entries(currentValue)[0][1];
    if (valueV === this.props.state.defaultValues[nameV])
      currentClass = "default-value";
    else currentClass = "new-value";
    return currentClass;
  };

  render() {
    const { state } = this.props;
    const {
      amortizationValue,
      mortgageRateValue,
      rentValue,
      propertyValue,
      downPaymentValue,
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
    } = state;
    const { Text } = Typography;

    return (
      <div className="RightPart">
        <Card title="monthly payments" className="table-money">
          <Row>
            <Col span={10}>&nbsp;</Col>
            <Col span={7}>RENT</Col>
            <Col span={7}>BUY</Col>
          </Row>
          <Row>
            <Col span={10}>Rent or Mortgage</Col>
            <Col span={7}>{rentValue}</Col>
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
        <Card title="selected data" className="selectedData">
          <Row>
            <Col span={12}>
              <Card type="inner" title="general data">
                <div className={this.comparisonValues({ rentValue })}>
                  Rent: {rentValue} <Text type="secondary">[default]</Text>
                </div>
                <div className={this.comparisonValues({ propertyValue })}>
                  Property Value: {propertyValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
                <div className={this.comparisonValues({ downPaymentValue })}>
                  Down Payment: {downPaymentValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="mortgage details">
                <div className={this.comparisonValues({ amortizationValue })}>
                  Amortization: {amortizationValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
                <div className={this.comparisonValues({ mortgageRateValue })}>
                  Mortgage rate: {mortgageRateValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card type="inner" title="taxes and basic costs">
                <div className={this.comparisonValues({ annualTaxesValue })}>
                  Amount of annual municipal and school taxes:{" "}
                  {annualTaxesValue} <Text type="secondary">[default]</Text>
                </div>
                <div className={this.comparisonValues({ heatingCostsValue })}>
                  Annual heating costs: {heatingCostsValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="closing costs">
                <div className={this.comparisonValues({ buyingHomeValue })}>
                  Costs of buying a home: {buyingHomeValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
                <div className={this.comparisonValues({ sellingHomeValue })}>
                  Costs of selling a home: {sellingHomeValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card type="inner" title="maintenance costs">
                <div className={this.comparisonValues({ maintenanceValue })}>
                  Maintenance and renovation: {maintenanceValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
                <div className={this.comparisonValues({ ownerInsuranceValue })}>
                  Annual homeowner&lsquo;s insurance: {ownerInsuranceValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
                <div
                  className={this.comparisonValues({ rentersInsuranceValue })}
                >
                  Renter&lsquo;s insurance: {rentersInsuranceValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
                <div
                  className={this.comparisonValues({ rentMonthlyCostsValue })}
                >
                  Rent monthly heating costs: {rentMonthlyCostsValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="market trends">
                <div className={this.comparisonValues({ rateOfGrowthValue })}>
                  Property rate of growth: {rateOfGrowthValue}
                  <Text type="secondary">[default]</Text>
                </div>
                <div
                  className={this.comparisonValues({ returnInvestmentValue })}
                >
                  Rate of return on investment: {returnInvestmentValue}{" "}
                  <Text type="secondary">[default]</Text>
                </div>
              </Card>
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.state
  };
};

export default connect(mapStateToProps, { resetValues, saveDefault })(
  RightPart
);
