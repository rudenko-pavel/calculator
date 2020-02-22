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
    this.props.setValue(name, receiveValue);
  };

  checkDataInStore = (e, name) => {
    this.props.checkValue(name, e, this.props.state.sliderData);
  };

  lookForFieldName = name => {
    //console.log("lookForFieldName() ", name, this.props.dependencies, this.props.state[this.props.dependencies]);
    let fieldValue = "";
    for (const [key, value] of Object.entries(this.props.state)) {
      if (`${key}` === name) {
        fieldValue = value;
      }
    }
    const dependValue = this.props.state[name] * 0.05;
    if (typeof(this.props.dependencies) === "string" && this.props.state.sliderData[this.props.dependencies].min !== dependValue) {
 //     console.log (this.props.state.sliderData[this.props.dependencies].min,dependValue)
   //   console.log (this.props.state.sliderData[this.props.dependencies].min,this.props.state.sliderData[this.props.dependencies].max)
      console.log ("---")
  //    this.props.setValue(this.props.state.sliderData[this.props.dependencies].min, dependValue);
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
              <Text type="secondary">
                {this.lookForInSliderData(name).proc}
              </Text>
            </span>
          </Card.Grid>
          <Card.Grid hoverable={false}>
            <span className="minSlider slider-values">
              {this.lookForInSliderData(name).min}
            </span>
            <Slider
              min={this.lookForInSliderData(name).min}
              max={this.lookForInSliderData(name).max}
              step={this.lookForInSliderData(name).step}
              onChange={v => this.setDataInStore(v, name)}
              value={this.lookForFieldName(name)}
            />
            <span className="maxSlider slider-values">
              {this.lookForInSliderData(name).max}
            </span>
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

export default connect(mapStateToProps, { checkValue, setValue })(
  CardComponent
);
