const configPayments = {
  btn: "Create PDF",
  nameFile: "Mortgage_OurBeautifulSite.pdf",
  headerText: "www.OurBeautifulSite.com",
  columns: [
    {
      title: "Count",
      dataIndex: "count",
      key: "count",
      width: 100,
      fixed: "left"
    },
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
    "Loan Amount",
    "Principal and Interest",
    "Tax",
    "Insurance",
    "Total",
    "Term Months"
  ]
};

export default configPayments;
