/* eslint-disable no-prototype-builtins */
/* eslint-disable no-case-declarations */
import { RESET_VALUES, SET_VALUE } from "../actions/types";

export const initialState = {
  rentValue: { val: 1000, min: 500, max: 4000, step: 50 },
  propertyValue: { val: 50000, min: 50000, max: 2000000, step: 10000 },
  downPaymentValue: { val: 2500, min: 2500, max: 50000, step: 10 },
  amortizationValue: { val: 25, min: 1, max: 25, step: 1 },
  mortgageRateValue: { val: 2, min: 1, max: 8, step: 0.1 },
  amountAnnualTaxesValue: { val: 500, min: 0, max: 2000, step: 10 },
  annualHeatingCostsValue: { val: 500, min: 0, max: 2000, step: 10 },
  buyingHomeValue: { val: 1000, min: 0, max: 2000, step: 10 },
  sellingHomeValue: { val: 2000, min: 0, max: 5000, step: 10 },
  maintenanceValue: { val: 1, min: 0, max: 5, step: 0.1 },
  ownerInsuranceValue: { val: 0.1, min: 0, max: 2, step: 0.1 },
  rentersInsuranceValue: { val: 250, min: 0, max: 1000, step: 50 },
  rentMonthlyCostsValue: { val: 300, min: 0, max: 1000, step: 10 },
  rateOfGrowthValue: { val: 2, min: 0, max: 5, step: 0.1 },
  returnInvestmentValue: { val: 4, min: 0, max: 10, step: 0.1 }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_VALUE:
      const { name, value } = action.payload;
      console.log("SET_VALUE", name, value);
      const newState = { ...state };
      newState[name].val = value;
      return newState;
    case RESET_VALUES:
      return { ...initialState };
    default:
      return state;
  }
};
