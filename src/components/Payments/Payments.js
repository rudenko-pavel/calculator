import "./Payments.scss";

import { Table } from "antd";
import React from "react";
import { useSelector } from "react-redux";

import configPayments from "../../configs/configPayments";
import getMortgageCalculator from "../../lib/mortgage";
import PaymentSummary from "./PaymentSummary";

const Payments = () => {
  const { columns } = configPayments;
  const data = useSelector(state => state.state);

  function showMortgage(payment) {
    return <PaymentSummary payment={payment} />;
  }

  function formattedPaymentsArray(obj) {
    const newArr = [];
    const formatter = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });

    obj.forEach(item => {
      const newItem = { ...item };
      for (const [key, val] of Object.entries(item)) {
        if (key !== "count") newItem[key] = formatter.format(val);
      }
      newArr.push(newItem);
    });
    return newArr;
  }

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

  return (
    <div className="Payments">
      {showMortgage(payment)}
      <hr />
      <Table
        className="payments"
        columns={columns}
        dataSource={formattedPaymentsArray(payment.paymentSchedule)}
        rowKey={record => record.count}
        pagination={{
          defaultPageSize: 12,
          showSizeChanger: true,
          pageSizeOptions: ["12", "24", "60", "120"]
        }}
      />
    </div>
  );
};

export default Payments;
