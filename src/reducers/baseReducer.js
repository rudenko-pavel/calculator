import { SET_VALUE } from "../actions/types";

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
  }
};

//  You also can do initial state like that
export default (state = initialState, action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "SET_AMORTIZATION":
      return { ...state, amortizationValue: action.payload };
    case "SET_DOWN_PAYMENT":
      return { ...state, downPaymentValue: action.payload };
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
