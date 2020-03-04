import "./TextPanel.scss";

import { Typography } from "antd";
import PropTypes from "prop-types";
import React from "react";

import config from "../../configs/configCards";

const TextPanel = props => {
  const { num } = props;
  const { Text } = Typography;

  const showText = config.panelNumber[num].text;
  return (
    <div className="TextPanel">
      <Text className="hint">{showText}</Text>
    </div>
  );
};

export default TextPanel;

TextPanel.propTypes = {
  num: PropTypes.string.isRequired
};
