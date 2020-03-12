import { Col, Row } from "antd";
import PropTypes from "prop-types";
import React from "react";

const ShowData = props => {
  const { title, value } = props;

  return (
    <div>
      <Row>
        <Col lg={15} md={15} sm={15} xs={15}>
          {title}:
        </Col>
        <Col lg={9} md={9} sm={9} xs={9}>
          <span>{value}</span>
        </Col>
      </Row>
    </div>
  );
};

export default ShowData;

ShowData.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired
};
