import { DOWN_PAYMENT, IS_RENT, PROPERTY_VALUE } from "./types";

export const getRentValue = value => {
  return {
    type: IS_RENT,
    payload: value
  };
};

export const getPropertyValue = value => {
  return {
    type: PROPERTY_VALUE,
    payload: value
  };
};

export const getDownPayment = value => {
  return {
    type: DOWN_PAYMENT,
    payload: value
  };
};
