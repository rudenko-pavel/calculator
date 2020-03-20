import "./CardComponent.scss";

import { Card, Typography } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

import config from "../../configs/configCards";
import CardInput from "./CardInput";
import {
  formattedData,
  returnFormatter,
  returnMoneyValue,
  returnParcer,
  returnPercentValue
} from "./helpers";

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
    onChange
  } = props;

  const [value, setValue] = useState(val);

  // update inner value if val is changed
  useEffect(() => {
    setValue(val);
  }, [val]);

  /**
   * Change value if value isNumber
   */
  function onHandleChangeNumeric(e) {
    if (!Number(e)) {
      return;
    }
    setValue(e);
  }

  const { percentOf, percentOf_suffix, percentOf_prefix } = config[name];
  const percentObj = useSelector(state => state.state[percentOf]);
  const dataPercentOf = percentOf ? percentObj.val : false;

  return (
    <div>
      <Card size="small" title={title}>
        <Card.Grid
          hoverable={false}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Text type="secondary">{text}</Text>
        </Card.Grid>
        <CardInput
          name={name}
          prefix={prefix}
          suffix={suffix}
          step={step}
          min={min}
          max={max}
          value={value}
          onChange={v => setValue(v)}
          onAfterChange={onChange}
          returnFormatter={returnFormatter}
          returnParcer={returnParcer}
          formattedData={formattedData}
          onHandleChangeNumeric={onHandleChangeNumeric}
        />
        {percentOf && (
          <CardInput
            name={name}
            step={0.5}
            prefix={percentOf_prefix}
            suffix={percentOf_suffix}
            min={returnMoneyValue(min, dataPercentOf)}
            max={returnMoneyValue(max, dataPercentOf)}
            value={returnMoneyValue(value, dataPercentOf)}
            onChange={v => setValue(returnPercentValue(v, dataPercentOf))}
            onAfterChange={v => onChange(returnPercentValue(v, dataPercentOf))}
            returnFormatter={returnFormatter}
            returnParcer={returnParcer}
            formattedData={formattedData}
            onHandleChangeNumeric={e =>
              onHandleChangeNumeric(returnPercentValue(e, dataPercentOf))
            }
          />
        )}
        {/* {percentOf && <FieldPercent name={name} percentOf={percentOf} />} */}
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
  val: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};
CardComponent.defaultProps = {
  text: "",
  prefix: "",
  suffix: ""
};
