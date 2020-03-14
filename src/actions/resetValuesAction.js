/* eslint-disable no-return-assign */
import { RESET_VALUES } from "./types";

export default function resetValues(arrayOfValues) {
  return {
    type: RESET_VALUES,
    payload: arrayOfValues
  };
}
