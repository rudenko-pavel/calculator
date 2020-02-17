import {
  RESET_VALUES,
  SAVE_DEFAULT,
  SET_AMORTIZATION,
  SET_ANNUAL_TAXES,
  SET_BUYING_HOME,
  SET_DOWN_PAYMENT,
  SET_HEATING_COSTS,
  SET_MAINTENANCE,
  SET_MORTGAGE_RATE,
  SET_OWNER_INSURANCE,
  SET_PROPERTY_VALUE,
  SET_RATE_OF_GROWTH,
  SET_RENT,
  SET_RENT_MONTHLY_COSTS,
  SET_RENTERS_INSURANCE,
  SET_RETURN_INVESTMENT,
  SET_SELLING_HOME,
  SET_VALUE
} from "./types";

export const setAmortization = value => {
  return {
    type: SET_AMORTIZATION,
    payload: value
  };
};

export const setDownPayment = value => {
  return {
    type: SET_DOWN_PAYMENT,
    payload: value
  };
};

export const setMortgageRate = value => {
  return {
    type: SET_MORTGAGE_RATE,
    payload: value
  };
};

export const setPropertyValue = value => {
  return {
    type: SET_PROPERTY_VALUE,
    payload: value
  };
};

export const setRent = value => {
  return {
    type: SET_RENT,
    payload: value
  };
};

export const setAnnualTaxes = value => {
  return {
    type: SET_ANNUAL_TAXES,
    payload: value
  };
};

export const setHeatingCosts = value => {
  return {
    type: SET_HEATING_COSTS,
    payload: value
  };
};

export const setBuyingHome = value => {
  return {
    type: SET_BUYING_HOME,
    payload: value
  };
};

export const setSellingHome = value => {
  return {
    type: SET_SELLING_HOME,
    payload: value
  };
};

export const setMaintenance = value => {
  return {
    type: SET_MAINTENANCE,
    payload: value
  };
};

export const setOwnerInsurance = value => {
  return {
    type: SET_OWNER_INSURANCE,
    payload: value
  };
};

export const setRentersInsurance = value => {
  return {
    type: SET_RENTERS_INSURANCE,
    payload: value
  };
};

export const setRentMonthlyCosts = value => {
  return {
    type: SET_RENT_MONTHLY_COSTS,
    payload: value
  };
};

export const setRateOfGrowth = value => {
  return {
    type: SET_RATE_OF_GROWTH,
    payload: value
  };
};

export const setReturnInvestment = value => {
  return {
    type: SET_RETURN_INVESTMENT,
    payload: value
  };
};

export const setValue = (value_name, value, dataSlider) => {
  // logic here
  let newValue = parseFloat(value);
  const reg = /^-?[0-9]*(\.[0-9]*)?$/;
  // eslint-disable-next-line no-restricted-globals
  if ((!isNaN(newValue) && reg.test(newValue)) || newValue === "") {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, val] of Object.entries(dataSlider)) {
      if (`${key}` === value_name) {
        if (value < `${val.min}`) newValue = `${val.min}`;
        else if (value > `${val.max}`) newValue = `${val.max}`;
      }
    }
  }
  // eslint-disable-next-line no-param-reassign
  value = parseFloat(newValue);

  return {
    type: SET_VALUE,
    payload: {
      value_name,
      value
    }
  };
};

export const resetValues = arrayOfValues => {
  return {
    type: RESET_VALUES,
    payload: arrayOfValues
  };
};

export const saveDefault = () => {
  return {
    type: SAVE_DEFAULT,
    payload: null
  };
};
