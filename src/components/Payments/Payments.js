import "./Payments.scss";

import { Divider, Table } from "antd";
import React from "react";

import configPayments from "../../configs/configPayments";
import { useLogic } from "../../logic";
import CreatePdf from "../CreatePdf/CreatePdf";
import PaymentSummary from "./PaymentSummary";

const Payments = () => {
  const { columns } = configPayments;

  // Create number formatter for $.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2
  });

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

  const payment = useLogic();

  return (
    <div className="Payments">
      <PaymentSummary payment={payment} />
      <CreatePdf payment={payment} />
      <Divider />
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
