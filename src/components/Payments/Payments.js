import "./Payments.scss";

import { Button, Table } from "antd";
import JsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import React from "react";
import { useSelector } from "react-redux";

import configPayments from "../../configs/configPayments";
import getMortgageCalculator from "../../lib/mortgage";
import PaymentSummary from "./PaymentSummary";

const Payments = () => {
  const { columns, btn, headerText, nameFile, paymentSummary } = configPayments;
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
  const summaryBody = [
    payment.loanAmount.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }),
    payment.principalAndInterest.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }),
    `${payment.tax.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })} /year`,
    payment.insurance,
    payment.total.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    }),
    payment.termMonths
  ];
  let dataToBody = [];
  for (let i = 0; i < paymentSummary.length; i++) {
    dataToBody.push([paymentSummary[i], summaryBody[i]]);
  }

  function PdfFromHTML() {
    const doc = new JsPDF("p", "mm");
    doc.text("Paymentsdss", 40, 30);

    doc.autoTable({
      head: [],
      body: dataToBody,
      theme: "grid",
      margin: { top: 15 },
      didDrawPage() {
        doc.setTextColor(150);
        doc.setFontSize(12);
        doc.text(headerText, 40, 10);
      }
    });

    const {columns} = configPayments;
    const rows = formattedPaymentsArray(payment.paymentSchedule);

    doc.autoTable(columns, rows, {
      theme: "grid",
      margin: { top: 15 },
      didDrawPage() {
        doc.setTextColor(150);
        doc.setFontSize(12);
        doc.text(headerText, 40, 10);
      }
    });
    doc.save(nameFile);
  }

  return (
    <div className="Payments">
      {showMortgage(payment)}
      <Button className="btn-pdf" type="primary" onClick={() => PdfFromHTML()}>
        {btn}
      </Button>
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
