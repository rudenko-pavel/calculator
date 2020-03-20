import { useSelector } from "react-redux";

import { returnMoneyValue } from "./components/CardComponent/helpers";
import getMortgageCalculator from "./lib/mortgage";

export default class Calculator {
  constructor() {
    this.mortgageCalculator = getMortgageCalculator();
  }

  setValue = (name, value) => {
    this.mortgageCalculator[name] = value;
    return this;
  };

  calculatePayment = () => {
    return this.mortgageCalculator.calculatePayment();
  };
}

export const useLogic = () => {
  const data = useSelector(s => s.state);
  const payment = new Calculator()
    .setValue("totalPrice", data.propertyValue.val)
    .setValue(
      "downPayment",
      returnMoneyValue(data.downPaymentValue.val, data.propertyValue.val)
    )
    .setValue("interestRate", data.mortgageRateValue.val / 100)
    .setValue("months", data.amortizationValue.val * 12)
    .setValue(
      "taxRate",
      data.amountAnnualTaxesValue.val / data.propertyValue.val
    )
    .setValue("insuranceRate", data.ownerInsuranceValue.val / 100)
    .calculatePayment();

  // tax + maint + insurance + heating
  const mMonthlyExpenses =
    (data.amountAnnualTaxesValue.val +
      data.propertyValue.val * (data.maintenanceValue.val / 100) +
      data.propertyValue.val * (data.ownerInsuranceValue.val / 100) +
      data.annualHeatingCostsValue.val) /
    12;
  payment.mMonthlyExpenses = mMonthlyExpenses;

  const rMonthlyExpenses = data.rentersInsuranceValue.val;
  payment.rMonthlyExpenses = rMonthlyExpenses;
  return payment;
};
