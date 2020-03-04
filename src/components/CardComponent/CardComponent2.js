import "./CardComponent.scss";

import {
  Button,
  Card,
  Divider,
  InputNumber,
  Popover,
  Slider,
  Typography
} from "antd";
import PropTypes from "prop-types";
import React, { useState } from "react";

const CardComponent = props => {
  const { Text } = Typography;
  const {
    name,
    title,
    text,
    prefix,
    suffix,
    min,
    max,
    step,
    popover,
    dependencies,
    onChange
  } = props;

  /**
   * Returns formatted string: pref + val + suff
   * val, pref, suff - newValue, preffix, suffix
   */
  function returnFormatter(val, pref, suff) {
    let formatter;
    if (pref === "$") {
      formatter = `${pref} ${val}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    } else {
      formatter = `${val}${suff}`;
    }
    return formatter;
  }

  function returnParcer(val, pref, suff) {
    let parcer;
    if (pref === "$") {
      parcer = val.replace(/\$\s?|(,*)/g, "");
    } else {
      parcer = val.replace(`${suff}`, "");
    }
    return parcer;
  }

  // eslint-disable-next-line react/destructuring-assignment
  const [value, setValue] = useState(props.value);

  const marks = {
    [min]: min,
    [max]: max
  };

  return (
    <div className="CardComponent">
      <Divider orientation="left">{title}</Divider>
      <Card>
        <Card.Grid hoverable={false}>
          <Text type="secondary">{text}</Text>
        </Card.Grid>
        <Card.Grid hoverable={false}>
          <InputNumber
            name={name}
            value={value}
            prefix={prefix}
            suffix={suffix}
            min={min}
            max={max}
            step={step}
            formatter={val => returnFormatter(val, prefix, suffix)}
            parser={val => returnParcer(val, prefix, suffix)}
            onChange={v => setValue(v)}
            onBlur={() => onChange(value)}
          />
          {Object.keys(popover).length > 0 && (
            <Popover placement="top" content={popover} trigger="click">
              <Button type="primary" shape="circle">
                i
              </Button>
            </Popover>
          )}
        </Card.Grid>
        <Card.Grid hoverable={false}>
          <Slider
            marks={marks}
            /*  tipFormatter={// todo
              } */
            onAfterChange={() => onChange(value)}
            min={min}
            max={max}
            step={step}
            onChange={v => setValue(v)}
            value={value}
          />
        </Card.Grid>
      </Card>
    </div>
  );
};

export default CardComponent;

CardComponent.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  step: PropTypes.number.isRequired,
  popover: PropTypes.object,
  value: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  dependencies: PropTypes.array
};

CardComponent.defaultProps = {
  text: "",
  prefix: "",
  suffix: "",
  popover: "",
  dependencies: []
};
