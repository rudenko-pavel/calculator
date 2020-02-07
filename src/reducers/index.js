import { combineReducers } from "redux";

import ageReducer from "./ageReducer";
import downPaymentReducer from "./downPaymentReducer";
import propertyValueReducer from "./propertyValueReducer";
import rentReducer from "./rentReducer";

export default combineReducers({
  rentValue: rentReducer,
  propertyValue: propertyValueReducer,
  downPayment: downPaymentReducer,
  age: ageReducer
});
