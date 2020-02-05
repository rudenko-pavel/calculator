import { SET_DOWN_PAYMENT, SET_PROPERTY_VALUE, SET_RENT } from "./types";

export const setRent = value => {
  return {
    type: SET_RENT,
    payload: value
  };
};

export const setPropertyValue = value => {
  return {
    type: SET_PROPERTY_VALUE,
    payload: value
  };
};

export const setDownPayment = value => {
  return {
    type: SET_DOWN_PAYMENT,
    payload: value
  };
};
