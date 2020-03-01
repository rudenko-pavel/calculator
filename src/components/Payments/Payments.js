import "./Payments.scss";

import { Button, Table } from "antd";
import mortgageJs from "mortgage-js";
import React from "react";
import { connect } from "react-redux";
import Pdf from "react-to-pdf";

const ref = React.createRef();

class Payments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columns: [
        {
          title: "Count",
          dataIndex: "count",
          key: "count"
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
        {
          title: "Balance",
          dataIndex: "balance",
          key: "balance"
        }
      ]
    };
  }

  showMortgage = payment => {

    return (
      <div>
        <p>loanAmount: {payment.loanAmount}</p>
        <p>principalAndInterest: {payment.principalAndInterest}</p>
        <p>tax: {payment.tax}</p>
        <p>insurance: {payment.insurance}</p>
        <p>total: {payment.total}</p>
        <p>termMonths: {payment.termMonths}</p>
      </div>
    );
  };

  showPageSize = value => {
    const txtValue = value.toString();
    return txtValue;
  };

  formattedPaymentsArray = obj => {
    const newArr = [];
    const formatter = new Intl.NumberFormat("en-EN", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2
    });

    obj.forEach(item => {
      const newItem = { ...item };
      for (const [key, val] of Object.entries(item)) {
        if (key!=='count')
          newItem[key] = formatter.format(val); 
      }
      newArr.push(newItem);
    });
    return newArr;
  };

  render() {
    const { state } = this.props;
    const mortgageCalculator = mortgageJs.createMortgageCalculator();
    mortgageCalculator.totalPrice = state.propertyValue.val;
    mortgageCalculator.downPayment = state.downPaymentValue.val;
    mortgageCalculator.interestRate = 0.045;
    mortgageCalculator.months = state.amortizationValue.val * 12;
    mortgageCalculator.taxRate = 0.012;
    mortgageCalculator.insuranceRate = 0.0013;
    mortgageCalculator.mortgageInsuranceRate = 0.01;
    mortgageCalculator.mortgageInsuranceEnabled = true;
    mortgageCalculator.mortgageInsuranceThreshold = 0.2;
    mortgageCalculator.additionalPrincipalPayment = 100;
    const payment = mortgageCalculator.calculatePayment();
    return (
      <div className="Payments">
        <Pdf targetRef={ref} filename="code-example.pdf">
          {({ toPdf }) => (
            <Button
              type="primary"
              className="show-selected-data"
              onClick={toPdf}
            >
              Generate Pdf
            </Button>
          )}
        </Pdf>
        <div ref={ref}>
          {this.showMortgage(payment)}
          <hr />
          <Table
            className="payments"
            columns={this.state.columns}
            dataSource={this.formattedPaymentsArray(payment.paymentSchedule)}
            rowKey={record => record.count}
            pagination={{
              defaultPageSize: mortgageCalculator.months,
              showSizeChanger: true,
              pageSizeOptions: [
                "12",
                "24",
                "60",
                "120",
                this.showPageSize(mortgageCalculator.months)
              ]
            }}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    state: state.state
  };
};

export default connect(mapStateToProps)(Payments);
