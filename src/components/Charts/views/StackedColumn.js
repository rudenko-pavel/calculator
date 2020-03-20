/* eslint-disable react/forbid-prop-types */
import DataSet from "@antv/data-set";
import { Axis, Chart, Geom, Legend, Tooltip } from "bizcharts";
import PropTypes from "prop-types";
import React from "react";

import { formattedData } from "../../CardComponent/helpers";

const StackedColumn = props => {
  const { data, name, fieldsChart } = props;

  const chart = new DataSet();
  const chartData = chart.createView().source(data);
  chartData.transform({
    type: "fold",
    fields: fieldsChart,
    key: "key",
    value: "value"
  });

  return (
    <div className="chart-area stacked-column-chart">
      <h3>{name}</h3>
      <Chart height={300} data={chartData} forceFit>
        <Legend />
        <Axis name="key" />
        <Axis
          name="value"
          label={{ formatter: val => `${formattedData(val, "$")}` }}
        />
        <Tooltip
          containerTpl='<div class="g2-tooltip"><p class="g2-tooltip-title"></p><table class="g2-tooltip-list"></table></div>'
          itemTpl='<tr class="g2-tooltip-list-item"><td style="color:{color}">{name}  {value}</td></tr>'
        />
        <Geom
          type="intervalStack"
          position="key*value"
          color="name"
          style={{
            stroke: "#fff",
            lineWidth: 1
          }}
          tooltip={[
            "key*value",
            (key, value) => {
              return {
                // Custom tooltip on the title display and so on.

                title: `Month# ${key}`,
                value: `${formattedData(value, "$")}`
              };
            }
          ]}
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
