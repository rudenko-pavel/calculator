/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import "./RightPart.scss";

import { Button, Card, Col, Divider, Drawer, Row, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";

import { resetValues, saveDefault } from "../../actions";

class RightPart extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false
    };
  }

  componentDidMount() {
    this.props.saveDefault();
  }

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
          <Card title="selected data" className="selectedData">
            <Row>
              <Col lg={12} md={24}>
                <Card type="inner" title="general data">
                  <div className={this.comparisonValues({ rentValue })}>
                    Rent: <span>{rentValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div className={this.comparisonValues({ propertyValue })}>
                    Property Value: <span>{propertyValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div className={this.comparisonValues({ downPaymentValue })}>
                    Down Payment: <span>{downPaymentValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                </Card>
              </Col>
              <Col lg={12} md={24}>
                <Card type="inner" title="mortgage details">
                  <div className={this.comparisonValues({ amortizationValue })}>
                    Amortization: <span>{amortizationValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div className={this.comparisonValues({ mortgageRateValue })}>
                    Mortgage rate: <span>{mortgageRateValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={24}>
                <Card type="inner" title="taxes and basic costs">
                  <div className={this.comparisonValues({ annualTaxesValue })}>
                    Amount of annual municipal and school taxes:{" "}
                    <span>{annualTaxesValue}</span>
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div className={this.comparisonValues({ heatingCostsValue })}>
                    Annual heating costs: <span>{heatingCostsValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                </Card>
              </Col>
              <Col lg={12} md={24}>
                <Card type="inner" title="closing costs">
                  <div className={this.comparisonValues({ buyingHomeValue })}>
                    Costs of buying a home: <span>{buyingHomeValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div className={this.comparisonValues({ sellingHomeValue })}>
                    Costs of selling a home: <span>{sellingHomeValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col lg={12} md={24}>
                <Card type="inner" title="maintenance costs">
                  <div className={this.comparisonValues({ maintenanceValue })}>
                    Maintenance and renovation: <span>{maintenanceValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div
                    className={this.comparisonValues({ ownerInsuranceValue })}
                  >
                    Annual homeowner&lsquo;s insurance:
                    <span>{ownerInsuranceValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div
                    className={this.comparisonValues({ rentersInsuranceValue })}
                  >
                    Renter&lsquo;s insurance:{" "}
                    <span>{rentersInsuranceValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div
                    className={this.comparisonValues({ rentMonthlyCostsValue })}
                  >
                    Rent monthly heating costs:
                    <span>{rentMonthlyCostsValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
                </Card>
              </Col>
              <Col lg={12} md={24}>
                <Card type="inner" title="market trends">
                  <div className={this.comparisonValues({ rateOfGrowthValue })}>
                    Property rate of growth: <span>{rateOfGrowthValue}</span>
                    <Text type="secondary">[default]</Text>
                  </div>
                  <div
                    className={this.comparisonValues({ returnInvestmentValue })}
                  >
                    Rate of return on investment:
                    <span>{returnInvestmentValue}</span>{" "}
                    <Text type="secondary">[default]</Text>
                  </div>
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

export default connect(mapStateToProps, { resetValues, saveDefault })(
  RightPart
);
