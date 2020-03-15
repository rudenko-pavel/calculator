const config = {
  panelNumber: {
    "2": {
      // text:
      //  "Imagine a scenario where you are buying a house and indicate the characteristics of your mortgage."
    },
    "3": {
      text: "Buying a home comes with some expenses that should be expected."
    },
    "4": {
      text:
        "Closing costs are the initial charge you have to pay when you buy or sell a home."
    },
    "5": {
      text: "Buying a home comes with some expenses that should be expected."
      // text:
      //   "When buying a house, you have to think about its maintenance. It’s best to set an amount aside for maintenance related costs."
    },
    "6": {
      text:
        "The value of a property changes over time, following market trends."
    },
    "7": {
      text:
        "Imagine that you are not taking mortgage but renting instead and putting all saved money somewehere with that interest rate."
    }
  },
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
      "Indicate how much you could pay for your down payment. Usually loans with a down payment of less than 20% of property value will require additional loan-insurance.",
    prefix: "$",
    min: 2500,
    max: 50000,
    step: 10
    // todo only fo canada: popoverCheckValue: "propertyValue"
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
    title: "Amount of annual municipal taxes",
    text:
      "These amounts are determined by your municipality, according to the value of the property.",
    prefix: "$",
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
