import "./RightPart.scss";

import { Button, Divider, Table } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { resetValues } from "../../actions";
import configTFE from "../../configs/configTextForElements";
import getMortgageCalculator from "../../lib/mortgage";
import { returnFormatter } from "../CardComponent/CardComponent";

const RightPart = () => {
  const { buttons, divElements } = configTFE;
  const dispatch = useDispatch();

  const data = useSelector(s => s.state);
  const mortgageCalculator = getMortgageCalculator();
  mortgageCalculator.totalPrice = data.propertyValue.val;
  mortgageCalculator.downPayment = data.downPaymentValue.val;
  mortgageCalculator.interestRate = data.mortgageRateValue.val / 100;
  mortgageCalculator.months = data.amortizationValue.val * 12;
  mortgageCalculator.taxRate =
    data.amountAnnualTaxesValue.val / data.propertyValue.val;
  mortgageCalculator.insuranceRate = data.ownerInsuranceValue.val / 100;
  const payment = mortgageCalculator.calculatePayment();

  // tax + maint + insurance + heating
  const mMonthlyExpenses =
    (data.amountAnnualTaxesValue.val +
      data.propertyValue.val * (data.maintenanceValue.val / 100) +
      data.propertyValue.val * (data.ownerInsuranceValue.val / 100) +
      data.annualHeatingCostsValue.val) /
    12;

  const rMonthlyExpenses = data.rentersInsuranceValue.val;

  const mTotal = payment.principalAndInterest + mMonthlyExpenses;
  const rTotal = data.rentValue.val + rMonthlyExpenses;

  const total = Math.max(mTotal, rTotal);
  const mSaving = total - mTotal;
  const rSaving = total - rTotal;

  // data for Table .summary-table
  const short = divElements.summaryBlock;
  const columns = [
    { title: short.divEmpty.text, dataIndex: "isTitle", key: "isTitle" },
    { title: short.div1.text, dataIndex: "isRent", key: "isRent" },
    { title: short.div2.text, dataIndex: "isBuy", key: "isBuy" }
  ];
  const dataSource = [
    {
      isTitle: short.div3.text,
      isRent: returnFormatter(data.rentValue.val, "$"),
      isBuy: returnFormatter(payment.principalAndInterest, "$")
    },
    {
      isTitle: short.div4.text,
      isRent: returnFormatter(rMonthlyExpenses, "$"),
      isBuy: returnFormatter(mMonthlyExpenses, "$")
    },
    {
      isTitle: short.div5.text,
      isRent: returnFormatter(rSaving, "$"),
      isBuy: returnFormatter(mSaving, "$")
    }
  ];

  return (
    <div className="RightPart">
      <h3>{divElements.summaryBlock.div0.text}</h3>
      <Table
        className="summary-table"
        columns={columns}
        dataSource={dataSource}
        rowKey={record => record.isTitle}
      />
      <Divider dashed />
      <Button type="primary" onClick={() => dispatch(resetValues([]))}>
        {buttons.resetValues.btn1.text}
      </Button>
    </div>
  );
};

export default RightPart;
