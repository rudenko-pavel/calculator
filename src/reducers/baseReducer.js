/* eslint-disable no-prototype-builtins */
/* eslint-disable no-case-declarations */
import {
  CHECK_VALUE,
  RESET_VALUES,
  SAVE_DEFAULT,
  SET_VALUE
} from "../actions/types";

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
  returnInvestmentValue: { val: 4, min: 0, max: 10, step: 0.1 },
  defaultValues: {}
};

//  You also can do initial state like that
export default (state = initialState, action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case SET_VALUE:
      let result = "";
      if (typeof action.payload.additional_option_name !== "string") {
        const changingVal = action.payload.value_name;
        const newState = { ...state[changingVal], val: action.payload.value };
        result = { ...state, [changingVal]: newState };
      } else {
        const changingVal = action.payload.value_name;
        const addOption = action.payload.additional_option_name;
        const newState = {
          ...state[changingVal],
          [addOption]: action.payload.value
        };
        result = { ...state, [changingVal]: newState };
      }
      return result;
    case CHECK_VALUE:
      const changingVal = action.payload.value_name;
      const newState = { ...state[changingVal], val: action.payload.value };
      return { ...state, [changingVal]: newState };
    case RESET_VALUES:
      let newUpdateProps = {};
      if (action.payload.length > 0) {
        for (let i = 0; i < action.payload.length; i += 1) {
          if (initialState.hasOwnProperty(action.payload[i])) {
            const nameProp = action.payload[i];
            newUpdateProps = {
              ...newUpdateProps,
              [nameProp]: initialState[nameProp]
            };
          }
        }
      } else {
        newUpdateProps = {
          ...initialState,
          defaultValues: state.defaultValues
        };
      }
      return { ...state, ...newUpdateProps };
    case SAVE_DEFAULT:
      return { ...state, defaultValues: state };
    default:
      return state;
  }
};
