import { RESET_VALUES, SET_VALUE } from "./types";

export const checkValue = () => {
  // we don't need it
  /* let newValue = parseFloat(value);
  const reg = /^-?[0-9]*(\.[0-9]*)?$/;
  // eslint-disable-next-line no-restricted-globals
  if ((!isNaN(newValue) && reg.test(newValue)) || newValue === "") {
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, val] of Object.entries(state)) {
      if (`${key}` === value_name) {
        if (newValue < `${val.min}`) newValue = `${val.min}`;
        else if (newValue > `${val.max}`) newValue = `${val.max}`;
      }
    }
  }
  // eslint-disable-next-line no-param-reassign
  value = parseFloat(newValue);

  return {
    type: CHECK_VALUE,
    payload: {
      value_name,
      value
    }
  }; */
};

export const setValue = (name, value) => {
  // logic from checkValue (min max check etc) put here
  return {
    type: SET_VALUE,
    payload: {
      name,
      value
    }
  };
};

export const resetValues = () => {
  return {
    type: RESET_VALUES
  };
};
