import "./SwitchTheme.scss";

import { Switch } from "antd";
import PropTypes from "prop-types";
import React from "react";

import configTFE from "../../configs/configTextForElements";

const SwitchTheme = props => {
  const { onChangeTheme } = props;
  const { switchBlock } = configTFE;
  const light = switchBlock.values[0];
  const dark = switchBlock.values[1];

  // return value[string] to parent
  function onChange(checked) {
    let result = light;
    if (checked === false) result = dark;
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
