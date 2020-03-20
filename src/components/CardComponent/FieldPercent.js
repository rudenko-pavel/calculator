import { InputNumber, Slider } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setValue } from "../../actions";

const FieldPercent = props => {
  const { name, percentOf } = props;
  const dispatch = useDispatch();

  function returnMoneyValue(a, b) {
    let result = (b / 100) * a;
    if (typeof a === "object") result = (b / 100) * parseFloat(a.target.value);
    return result;
  }

  function formattedData(valF) {
    const formatter = new Intl.NumberFormat("en-EN").format(valF);
    const result = `${formatter} %`;
    return result;
  }

  /**
   * Change value if value isNumber
   */
  function onHandleChangeNumeric(nameF, e) {
    if (!Number(e)) {
      return;
    }
    dispatch(setValue(nameF, e));
  }

  const data = useSelector(state => state.state[name].val);
  const dataPercentOf = useSelector(state => state.state[percentOf].val);
  function percent(a, b) {
    const result = (a / b) * 100;
    return result;
  }

  function returnFormatter(valF) {
    let abs = parseFloat(valF);
    abs = abs.toFixed(2);
    const formatter = `${abs} %`;
    return formatter;
  }
  function returnParcer(valP) {
    let parcer = valP.replace("%", "");
    parcer = parcer.replace(/\s+/g, "");
    parcer = parcer.toFixed(2);
    return parcer;
  }

  return (
    <div>
      <div>
        <InputNumber
          name={name}
          value={percent(data, dataPercentOf)}
          min={2.5}
          max={1600}
          step={0.5}
          formatter={valIn => returnFormatter(valIn)}
          parser={valIn => returnParcer(valIn)}
          onChange={e =>
            onHandleChangeNumeric(name, returnMoneyValue(e, dataPercentOf))
          }
          onBlur={v =>
            dispatch(setValue(name, returnMoneyValue(v, dataPercentOf)))
          }
        />
      </div>
      <div>
        <Slider
          tipFormatter={formattedData}
          onAfterChange={v =>
            dispatch(setValue(name, returnMoneyValue(v, dataPercentOf)))
          }
          min={2.5}
          max={1600}
          step={0.5}
          onChange={v =>
            dispatch(setValue(name, returnMoneyValue(v, dataPercentOf)))
          }
          value={percent(data, dataPercentOf)}
        />
      </div>
    </div>
  );
};

export default FieldPercent;

FieldPercent.propTypes = {
  name: PropTypes.string.isRequired,
  percentOf: PropTypes.string
};

FieldPercent.defaultProps = {
  percentOf: ""
};
