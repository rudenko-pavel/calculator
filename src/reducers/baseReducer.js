import {
  SET_AMORTIZATION,
  SET_ANNUAL_TAXES,
  SET_BUYING_HOME,
  SET_DOWN_PAYMENT,
  SET_HEATING_COSTS,
  SET_INITIAL_STATE,
  SET_MAINTENANCE,
  SET_MORTGAGE_RATE,
  SET_OWNER_INSURANCE,
  SET_PROPERTY_VALUE,
  SET_RATE_OF_GROWTH,
  SET_RENT,
  SET_RENT_MONTHLY_COSTS,
  SET_RENTERS_INSURANCE,
  SET_RETURN_INVESTMENT,
  SET_SELLING_HOME
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case SET_INITIAL_STATE:
      return { ...state, initialStateValue: action.payload };
    case SET_AMORTIZATION:
      return { ...state, amortizationValue: action.payload };
    case SET_DOWN_PAYMENT:
      return { ...state, downPayment: action.payload };
    case SET_MORTGAGE_RATE:
      return { ...state, mortgageRateValue: action.payload };
    case SET_PROPERTY_VALUE:
      return { ...state, propertyValue: action.payload };
    case SET_RENT:
      return { ...state, rentValue: action.payload };
    case SET_ANNUAL_TAXES:
      return { ...state, annualTaxesValue: action.payload };
    case SET_HEATING_COSTS:
      return { ...state, heatingCostsValue: action.payload };
    case SET_BUYING_HOME:
      return { ...state, buyingHomeValue: action.payload };
    case SET_SELLING_HOME:
      return { ...state, sellingHomeValue: action.payload };
    case SET_MAINTENANCE:
      return { ...state, maintenanceValue: action.payload };
    case SET_OWNER_INSURANCE:
      return { ...state, ownerInsuranceValue: action.payload };
    case SET_RENTERS_INSURANCE:
      return { ...state, rentersInsuranceValue: action.payload };
    case SET_RENT_MONTHLY_COSTS:
      return { ...state, rentMonthlyCostsValue: action.payload };
    case SET_RATE_OF_GROWTH:
      return { ...state, rateOfGrowthValue: action.payload };
    case SET_RETURN_INVESTMENT:
      return { ...state, returnInvestmentValue: action.payload };

    default:
      return state;
  }
};
