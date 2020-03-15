import "./Charts.scss";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";
import { useSelector } from "react-redux";

import getMortgageCalculator from "../../lib/mortgage";

const Charts = () => {
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

  const options = {
    chart: { type: "spline" },
    title: { text: "Payments Shedule" },
    series: [{ data: arrayBalance }]
  };

  return (
    <div className="Charts">
      <div id="container">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
};

export default Charts;
