/* eslint-disable no-restricted-syntax */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import "./CardComponent.scss";

import { Button, Card, Input, Popover, Slider, Typography } from "antd";
import React from "react";
import { connect } from "react-redux";

import { setValue } from "../../actions";

class CardComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // eslint-disable-next-line react/no-unused-state
      popover: {
        downPaymentValue: {
          text:
            "<div>The minimum downpayment is based on property value: <li>5% of the first $500k</li><li>10% of the remainder if less than $1M</li><li>A property over 1 million requires a 20% downpayment</li></div>"
        },
        annualTaxesValue: {
          text:
            "<div><p>These amounts are determined by your municipality, according to the value of the property.</p><p>School taxes are only applicable in Quebec.</p></div>"
        }
      }
    };
  }

  setDataInStore = (e, name) => {
    this.props.setValue(name, e, this.props.state.sliderData);
  };

  lookForFieldName = name => {
    let fieldValue = "";
    for (const [key, value] of Object.entries(this.props.state)) {
      if (`${key}` === name) {
        fieldValue = value;
      }
    }
    return fieldValue;
  };

  lookForInSliderData = name => {
    const result = [];
    for (const [key, value] of Object.entries(this.props.state.sliderData)) {
      if (`${key}` === name) {
        // eslint-disable-next-line no-restricted-syntax
        for (const [key2, value2] of Object.entries(value)) {
          result[`${key2}`] = value2;
        }
      }
    }
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
        <Card title={this.props.title} className="default-data">
          <Card.Grid hoverable={false}>
            <Text type="secondary">{this.props.text}</Text>
          </Card.Grid>
          <Card.Grid hoverable={false}>
            <Input
              name={name}
              value={this.lookForFieldName(name)}
              prefix={this.props.prefix}
              suffix={this.props.suffix}
              onChange={e => this.setDataInStore(e.target.value, e.target.name)}
            />
            <Text code>
              Between {this.lookForInSliderData(name).min} -{" "}
              {this.lookForInSliderData(name).max}{" "}
            </Text>
          </Card.Grid>
          <Card.Grid hoverable={false}>
            <Slider
              min={this.lookForInSliderData(name).min}
              max={this.lookForInSliderData(name).max}
              step={this.lookForInSliderData(name).step}
              onChange={v => this.setDataInStore(v, name)}
              value={this.lookForFieldName(name)}
            />
            {this.showPopover()}
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
