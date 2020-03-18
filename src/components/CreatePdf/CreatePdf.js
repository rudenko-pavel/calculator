import { Button } from "antd";
import JsPDF from "jspdf";
// eslint-disable-next-line no-unused-vars
import autoTable from "jspdf-autotable";
import PropTypes from "prop-types";
import React from "react";

import configPayments from "../../configs/configPayments";
import configTextForElements from "../../configs/configTextForElements";

const CreatePdf = props => {
  const { payment } = props;
  const { paymentSummary } = configPayments;
  const { pdfBlock } = configTextForElements;

  // Create number formatter for $.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

  /* Return array of objects with formatted values
   * input: {count: 1, interestPayment: 178.13, totalInterest: 178.13,  ...}
   * output:{count: 1, interestPayment: "$178.13", totalInterest: "$178.13", ... }
   */
  function formattedPaymentsArray(obj) {
    const newArr = [];
    obj.forEach(item => {
      const newItem = { ...item };
      // eslint-disable-next-line array-callback-return
      Object.keys(item).map(function rk(key) {
        if (key !== "count") newItem[key] = formatter.format(item[key]);
      });
      newArr.push(newItem);
    });
    return newArr;
  }

  // create array of formatted data for doc.autoTable
  const summaryBody = [
    formatter.format(payment.loanAmount),
    formatter.format(payment.principalAndInterest),
    `${formatter.format(payment.tax)} /year`,
    payment.insurance,
    formatter.format(payment.total),
    payment.termMonths
  ];
  const dataToBody = [];
  for (let i = 0; i < paymentSummary.length; i += 1) {
    dataToBody.push([paymentSummary[i], summaryBody[i]]);
  }

  function PdfFromHTML() {
    const doc = new JsPDF("p", "mm");

    doc.autoTable({
      head: [],
      body: dataToBody,
      theme: "grid",
      margin: { top: 15 },
      didDrawPage() {
        doc.setTextColor(150);
        doc.setFontSize(12);
        doc.text(pdfBlock.headerText, 40, 10);
      }
    });

    const { columns } = configPayments;
    const rows = formattedPaymentsArray(payment.paymentSchedule);
    doc.autoTable(columns, rows, {
      theme: "grid",
      margin: { top: 15 },
      didDrawPage() {
        doc.setTextColor(150);
        doc.setFontSize(12);
        doc.text(pdfBlock.headerText, 40, 10);
      }
    });
    doc.save(pdfBlock.nameFile);
  }
  return (
    <div className="btn-pdf">
      <Button type="primary" onClick={() => PdfFromHTML()}>
        {pdfBlock.btn}
      </Button>
    </div>
  );
};

export default CreatePdf;

CreatePdf.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  payment: PropTypes.object.isRequired
};
