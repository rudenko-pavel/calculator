export default (base = [], action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "SET_AMORTIZATION":
      return { ...base, amortizationValue: action.payload };
    case "SET_DOWN_PAYMENT":
      return { ...base, downPayment: action.payload };
    case "SET_MORTGAGE_RATE":
      return { ...base, mortgageRateValue: action.payload };
    case "SET_PROPERTY_VALUE":
      return { ...base, propertyValue: action.payload };
    case "SET_RENT":
      return { ...base, rentValue: action.payload };
    case "SET_ANNUAL_TAXES":
      return { ...base, annualTaxesValue: action.payload };
    case "SET_HEATING_COSTS":
      return { ...base, heatingCostsValue: action.payload };
    case "SET_BUYING_HOME":
      return { ...base, buyingHomeValue: action.payload };
    case "SET_SELLING_HOME":
      return { ...base, sellingHomeValue: action.payload };
    case "SET_MAINTENANCE":
      return { ...base, maintenanceValue: action.payload };
    case "SET_OWNER_INSURANCE":
      return { ...base, ownerInsuranceValue: action.payload };
    case "SET_RENTERS_INSURANCE":
      return { ...base, rentersInsuranceValue: action.payload };
    case "SET_RENT_MONTHLY_COSTS":
      return { ...base, rentMonthlyCostsValue: action.payload };
    case "SET_RATE_OF_GROWTH":
      return { ...base, rateOfGrowthValue: action.payload };
    case "SET_RETURN_INVESTMENT":
      return { ...base, returnInvestmentValue: action.payload };

    default:
      return {
        amortizationValue: 3,
        downPayment: 300,
        mortgageRateValue: 2,
        propertyValue: 1000000,
        rentValue: 1000,
        annualTaxesValue: 555,
        heatingCostsValue: 777,
        buyingHomeValue: 650,
        sellingHomeValue: 5432,
        maintenanceValue: 1,
        ownerInsuranceValue: 0.41,
        rentersInsuranceValue: 300,
        rentMonthlyCostsValue: 250,
        rateOfGrowthValue: 1.9,
        returnInvestmentValue: 3.45
      };
  }
};
