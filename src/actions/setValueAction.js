/* eslint-disable no-return-assign */
import { SET_VALUE } from "./types";

export default function setValue(name, value, flag, dependencies, state) {
  const dependenciesValues = {};
  if (flag === true) {
    let receiveValue;
    const newValue = parseFloat(value);
    const reg = /^-?[0-9]*(\.[0-9]*)?$/;
    if ((!Number.isNaN(newValue) && reg.test(newValue)) || newValue === "") {
      receiveValue = parseFloat(value);
    } else {
      receiveValue = 0;
    }

    // eslint-disable-next-line no-restricted-syntax
    for (const [key, val] of Object.entries(state)) {
      if (`${key}` === name) {
        if (receiveValue < `${val.min}`) receiveValue = `${val.min}`;
        else if (receiveValue > `${val.max}`) receiveValue = `${val.max}`;
        break;
      }
    }

    // eslint-disable-next-line no-param-reassign
    value = parseFloat(receiveValue);
    if (typeof dependencies === "object") {
      dependencies.forEach(nameItem => {
        let newMin = 0;
        let newMax;
        let newVal = state[nameItem].val;
        switch (nameItem) {
          case "downPaymentValue":
            newMax = value;
            if (value < 50001) newMin = value * 0.05;
            if (value > 50001 && value < 1000001)
              newMin = 500000 * 0.05 + (value - 500000) * 0.1;
            if (value > 1000001) newMin = value * 0.2;
            break;
          case "amountAnnualTaxesValue":
          case "buyingHomeValue":
          case "annualHeatingCostsValue":
            newMax = value * 0.04;
            break;
          case "sellingHomeValue":
            newMax = value * 0.1;
            break;
          default:
            break;
        }
        if (newVal < newMin) newVal = newMin;
        if (newVal > value) newVal = value;
        dependenciesValues[nameItem] = {
          val: newVal,
          min: newMin,
          max: newMax
        };
      });
    }
  }
  return {
    type: SET_VALUE,
    payload: {
      name,
      value,
      dependenciesValues
    }
  };
}
