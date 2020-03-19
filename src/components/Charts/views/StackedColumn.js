/* eslint-disable react/forbid-prop-types */
import DataSet from "@antv/data-set";
import { Axis, Chart, Geom, Legend, Tooltip } from "bizcharts";
import PropTypes from "prop-types";
import React from "react";

const StackedColumn = props => {
  const { data, name, fieldsChart } = props;

  const chart = new DataSet();
  const chartData = chart.createView().source(data);
  chartData.transform({
    type: "fold",
    fields: fieldsChart,
    key: "Key",
    value: "Value"
  });

  return (
    <div className="chart-area stacked-column-chart">
      <h3>{name}</h3>
      <Chart height={300} data={chartData} forceFit>
        <Legend />
        <Axis name="Key" />
        <Axis name="Value" />
        <Tooltip />
        <Geom
          type="intervalStack"
          position="Key*Value"
          color="name"
          style={{
            stroke: "#fff",
            lineWidth: 1
          }}
        />
      </Chart>
    </div>
  );
};

export default StackedColumn;

StackedColumn.propTypes = {
  fieldsChart: PropTypes.array.isRequired,
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};
