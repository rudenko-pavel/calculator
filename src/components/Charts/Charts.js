import "./Charts.scss";

import DataSet from "@antv/data-set";
import { Axis, Chart, Geom, Legend, Tooltip } from "bizcharts";
import React from "react";

import configChart from "../../configs/configChart";
import { useLogic } from "../../logic";

const Charts = () => {
  const { serie } = configChart;
  const fieldsChart = [];
  // objects with values: Interest Payment, PrincipalPayment, ...
  const objInterestPayment = { name: serie[1] };
  const objPrincipalPayment = { name: serie[3] };

  const objBalance = { name: serie[0] };
  const objTotalPayments = { name: serie[4] };

  // amount for each the year (Interest Payment, PrincipalPayment, ...)
  let amountForEachYearInterestPayment = 0;
  let amountForEachYearPrincipalPayment = 0;
  let amountForEachYearBalance = 0;
  let amountForEachYearTotalPayments = 0;

  // arrays - data for different charts
  const arrayInterestPrincipal = [objInterestPayment, objPrincipalPayment];
  const arrayBalanceTotalPayments = [objBalance, objTotalPayments];
  let arrayTotalInterest = [];

  let numberOfYear = 1;

  const payment = useLogic();
  const arrayPaymentShedule = payment.paymentSchedule;

  const countOfString = arrayPaymentShedule.length;
  arrayPaymentShedule.forEach(function aaa(item, index) {
    amountForEachYearInterestPayment += item.interestPayment;
    amountForEachYearPrincipalPayment += item.principalPayment;

    amountForEachYearBalance += item.balance;
    amountForEachYearTotalPayments += item.totalPayments;

    if ((index % 12 === 11 && index !== 0) || countOfString - 1 === index) {
      const numberOfYearString = numberOfYear.toString();
      objInterestPayment[numberOfYearString] = amountForEachYearInterestPayment;
      objPrincipalPayment[
        numberOfYearString
      ] = amountForEachYearPrincipalPayment;

      objBalance[numberOfYearString] = amountForEachYearBalance;
      objTotalPayments[numberOfYearString] = amountForEachYearTotalPayments;

      const element = {
        month: numberOfYearString,
        tem: item.totalInterest
      };

      arrayTotalInterest = [...arrayTotalInterest, element];

      fieldsChart.push(numberOfYearString);

      amountForEachYearInterestPayment = 0;
      amountForEachYearPrincipalPayment = 0;
      amountForEachYearBalance = 0;
      amountForEachYearTotalPayments = 0;

      numberOfYear += 1;
    }
  });

  const chart1 = new DataSet();
  const chart1Data = chart1.createView().source(arrayBalanceTotalPayments);
  chart1Data.transform({
    type: "fold",
    fields: fieldsChart,
    key: "Key",
    value: "Value"
  });

  const chart2 = new DataSet();
  const chart2Data = chart2.createView().source(arrayInterestPrincipal);
  chart2Data.transform({
    type: "fold",
    fields: fieldsChart,
    key: "Key",
    value: "Value"
  });

  return (
    <div className="Charts">
      <Chart height={400} data={chart1Data} forceFit>
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

      <Chart height={400} data={chart2Data} forceFit>
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

      <Chart height={400} data={arrayTotalInterest} forceFit>
        <Axis name="month" />
        <Axis name="tem" />
        <Tooltip
          containerTpl='<div class="g2-tooltip"><p class="g2-tooltip-title"></p><table class="g2-tooltip-list"></table></div>'
          itemTpl='<tr class="g2-tooltip-list-item"><td style="color:{color}">{name}</td><td>{value}</td></tr>'
          offset={50}
          g2-tooltip={{
            position: "absolute",
            visibility: "hidden",
            border: "1px solid #efefef",
            backgroundColor: "white",
            color: "#000",
            opacity: "0.8",
            padding: "5px 15px",
            transition: "top 200ms,left 200ms"
          }}
          g2-tooltip-list={{
            margin: "10px"
          }}
        />
        <Geom type="line" position="month*tem" />
      </Chart>
    </div>
  );
};

export default Charts;
