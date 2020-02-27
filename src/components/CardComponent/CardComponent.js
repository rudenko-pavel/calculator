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

import { setValue } from "../../actions";

class CardComponent extends React.Component {
  setDataInStore = (e, name, flag, dependencies, state) => {
    // eslint-disable-next-line no-param-reassign
    if (Number.isNaN(e)) e = 0;
    this.props.setValue(name, e, flag, dependencies, state);
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
    const { propertyValue } = this.props.state;
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
              onChange={e =>
                this.setDataInStore(parseFloat(e.target.value), e.target.name)
              }
              onBlur={e =>
                this.setDataInStore(
                  parseFloat(e.target.value),
                  e.target.name,
                  true,
                  this.props.dependencies,
                  this.props.state
                )
              }
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
              onChange={v =>
                this.setDataInStore(
                  parseFloat(v),
                  name,
                  true,
                  this.props.dependencies,
                  this.props.state
                )
              }
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

export default connect(mapStateToProps, { setValue })(CardComponent);
