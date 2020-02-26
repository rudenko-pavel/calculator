/* eslint-disable no-restricted-globals */
/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./CardComponent.scss";

import {
  Button,
  Card,
  Divider,
  Input,
  Popover,
  Slider,
  Typography
} from "antd";
import React from "react";
import { connect } from "react-redux";

import { checkValue, setValue } from "../../actions";

class CardComponent extends React.Component {
  setDataInStore = (e, name) => {
    let receiveValue;
    const newValue = parseFloat(e);
    const reg = /^-?[0-9]*(\.[0-9]*)?$/;
    if ((!isNaN(newValue) && reg.test(newValue)) || newValue === "") {
      receiveValue = parseFloat(e);
    } else {
      receiveValue = 0;
    }
    if (typeof this.props.dependencies === "object") {
      const { props } = this;
      props.dependencies.forEach(entry => {
        let newValueMin;
        const eObject = { val: e };
        const ratio = props.downPaymentValueCondition(eObject);
        const propName = props.state[name];
        switch (entry) {
          case "downPaymentValue":
            switch (ratio) {
              case 0:
              case 1:
                newValueMin = e * 0.05;
                break;
              case 2:
                newValueMin = 500000 * 0.05 + (e - 500000) * 0.1;
                break;
              case 3:
                newValueMin = e * 0.2;
                break;
              default:
                newValueMin = 0;
            }
            for (const [key] of Object.entries(props.state)) {
              if (`${key}` === entry) {
                if (
                  receiveValue < propName.min ||
                  receiveValue > propName.max
                ) {
                  if (receiveValue < propName.min) {
                    props.setValue(key, propName.min * 0.05, "min");
                    props.setValue(key, propName.min, "max");
                    props.setValue(key, propName.min * 0.05);
                  }
                  if (receiveValue > propName.max) {
                    props.setValue(key, propName.max * 0.2, "min");
                    props.setValue(key, propName.max, "max");
                    props.setValue(key, propName.max);
                  }
                } else {
                  props.setValue(key, newValueMin, "min");
                  props.setValue(key, newValue, "max");
                }
                break;
              }
            }
            console.log("Excellent", entry);
            break;
          case "amountAnnualTaxesValue":
          case "buyingHomeValue":
          case "annualHeatingCostsValue":
            for (const [key] of Object.entries(props.state)) {
              if (`${key}` === entry) {
                if (
                  receiveValue < props.state[name].min ||
                  receiveValue > props.state[name].max
                ) {
                  if (receiveValue < props.state[name].min) {
                    props.setValue(key, props.state[name].min * 0.04, "max");
                    props.setValue(key, 0);
                  }
                  if (receiveValue > props.state[name].max) {
                    props.setValue(key, props.state[name].max * 0.04, "max");
                    props.setValue(key, props.state[name].max * 0.04);
                  }
                } else {
                  props.setValue(key, receiveValue * 0.04, "max");
                }
                break;
              }
            }
            console.log("Excellent", entry);
            break;
          case "sellingHomeValue":
            for (const [key] of Object.entries(props.state)) {
              if (`${key}` === entry) {
                if (
                  receiveValue < props.state[name].min ||
                  receiveValue > props.state[name].max
                ) {
                  if (receiveValue < props.state[name].min) {
                    props.setValue(key, props.state[name].min * 0.1, "max");
                    props.setValue(key, 0);
                  }
                  if (receiveValue > props.state[name].max) {
                    props.setValue(key, props.state[name].max * 0.1, "max");
                    props.setValue(key, props.state[name].max * 0.1);
                  }
                } else {
                  props.setValue(key, receiveValue * 0.1, "max");
                }
                break;
              }
            }
            console.log("Excellent", entry);
            break;
          default:
            console.log("Invalid choice");
            break;
        }
      });
    }
    this.props.setValue(name, receiveValue);
  };

  checkDataInStore = (e, name) => {
    this.props.checkValue(name, e, this.props.state);
  };

  lookForFieldName = name => {
    let fieldValue = "";
    for (const [key, value] of Object.entries(this.props.state)) {
      if (`${key}` === name) {
        fieldValue = value.val;
      }
    }
    return fieldValue;
  };

  lookForOptions = (name, fullValue) => {
    const result = [];
    const propertyValue = this.props.state.propertyValue;
    for (const [key, value] of Object.entries(this.props.state)) {
      if (`${key}` === name) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key2, value2] of Object.entries(value)) {
          result[`${key2}`] = value2;
          if (fullValue > 0 && key2 === "val") {
            switch (name) {
              case "maintenanceValue":
              case "ownerInsuranceValue":
                if (
                  fullValue < propertyValue.min ||
                  fullValue > propertyValue.max
                ) {
                  if (fullValue < propertyValue.min) {
                    result.proc = `$${new Intl.NumberFormat("en-EN", {
                      maximumFractionDigits: 2
                    }).format((value2 / 100) * propertyValue.min)} first year`;
                  }
                  if (fullValue > propertyValue.max) {
                    result.proc = `$${new Intl.NumberFormat("en-EN", {
                      maximumFractionDigits: 2
                    }).format((value2 / 100) * propertyValue.max)} first year`;
                  }
                } else {
                  result.proc = `$${new Intl.NumberFormat("en-EN", {
                    maximumFractionDigits: 2
                  }).format((value2 / 100) * fullValue)} first year`;
                }

                break;
              default:
                if (
                  fullValue < propertyValue.min ||
                  fullValue > propertyValue.max
                ) {
                  if (fullValue < propertyValue.min) {
                    result.proc = new Intl.NumberFormat("en-EN", {
                      style: "percent",
                      maximumFractionDigits: 2
                    }).format(value2 / propertyValue.min);
                  }
                  if (fullValue > propertyValue.max) {
                    result.proc = new Intl.NumberFormat("en-EN", {
                      style: "percent",
                      maximumFractionDigits: 2
                    }).format(value2 / propertyValue.max);
                  }
                } else {
                  result.proc = new Intl.NumberFormat("en-EN", {
                    style: "percent",
                    maximumFractionDigits: 2
                  }).format(value2 / fullValue);
                }
            }
          }
        }
      }
    }
    return result;
  };

  tipFormatter = (value, flag) => {
    switch (flag) {
      case "years":
        return this.tipFormatterYears;
      case "%":
        return this.tipFormatterProc;
      default:
        return this.tipFormatterDollar;
    }
  };

  tipFormatterDollar = value => {
    return `$${new Intl.NumberFormat("en-EN", {
      maximumFractionDigits: 2
    }).format(value)}`;
  };

  tipFormatterProc = value => {
    return `${new Intl.NumberFormat("en-EN", {
      maximumFractionDigits: 2
    }).format(value)} %`;
  };

  tipFormatterYears = value => {
    return `${new Intl.NumberFormat("en-EN", {
      maximumFractionDigits: 2
    }).format(value)} years`;
  };

  // eslint-disable-next-line consistent-return
  showPopover() {
    if (typeof this.props.popover === "object") {
      return (
        <Popover placement="top" content={this.props.popover} trigger="click">
          <Button type="primary" shape="circle">
            i
          </Button>
        </Popover>
      );
    }
  }

  render() {
    const { Text } = Typography;
    const name = this.props.nameValue;
    return (
      <div className="CardComponent">
        <Divider orientation="left">{this.props.title}</Divider>
        <Card>
          <Card.Grid hoverable={false}>
            <Text type="secondary">{this.props.text}</Text>
          </Card.Grid>
          <Card.Grid hoverable={false}>
            <Input
              name={name}
              value={[this.lookForFieldName(name)]}
              prefix={this.props.prefix}
              suffix={this.props.suffix}
              onChange={e => this.setDataInStore(e.target.value, e.target.name)}
             // onBlur={e => this.checkDataInStore(e.target.value, e.target.name)}
            />
            <span className="input-helper">
              <Text type="secondary">
                {this.lookForOptions(name, this.props.isProc).proc}
              </Text>
            </span>
            {this.showPopover()}
          </Card.Grid>
          <Card.Grid hoverable={false}>
            <span className="minSlider slider-values">
              {new Intl.NumberFormat("en-EN", {
                maximumFractionDigits: 2
              }).format(this.lookForOptions(name).min)}
            </span>
            <Slider
              tipFormatter={this.tipFormatter(
                this.lookForFieldName(name),
                this.props.suffix
              )}
              min={this.lookForOptions(name).min}
              max={this.lookForOptions(name).max}
              step={this.lookForOptions(name).step}
              onChange={v => this.setDataInStore(v, name)}
              value={this.lookForFieldName(name)}
            />
            <span className="maxSlider slider-values">
              {new Intl.NumberFormat("en-EN", {
                maximumFractionDigits: 2
              }).format(this.lookForOptions(name).max)}
            </span>
          </Card.Grid>
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

export default connect(mapStateToProps, { checkValue, setValue })(
  CardComponent
);
