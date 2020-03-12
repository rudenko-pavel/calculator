const configPayments = {
  columns: [
    { title: "Count", dataIndex: "count", key: "count" },
    {
      title: "Interest Payment",
      dataIndex: "interestPayment",
      key: "interestPayment"
    },
    {
      title: "Total Interest",
      dataIndex: "totalInterest",
      key: "totalInterest"
    },
    {
      title: "Principal Payment",
      dataIndex: "principalPayment",
      key: "principalPayment"
    },
    {
      title: "Total Payment",
      dataIndex: "totalPayment",
      key: "totalPayment"
    },
    {
      title: "Total Payments",
      dataIndex: "totalPayments",
      key: "totalPayments"
    },
    { title: "Balance", dataIndex: "balance", key: "balance" }
  ],
  paymentSummary: [
    "loanAmount",
    "principalAndInterest",
    "tax",
    "insurance",
    "total",
    "termMonths"
  ]
};

export default configPayments;
