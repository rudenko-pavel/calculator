/* eslint-disable react/prop-types */
import "./RightPart.scss";

import { Button, Card, Col, Divider, Row } from "antd";
import React from "react";
import { connect } from "react-redux";

import { resetValues } from "../../actions";

class RightPart extends React.Component {
  sumFunc = () => {
    const result = "a + b + с";
    return result;
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
        <Button
          type="primary"
          onClick={e => this.props.resetValues(["rentValue", "propertyValue"],state)}
        >
          Reset all
        </Button>
        <Card title="selected data" className="selectedData">
          <Row>
            <Col span={12}>
              <Card type="inner" title="general data">
                <div>Rent: {rentValue}</div>
                <div>Property Value: {propertyValue}</div>
                <div>Down Payment: {downPaymentValue} </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="mortgage details">
                <div>Amortization: {amortizationValue} </div>
                <div>Mortgage rate: {mortgageRateValue} </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card type="inner" title="taxes and basic costs">
                <div>
                  Amount of annual municipal and school taxes:{" "}
                  {annualTaxesValue}{" "}
                </div>
                <div>Annual heating costs: {heatingCostsValue} </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="closing costs">
                <div>Costs of buying a home: {buyingHomeValue}</div>
                <div>Costs of selling a home: {sellingHomeValue} </div>
              </Card>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <Card type="inner" title="maintenance costs">
                <div>Maintenance and renovation: {maintenanceValue}</div>
                <div>
                  Annual homeowner&lsquo;s insurance: {ownerInsuranceValue}{" "}
                </div>
                <div>Renter&lsquo;s insurance: {rentersInsuranceValue}</div>
                <div>Rent monthly heating costs: {rentMonthlyCostsValue} </div>
              </Card>
            </Col>
            <Col span={12}>
              <Card type="inner" title="market trends">
                <div>Property rate of growth: {rateOfGrowthValue}</div>
                <div>
                  Rate of return on investment: {returnInvestmentValue}{" "}
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

export default connect(mapStateToProps, { resetValues })(RightPart);
