/* eslint-disable no-prototype-builtins */
/* eslint-disable no-case-declarations */
import {
  CHECK_VALUE,
  RESET_VALUES,
  SAVE_DEFAULT,
  SET_VALUE
} from "../actions/types";

const initialState = {
  amortizationValue: 3,
  downPaymentValue: 300,
  mortgageRateValue: 2,
  propertyValue: 1000000,
  rentValue: 1000,
  annualTaxesValue: 555,
  heatingCostsValue: 777,
  buyingHomeValue: 650,
  sellingHomeValue: 5555,
  maintenanceValue: 1,
  ownerInsuranceValue: 0.41,
  rentersInsuranceValue: 300,
  rentMonthlyCostsValue: 250,
  rateOfGrowthValue: 1.9,
  returnInvestmentValue: 3.45,
  sliderData: {
    rentValue: { min: 400, max: 3900, step: 50 },
    propertyValue: { min: 40000, max: 3900000, step: 1000 },
    downPaymentValue: { min: 240, max: 600, step: 10 },
    amortizationValue: { min: 2, max: 9, step: 1 },
    mortgageRateValue: { min: 1, max: 9, step: 0.1 },
    annualTaxesValue: { min: 0, max: 1000, step: 100 },
    heatingCostsValue: { min: 0, max: 10000, step: 100 },
    buyingHomeValue: { min: 0, max: 10000, step: 100 },
    sellingHomeValue: { min: 0, max: 24000, step: 100 },
    maintenanceValue: { min: 0, max: 5, step: 0.1 },
    ownerInsuranceValue: { min: 0, max: 2, step: 0.1 },
    rentersInsuranceValue: { min: 0, max: 1000, step: 50 },
    rentMonthlyCostsValue: { min: 0, max: 1000, step: 50 },
    rateOfGrowthValue: { min: 0, max: 5, step: 0.1 },
    returnInvestmentValue: { min: 0, max: 10, step: 0.1 }
  },
  defaultValues: {}
};

//  You also can do initial state like that
export default (state = initialState, action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case SET_VALUE:
      return { ...state, [action.payload.value_name]: action.payload.value };
    case CHECK_VALUE:
      return { ...state, [action.payload.value_name]: action.payload.value };
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
