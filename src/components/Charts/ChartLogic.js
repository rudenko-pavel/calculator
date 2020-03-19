/* eslint-disable react/forbid-prop-types */
import PropTypes from "prop-types";
import React from "react";

import ChartView from "./ChartView";

const ChartLogic = props => {
  const { fieldsChart, source1, source2, source3, source4, source5 } = props;

  // union objects into one array for show in the same chart
  const data1 = [source1, source5];
  const data2 = [source2, source4];
  const data3 = source3;

  return (
    <div>
      <ChartView
        data1={data1}
        data2={data2}
        data3={data3}
        fieldsChart={fieldsChart}
      />
    </div>
  );
};

export default ChartLogic;

ChartLogic.propTypes = {
  fieldsChart: PropTypes.array.isRequired,
  source1: PropTypes.object.isRequired,
  source2: PropTypes.object.isRequired,
  source3: PropTypes.array.isRequired,
  source4: PropTypes.object.isRequired,
  source5: PropTypes.object.isRequired
};
