import "./CardComponent.scss";

import { Card, InputNumber, Slider } from "antd";
import PropTypes from "prop-types";
import React from "react";

const CardInput = props => {
  const {
    value,
    name,
    prefix,
    suffix,
    min,
    max,
    step,
    onChange,
    //
    onHandleChangeNumeric,
    onAfterChange,
    returnFormatter,
    returnParcer,
    formattedData
  } = props;

  const marks = {
    [min]: formattedData(min, prefix, suffix),
    [max]: formattedData(max, prefix, suffix)
  };

  return (
    <>
      <Card.Grid hoverable={false}>
        <InputNumber
          name={name}
          value={value}
          prefix={prefix}
          suffix={suffix}
          min={min}
          max={max}
          step={step}
          formatter={valIn => returnFormatter(valIn, prefix, suffix)}
          parser={valIn => returnParcer(valIn, prefix, suffix)}
          onChange={onHandleChangeNumeric}
          onBlur={() => onAfterChange(value)}
        />
      </Card.Grid>
      <Card.Grid hoverable={false}>
        <Slider
          marks={marks}
          tipFormatter={formattedData}
          onAfterChange={() => onAfterChange(value)}
          min={min}
          max={max}
          step={step}
          onChange={onChange}
          value={value}
        />
      </Card.Grid>
    </>
  );
};

export default CardInput;

CardInput.propTypes = {
  name: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  onHandleChangeNumeric: PropTypes.func.isRequired,
  onAfterChange: PropTypes.func.isRequired,
  returnFormatter: PropTypes.func.isRequired,
  returnParcer: PropTypes.func.isRequired,
  formattedData: PropTypes.func.isRequired
};

CardInput.defaultProps = {
  prefix: "",
  suffix: ""
};
