/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import React from "react";

import configChart from "../../configs/configChart";
import LineChart from "./views/LineChart";
import StackedColumn from "./views/StackedColumn";

const ChartView = props => {
  const { data1, data2, data3, fieldsChart } = props;
  const { names } = configChart;

  return (
    <div>
      <StackedColumn data={data1} name={names[0]} fieldsChart={fieldsChart} />
      <StackedColumn data={data2} name={names[1]} fieldsChart={fieldsChart} />
      <LineChart data={data3} name={names[2]} />
    </div>
  );
};

export default ChartView;

ChartView.propTypes = {
  fieldsChart: PropTypes.array.isRequired,
  data1: PropTypes.array.isRequired,
  data2: PropTypes.array.isRequired,
  data3: PropTypes.array.isRequired
};
