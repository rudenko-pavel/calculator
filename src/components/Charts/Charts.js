import "./Charts.scss";

import { LineChart } from "@opd/g2plot-react";
import React from "react";
import { useSelector } from "react-redux";

import configChart from "../../configs/configChart";
import getMortgageCalculator from "../../lib/mortgage";

const Charts = () => {
  const { title, description, serie } = configChart;
  const stateValue = useSelector(state => state.state);
  let dataChart = [];

  const mortgageCalculator = getMortgageCalculator();
  mortgageCalculator.totalPrice = stateValue.propertyValue.val;
  mortgageCalculator.downPayment = stateValue.downPaymentValue.val;
  mortgageCalculator.interestRate = 0.045;
  mortgageCalculator.months = stateValue.amortizationValue.val * 12;
  mortgageCalculator.taxRate = 0.012;
  mortgageCalculator.insuranceRate = 0.0013;
  mortgageCalculator.mortgageInsuranceRate = 0.01;
  mortgageCalculator.mortgageInsuranceEnabled = true;
  mortgageCalculator.mortgageInsuranceThreshold = 0.2;
  mortgageCalculator.additionalPrincipalPayment = 100;
  const payment = mortgageCalculator.calculatePayment();
  const arrayPaymentShedule = payment.paymentSchedule;

  arrayPaymentShedule.forEach(function aaa(item) {
    const itemBalance = {
      count: item.count,
      type: serie[0],
      value: item.balance
    };
    const itemInterestPayment = {
      count: item.count,
      type: serie[1],
      value: item.interestPayment
    };
    const itemTotalInterest = {
      count: item.count,
      type: serie[2],
      value: item.totalInterest
    };
    const itemPrincipalPayment = {
      count: item.count,
      type: serie[3],
      value: item.principalPayment
    };
    const itemTotalPayments = {
      count: item.count,
      type: serie[4],
      value: item.totalPayments
    };
    dataChart = [
      ...dataChart,
      itemBalance,
      itemInterestPayment,
      itemTotalInterest,
      itemPrincipalPayment,
      itemTotalPayments
    ];
  });

  const config1 = {
    title: {
      visible: true,
      text: title
    },
    description: {
      visible: true,
      text: description
    },
    padding: "auto",
    forceFit: true,
    data: dataChart,
    xField: "count",
    yField: "value",
    yAxis: {
      label: {
        formatter: v => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, s => `${s},`)
      }
    },
    legend: {
      position: "top"
    },
    seriesField: "type",
    responsive: true
  };

  return (
    <div className="Charts">
      <LineChart {...config1} />
    </div>
  );
};

export default Charts;
