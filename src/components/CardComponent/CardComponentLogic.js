import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setValue } from "../../actions";
import config from "../../configs/configCards";
import CardComponent from "./CardComponent";

const CardComponentLogic = props => {
  const { name } = props;
  const { title, text, prefix, suffix, percentOf } = config[name];
  const data = useSelector(state => state.state[name]);
  const dataPercentOf = useSelector(state => state.state[percentOf]);
  const dispatch = useDispatch();

  function returnPercent(a, b) {
    let result = "";
    console.log(a, typeof a, b, typeof b);
    if (typeof a === "object" && typeof b === "number") {
      result = `${((b / a.val) * 100).toFixed(2)} %`;
    }
    return result;
  }

  return (
    <CardComponent
      title={title}
      text={text}
      name={name}
      prefix={prefix}
      suffix={suffix}
      step={data.step}
      percentOf={returnPercent(dataPercentOf, data.val)}
      min={data.min}
      max={data.max}
      val={data.val}
      onChange={v => dispatch(setValue(name, v))}
    />
  );
};

export default CardComponentLogic;

CardComponentLogic.propTypes = {
  name: PropTypes.string.isRequired
};
