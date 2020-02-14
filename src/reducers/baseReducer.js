import { SET_INITIAL_STATE, SET_VALUE } from "../actions/types";

const initialState = {
  amortizationValue: 3,
  downPayment: 300,
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
  returnInvestmentValue: 3.45
};

//  You also can do initial state like that
export default (state = initialState, action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case SET_INITIAL_STATE:
      return { ...action.payload };
    case "SET_AMORTIZATION":
      return { ...state, amortizationValue: action.payload };
    case "SET_DOWN_PAYMENT":
      return { ...state, downPayment: action.payload };
    case "SET_MORTGAGE_RATE":
      return { ...state, mortgageRateValue: action.payload };
    case "SET_PROPERTY_VALUE":
      return { ...state, propertyValue: action.payload };
    case "SET_RENT":
      return { ...state, rentValue: action.payload };
    case "SET_ANNUAL_TAXES":
      return { ...state, annualTaxesValue: action.payload };
    case "SET_HEATING_COSTS":
      return { ...state, heatingCostsValue: action.payload };
    case "SET_BUYING_HOME":
      return { ...state, buyingHomeValue: action.payload };
    case "SET_SELLING_HOME":
      return { ...state, sellingHomeValue: action.payload };
    case "SET_MAINTENANCE":
      return { ...state, maintenanceValue: action.payload };
    case "SET_OWNER_INSURANCE":
      return { ...state, ownerInsuranceValue: action.payload };
    case "SET_RENTERS_INSURANCE":
      return { ...state, rentersInsuranceValue: action.payload };
    case "SET_RENT_MONTHLY_COSTS":
      return { ...state, rentMonthlyCostsValue: action.payload };
    case "SET_RATE_OF_GROWTH":
      return { ...state, rateOfGrowthValue: action.payload };
    case "SET_RETURN_INVESTMENT":
      return { ...state, returnInvestmentValue: action.payload };
    case SET_VALUE:
      return { ...state, [action.payload.value_name]: action.payload.value };

    default:
      return state;
  }
};
