/* eslint-disable react/forbid-prop-types */
import { Axis, Chart, Geom, Tooltip } from "bizcharts";
import PropTypes from "prop-types";
import React from "react";

const LineChart = props => {
  const { data, name } = props;

    // Create number formatter for $.
    const formatter = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });
    function formatValue(val){
      return val;
    }

  return (
    <div className="chart-area line-chart">
      <h3>{name}</h3>
      <Chart height={300} data={data} forceFit>
        <Axis name="month" />
        <Axis name="tem" />
        <Tooltip
          containerTpl='<div class="g2-tooltip"><p class="g2-tooltip-title"></p><table class="g2-tooltip-list"></table></div>'
          itemTpl='<tr class="g2-tooltip-list-item"><td>$</td><td>{value}</td></tr>'
          offset={50}
          g2-tooltip-list={{
            margin: "10px"
          }}
        />
        <Geom type="line" position="month*tem" />
      </Chart>
    </div>
  );
};

export default LineChart;

LineChart.propTypes = {
  data: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired
};
