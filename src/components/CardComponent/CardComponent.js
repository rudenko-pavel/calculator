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
      props.dependencies.forEach(function(entry) {
        let newValueMin;
        const eObject = { val: e };
        const ratio = props.downPaymentValueCondition(eObject);
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
                if (isNaN(newValue) === true) {
                  props.setValue(key, 0, "min");
                  props.setValue(key, 0, "max");
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
                if (isNaN(newValue) === true) props.setValue(key, 0, "max");
                else props.setValue(key, newValue * 0.04, "max");
                break;
              }
            }
            console.log("Excellent", entry);
            break;
          case "sellingHomeValue":
            for (const [key] of Object.entries(props.state)) {
              if (`${key}` === entry) {
                if (isNaN(newValue) === true) props.setValue(key, 0, "max");
                props.setValue(key, newValue * 0.1, "max");
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

  lookForOptions = name => {
    const result = [];
    for (const [key, value] of Object.entries(this.props.state)) {
      if (`${key}` === name) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key2, value2] of Object.entries(value)) {
          result[`${key2}`] = value2;
        }
      }
    }
    result.proc = "";
    return result;
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
              onBlur={e => this.checkDataInStore(e.target.value, e.target.name)}
            />
            <span className="input-helper">
              <Text type="secondary">??{this.lookForOptions(name).proc}</Text>
            </span>
            {this.showPopover()}
          </Card.Grid>
          <Card.Grid hoverable={false}>
            <span className="minSlider slider-values">
              {this.lookForOptions(name).min}
            </span>
            <Slider
              min={this.lookForOptions(name).min}
              max={this.lookForOptions(name).max}
              step={this.lookForOptions(name).step}
              onChange={v => this.setDataInStore(v, name)}
              value={this.lookForFieldName(name)}
            />
            <span className="maxSlider slider-values">
              {this.lookForOptions(name).max}
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
