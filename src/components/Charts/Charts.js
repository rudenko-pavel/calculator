import "./Charts.scss";

import React from "react";

import configChart from "../../configs/configChart";
import { useLogic } from "../../logic";
import ChartLogic from "./ChartLogic";

const Charts = () => {
  const { serie } = configChart;
  const fieldsChart = [];
  // IN THIS COMPONENT PREPARE DATA IN THE CORRECT FORMAT:

  /* Stackedcolumn:
   * data format = [
   *   {name: "<name of  row 1>", "<name of column1>": 18.9, "<name of column2>": 28.8, ... },
   *   {name: "<name of  row 2>", "<name of column1>": 16.5, "<name of column2>": 14.7, ... }
   * ]
   */

  /* Line Chart:
   * data format = [
   *   {name: "<name of column 1>", name_of_value: 18.9, ... },
   *   {name: "<name of column 2>", name_of_value: 16.5, ... }
   * ]
   */

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

  return (
    <div className="Charts">
      <ChartLogic
        fieldsChart={fieldsChart}
        source1={objBalance}
        source2={objInterestPayment}
        source3={arrayTotalInterest}
        source4={objPrincipalPayment}
        source5={objTotalPayments}
      />
    </div>
  );
};

export default Charts;
