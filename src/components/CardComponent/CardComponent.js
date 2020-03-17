import "./CardComponent.scss";

import { InfoOutlined } from "@ant-design/icons";
import { Button, Card, InputNumber, Popover, Slider, Typography } from "antd";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";

/**
 * Returns formatted string: pref + valF + suff
 * valF, pref, suff - newValue, preffix, suffix
 */
export function returnFormatter(valF, pref, suff) {
  let formatter;
  if (pref === "$") {
    // https://stackoverflow.com/a/16233919
    /* return valF.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }); */
    // console.log("fuck: ", valF, pref);
    formatter = `${pref} ${Number(valF).toFixed(0)}`.replace(
      /\B(?=(\d{3})+(?!\d))/g,
      ","
    );
  } else {
    formatter = `${valF} ${suff}`;
  }
  return formatter;
}

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
    percentOf,
    onChange
  } = props;
  function returnParcer(valP, pref, suff) {
    let parcer;
    if (pref === "$") {
      parcer = valP.replace(/\$\s?|(,*)/g, "");
    } else {
      parcer = valP.replace(`${suff}`, "");
    }
    parcer = parcer.replace(/\s+/g, "");
    return parcer;
  }

  /**
   * Returns formatted string: pref + val + suff
   * val = number (Required),
   * pref,suff = string. Get variables from props (e.g. preffix="$", value=4000, suffix="")
   */
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

  /**
   * Change value if value isNumber
   */
  function onHandleChangeNumeric(e) {
    if (!Number(e)) {
      return;
    }
    setValue(e);
  }

  return (
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
          onBlur={() => onChange(value)}
        />
        <div>
          <Text type="secondary">{percentOf}</Text>
        </div>
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
  // popover: PropTypes.object,
  percentOf: PropTypes.string,
  val: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

CardComponent.defaultProps = {
  text: "",
  prefix: "",
  suffix: "",
  percentOf: ""
  // popover: ""
};
