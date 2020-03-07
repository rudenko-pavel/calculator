import { Button, Card, Col, Divider, Drawer, Row, Typography } from "antd";
import PropTypes from "prop-types";
import React from "react";
import { useSelector } from "react-redux";

import config from "../../configs/configCards";
//import ShowData from "./ShowData";

const ShowDataLogic = props => {
  const { name } = props;
  const { prefix, suffix, title } = config[name];

  const data = useSelector(state => state.state[name]);
  console.log("ShowDataLogic ", data);
  const { Text } = Typography;

  return (
    <div>
      <Row>
        <Col lg={15} md={15} sm={15} xs={15}>
          {title}:
        </Col>
        <Col lg={9} md={9} sm={9} xs={9}>
          <span>
            {prefix} {new Intl.NumberFormat().format(data.val)} {suffix}
          </span>
        </Col>
      </Row>
    </div>
  );
};

export default ShowDataLogic;

ShowDataLogic.propTypes = {
  name: PropTypes.string.isRequired
};
