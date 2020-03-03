import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setValue } from "../../actions";
import CardComponent2 from "./CardComponent2";

const CardComponentLogic = props => {
  const {
    name,
    title, // todo move title and text where min and max is, prefix and suffix too
    text,
    prefix,
    suffix,
    popover
  } = props;

  const data = useSelector(state => state[name]);
  console.log("data ", data);

  const dispatch = useDispatch();

  return (
    <CardComponent2
      title={title}
      text={text}
      name={name}
      prefix={prefix}
      suffix={suffix}
      step={10}
      popover={popover}
      min={0}
      max={234560}
      value={10}
      onChange={v => dispatch(setValue(name, v))}
    />
  );
};

export default CardComponentLogic;

CardComponentLogic.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  prefix: PropTypes.string,
  suffix: PropTypes.string,
  popover: PropTypes.string
};

CardComponentLogic.defaultProps = {
  prefix: "",
  suffix: "",
  popover: ""
};
