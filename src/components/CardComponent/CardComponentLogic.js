import PropTypes from "prop-types";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { setValue } from "../../actions";
import config from "../../configs/configCards";
import configPopover from "../../configs/configPopover";
import CardComponent from "./CardComponent";

const CardComponentLogic = props => {
  const { name } = props;
  const {
    title,
    text,
    prefix,
    suffix,
    popoverCheckValue,
    min,
    max,
    step,
    dependencies
  } = config[name];
  const data = useSelector(state => state.state[name]);
  const data2 = useSelector(state2 => state2.state[popoverCheckValue]);
  const dispatch = useDispatch();

  const popovers = configPopover.popover;

  /**
   * Returns text for popover from configPopover
   * nameField - name of field
   */
  function returnPopover(nameField) {
    let result = {};
    if (typeof popovers[nameField] !== "undefined") {
      if (popovers[nameField].conditions === true) {
        const item = popovers[nameField].response;
        let numberCondition = 0;
        if (data2.val > item[1].value && data2.val <= item[2].value)
          numberCondition = 1;
        if (data2.val > item[2].value && data2.val <= item[3].value)
          numberCondition = 2;
        if (data2.val > item[3].value) numberCondition = 3;
        result = popovers[nameField].response[numberCondition].text;
      } else {
        result = popovers[nameField].response.text;
      }
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
      step={step}
      popover={returnPopover(name)}
      min={min}
      max={max}
      val={data.val}
      dependencies={dependencies}
      onChange={v => dispatch(setValue(name, v))}
    />
  );
};

export default CardComponentLogic;

CardComponentLogic.propTypes = {
  name: PropTypes.string.isRequired
};
