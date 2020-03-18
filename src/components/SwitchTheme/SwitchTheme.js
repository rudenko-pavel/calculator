import "./SwitchTheme.scss";

import { Switch } from "antd";
import PropTypes from "prop-types";
import React from "react";

const SwitchTheme = props => {
  const { onChangeTheme } = props;

  // return value[string] to parent
  function onChange(checked) {
    let result = "light";
    if (checked === false) result = "dark";
    console.log(`switch to ${checked}`);
    onChangeTheme(result);
  }

  return (
    <div className="swich-theme-wrapper">
      <Switch className="swich-theme" defaultChecked onChange={onChange} />
    </div>
  );
};

export default SwitchTheme;

SwitchTheme.propTypes = {
  onChangeTheme: PropTypes.func.isRequired
};
