import "./Charts.scss";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import mortgageJs from "mortgage-js";
import React from "react";
import { connect } from "react-redux";

class Charts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      options: {
        chart: {
          type: "spline"
        },
        title: {
          text: "Payments Shedule"
        }
      }
    };
  }

  componentDidMount() {
    this.getBalanceValues();
  }

  getBalanceValues = () => {
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
    const arrayPaymentShedule = payment.paymentSchedule;
    const arrayBalance = arrayPaymentShedule.map(v => v.balance);

    this.setState(prevState => ({
      options: {
        ...prevState.options,
        series: { ...prevState.options.series, data: arrayBalance }
      }
    }));
  };

  render() {
    return (
      <div className="Charts">
        <div id="container">
          <HighchartsReact
            highcharts={Highcharts}
            options={this.state.options}
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

export default connect(mapStateToProps)(Charts);
