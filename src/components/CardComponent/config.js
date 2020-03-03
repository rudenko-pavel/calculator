const config = {
  rentValue: {
    title: "Rent",
    text: "Indicate the amount of your current or projected monthly rent.",
    prefix: "$",
    min: 500,
    max: 4000,
    step: 50
  },
  propertyValue: {
    title: "Property Value",
    text: "Indicate the value of the property you are looking to buy.",
    prefix: "$",
    min: 50000,
    max: 2000000,
    step: 10000,
    dependencies: [
      "downPaymentValue",
      "amountAnnualTaxesValue",
      "annualHeatingCostsValue",
      "buyingHomeValue",
      "sellingHomeValue"
    ]
  },
  downPaymentValue: {
    title: "Down Payment",
    text:
      "Indicate how much you could pay for your down payment. Loans with a down payment of less than 20% of property value will require loan-insurance with CMHC or Genworth.",
    prefix: "$",
    popover: "..........",
    min: 2500,
    max: 50000,
    step: 10
  },
  amortizationValue: {
    title: "Amortization",
    suffix: "years",
    min: 1,
    max: 25,
    step: 1
  },
  mortgageRateValue: {
    title: "Mortgage Rate",
    suffix: "%",
    min: 1,
    max: 8,
    step: 0.1
  },
  amountAnnualTaxesValue: {
    title: "Amount of annual municipal and school taxes",
    prefix: "$",
    popover: "..........",
    min: 0,
    max: 2000,
    step: 10
  },
  annualHeatingCostsValue: {
    title: "Annual heating costs",
    prefix: "$",
    min: 0,
    max: 2000,
    step: 10
  },
  buyingHomeValue: {
    title: "Costs of buying a home",
    prefix: "$",
    min: 0,
    max: 2000,
    step: 10
  },
  sellingHomeValue: {
    title: "Costs of selling a home",
    prefix: "$",
    min: 0,
    max: 5000,
    step: 10
  },
  maintenanceValue: {
    title: "Maintenance and renovation",
    suffix: "%",
    min: 0,
    max: 5,
    step: 0.1
  },
  ownerInsuranceValue: {
    title: "Annual homeowner's insurance",
    suffix: "%",
    min: 0,
    max: 2,
    step: 0.1
  },
  rentersInsuranceValue: {
    title: "Renter's insurance",
    prefix: "$",
    min: 0,
    max: 1000,
    step: 50
  },
  rentMonthlyCostsValue: {
    title: "Rent monthly heating costs",
    prefix: "$",
    min: 0,
    max: 1000,
    step: 10
  },
  rateOfGrowthValue: {
    title: "Property rate of growth",
    suffix: "%",
    min: 0,
    max: 5,
    step: 0.1
  },
  returnInvestmentValue: {
    title: "Rate of return on investment",
    suffix: "%",
    min: 0,
    max: 10,
    step: 0.1
  }
};

export default config;
