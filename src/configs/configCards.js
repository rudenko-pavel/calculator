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
    prefix: "$"
  },
  propertyValue: {
    title: "Property Value",
    text: "Indicate the value of the property you are looking to buy.",
    prefix: "$"
  },
  downPaymentValue: {
    title: "Down Payment",
    text:
      "Indicate how much you could pay for your down payment. Usually loans with a down payment of less than 20% of property value will require additional loan-insurance.",
    prefix: "$",
    percentOf: "propertyValue"
  },
  amortizationValue: {
    title: "Amortization period",
    suffix: "years"
  },
  mortgageRateValue: {
    title: "Mortgage Rate",
    suffix: "%"
  },
  amountAnnualTaxesValue: {
    title: "Amount of annual municipal taxes",
    text:
      "These amounts are determined by your municipality, according to the value of the property.",
    prefix: "$",
    percentOf: "propertyValue"
  },
  annualHeatingCostsValue: {
    title: "Annual heating costs",
    prefix: "$",
    percentOf: "propertyValue"
  },
  buyingHomeValue: {
    title: "Costs of buying a home",
    prefix: "$",
    percentOf: "propertyValue"
  },
  sellingHomeValue: {
    title: "Costs of selling a home",
    prefix: "$",
    percentOf: "propertyValue"
  },
  maintenanceValue: {
    title: "Maintenance and renovation",
    suffix: "%"
  },
  ownerInsuranceValue: {
    title: "Annual homeowner's insurance",
    suffix: "%"
  },
  rentersInsuranceValue: {
    title: "Renter's insurance",
    prefix: "$"
  },
  rentMonthlyCostsValue: {
    title: "Rent monthly heating costs",
    prefix: "$"
  },
  rateOfGrowthValue: {
    title: "Property rate of growth",
    suffix: "%"
  },
  returnInvestmentValue: {
    title: "Rate of return on investment",
    suffix: "%"
  }
};

export default config;
