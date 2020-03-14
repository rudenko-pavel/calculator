/* eslint-disable no-return-assign */
import { getInitialState } from "../reducers/baseReducer";
import { SET_VALUE } from "./types";

const DOWN_PAYMENT_PERCENT_VALUES = { c1: 0.05, c2: 0.1, c3: 0.2 };
const DOWN_PAYMENT_CONDITIONS = { c1: 500000, c2: 1000000 };
const AMOUNT_ANNUAL_TAXES_PERCENT_VALUES = { min: 0, max: 0.04 };
const SELLING_HOME_PERCENT_VALUES = { min: 0, max: 0.04 };

/*
name - имя переменной в state
value - новое значение
flag - флаг (неожиданно)). 
    навешивается на событие onBlur и на Slider (flag=true).
    Т.е. пока происходят изменения в Input (без потери фокуса) - 
    обработка зависимых значений не присходит

dependencies - зависмые значения
    Правила следующие:
      propertyValue                                   = value
      Значения полей должны быть в диапазоне:
        - downPaymentValue
              value <= 500 K                          =  5%*value ... value
              500K < value <= 1M                      =  500K * 5% + (value - 500K) * 10%;
              value > 1M                              =  20%*value ... value

        - amountAnnualTaxesValue                      =  0 ... 4%*value
          annualHeatingCostsValue
          buyingHomeValue
          
        - sellingHomeValue                            =  0 ... 10%*value

        Если значения этих полей выходятза пределы диапазона - значения должны 
        приравниваться одному из граничных значений

*/

export default function setValue(name, value, flag, dependencies) {
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
    for (const [key, val] of Object.entries(getInitialState())) {
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
        let newVal = getInitialState()[nameItem].val;
        switch (nameItem) {
          case "downPaymentValue":
            newMax = value;
            if (value <= DOWN_PAYMENT_CONDITIONS.c1)
              newMin = value * DOWN_PAYMENT_PERCENT_VALUES.c1;
            if (
              value > DOWN_PAYMENT_CONDITIONS.c1 &&
              value <= DOWN_PAYMENT_CONDITIONS.c2
            )
              newMin =
                DOWN_PAYMENT_CONDITIONS.c1 * DOWN_PAYMENT_PERCENT_VALUES.c1 +
                (value - DOWN_PAYMENT_CONDITIONS.c1) *
                  DOWN_PAYMENT_PERCENT_VALUES.c2;
            if (value > DOWN_PAYMENT_CONDITIONS.c2)
              newMin = value * DOWN_PAYMENT_PERCENT_VALUES.c3;
            break;
          case "amountAnnualTaxesValue":
          case "buyingHomeValue":
          case "annualHeatingCostsValue":
            newMax = value * AMOUNT_ANNUAL_TAXES_PERCENT_VALUES.max;
            break;
          case "sellingHomeValue":
            newMax = value * SELLING_HOME_PERCENT_VALUES;
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
