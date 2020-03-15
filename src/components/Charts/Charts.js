import "./Charts.scss";

import Highcharts from "highcharts";
import React from "react";
import {
  Caption,
  Chart,
  HighchartsChart,
  Legend,
  LineSeries,
  Subtitle,
  Title,
  Tooltip,
  withHighcharts,
  XAxis,
  YAxis
} from "react-jsx-highcharts";
import { useSelector } from "react-redux";

import configChart from "../../configs/configChart";
import getMortgageCalculator from "../../lib/mortgage";

const Charts = () => {
  const { title, subtitle, xaxisTitle, yaxisTitle, caption } = configChart;
  const data = useSelector(state => state.state);

  const mortgageCalculator = getMortgageCalculator();
  mortgageCalculator.totalPrice = data.propertyValue.val;
  mortgageCalculator.downPayment = data.downPaymentValue.val;
  mortgageCalculator.interestRate = 0.045;
  mortgageCalculator.months = data.amortizationValue.val * 12;
  mortgageCalculator.taxRate = 0.012;
  mortgageCalculator.insuranceRate = 0.0013;
  mortgageCalculator.mortgageInsuranceRate = 0.01;
  mortgageCalculator.mortgageInsuranceEnabled = true;
  mortgageCalculator.mortgageInsuranceThreshold = 0.2;
  mortgageCalculator.additionalPrincipalPayment = 100;
  const payment = mortgageCalculator.calculatePayment();
  const arrayPaymentShedule = payment.paymentSchedule;
  const arrayBalance = arrayPaymentShedule.map(v => v.balance);
  const arrayInterestPayment = arrayPaymentShedule.map(v => v.interestPayment);
  const arrayTotalInterest = arrayPaymentShedule.map(v => v.totalInterest);
  const arrayPrincipalPayment = arrayPaymentShedule.map(
    v => v.principalPayment
  );
  const arrayTotalPayments = arrayPaymentShedule.map(v => v.totalPayments);
  // console.log("arrayBalance ", arrayBalance,arrayPaymentShedule)

  const plotOptions = {
    series: {
      pointStart: 1
    }
  };

  return (
    <div className="Charts">
      <HighchartsChart plotOptions={plotOptions}>
        <Chart />
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
        <Legend layout="vertical" align="right" verticalAlign="middle" />
        <Tooltip valuePrefix="$ " />
        <XAxis>
          <XAxis.Title>{xaxisTitle}</XAxis.Title>
        </XAxis>
        <YAxis>
          <YAxis.Title>{yaxisTitle}</YAxis.Title>
          <LineSeries name="arrayBalance" data={arrayBalance} />
          <LineSeries name="arrayInterestPayment" data={arrayInterestPayment} />
          <LineSeries name="arrayTotalInterest" data={arrayTotalInterest} />
          <LineSeries
            name="arrayPrincipalPayment"
            data={arrayPrincipalPayment}
          />
          <LineSeries name="arrayTotalPayments" data={arrayTotalPayments} />
        </YAxis>
        <Caption align="center">{caption}</Caption>
      </HighchartsChart>
    </div>
  );
};

export default withHighcharts(Charts, Highcharts);
