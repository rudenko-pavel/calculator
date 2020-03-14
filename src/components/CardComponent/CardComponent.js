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
import React, { useEffect, useState } from "react";

// Q: pls remove CardComponent and rename this file to CardComponent.js
const CardComponent = props => {
  const { Text } = Typography;
  const {
    val,
    name,
    title,
    text,
    prefix,
    suffix,
    min,
    max,
    step,
    popover,
    dependencies, // Q: ?
    onChange
  } = props;

  /**
   * Returns formatted string: pref + val + suff
   * val, pref, suff - newValue, preffix, suffix
   */
  function returnFormatter(val, pref, suff) {
    let formatter;
    // Q: I know you can do better.... spaceially take a look on 3years in Amortization
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

  // Q: description?
  function formattedData(valF) {
    const formatter = new Intl.NumberFormat("en-EN").format(valF);
    const result = `${prefix}${formatter}${suffix}`;
    return result;
  }
  const [value, setValue] = useState(val);

  // update inner value if val is changed
  useEffect(() => {
    setValue(val);
  }, [val]);

  const marks = {
    [min]: formattedData(min),
    [max]: formattedData(max)
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
            formatter={valIn => returnFormatter(valIn, prefix, suffix)}
            parser={valIn => returnParcer(valIn, prefix, suffix)}
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
            tipFormatter={formattedData}
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
  // eslint-disable-next-line react/forbid-prop-types
  popover: PropTypes.object,
  val: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  dependencies: PropTypes.array
};

CardComponent.defaultProps = {
  text: "",
  prefix: "",
  suffix: "",
  popover: "",
  dependencies: []
};
