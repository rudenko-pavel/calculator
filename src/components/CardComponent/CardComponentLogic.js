import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setValue } from "../../actions";
import CardComponent2 from "./CardComponent2";
import config from "./config";

const CardComponentLogic = props => {
  const { name } = props;
  const {
    title,
    text,
    prefix,
    suffix,
    popover,
    min,
    max,
    step,
    dependencies
  } = config[name];
  const data = useSelector(state => state.state[name]);
  const dispatch = useDispatch();

  return (
    <CardComponent2
      title={title}
      text={text}
      name={name}
      prefix={prefix}
      suffix={suffix}
      step={step}
      popover={popover}
      min={min}
      max={max}
      value={data.val}
      dependencies={dependencies}
      onChange={v => dispatch(setValue(name, v))}
    />
  );
};

export default CardComponentLogic;

CardComponentLogic.propTypes = {
  name: PropTypes.string.isRequired
};
