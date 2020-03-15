/* eslint-disable no-restricted-syntax */
/* eslint-disable no-prototype-builtins */
/* eslint-disable no-case-declarations */
import { RESET_VALUES, SET_VALUE } from "../actions/types";

const initialState = {
  rentValue: { val: 1000, min: 500, max: 4000, step: 50 },
  propertyValue: { val: 50000, min: 50000, max: 2000000, step: 10000 },
  downPaymentValue: { val: 2500, min: 2500, max: 50000, step: 10 },
  amortizationValue: { val: 5, min: 5, max: 25, step: 1 },
  mortgageRateValue: { val: 2.79, min: 0.01, max: 12, step: 0.01 },
  amountAnnualTaxesValue: { val: 500, min: 0, max: 2000, step: 10 },
  annualHeatingCostsValue: { val: 500, min: 0, max: 2000, step: 10 },
  buyingHomeValue: { val: 1000, min: 0, max: 2000, step: 10 },
  sellingHomeValue: { val: 2000, min: 0, max: 5000, step: 10 },
  maintenanceValue: { val: 1, min: 0, max: 5, step: 0.1 },
  ownerInsuranceValue: { val: 0.1, min: 0, max: 2, step: 0.1 },
  rentersInsuranceValue: { val: 250, min: 0, max: 1000, step: 50 },
  // rentMonthlyCostsValue: { val: 300, min: 0, max: 1000, step: 10 },
  rateOfGrowthValue: { val: 2, min: 0, max: 5, step: 0.1 },
  returnInvestmentValue: { val: 4, min: 0, max: 10, step: 0.1 }
};

// todo: yeah it's can be better: for now quick solution.
const getDeepCopy = obj => {
  return JSON.parse(JSON.stringify(obj));
};

// always return deep copy of initialState
export const getInitialState = () => {
  return getDeepCopy(initialState);
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
    case SET_VALUE:
      const { name, value, dependenciesValues } = action.payload;
      const newState = getDeepCopy(state);
      newState[name].val = value;
      for (const [key, val] of Object.entries(dependenciesValues)) {
        newState[key] = val;
      }
      return newState;
    case RESET_VALUES:
      let returnResetValues = getDeepCopy(state);
      if (action.payload.length === 0) {
        returnResetValues = getInitialState();
      } else {
        // if changed some (less then all) values
        const iState = getInitialState();
        const arrayOfNames = action.payload;
        arrayOfNames.forEach(item => {
          returnResetValues[item] = iState[item];
        });
      }
      return returnResetValues;
    default:
      return state;
  }
};
