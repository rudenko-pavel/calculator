import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

import config from "../../configs/configCards";
import ShowData from "./ShowData";

const ShowDataLogic = props => {
  const { name } = props;
  const { prefix, suffix, title } = config[name];

  const data = useSelector(state => state.state[name]);
  console.log(name,data)

  /**
   * Returns formatted string: pref + val + suff
   */
  function returnValue(val, pref = "", suff = "") {
    const result = pref + new Intl.NumberFormat().format(val) + suff;
    return result;
  }

  return (
    <ShowData title={title} value={returnValue(data.val, prefix, suffix)} />
  );
};

export default ShowDataLogic;

ShowDataLogic.propTypes = {
  name: PropTypes.string.isRequired
};
