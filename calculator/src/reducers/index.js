import { combineReducers } from "redux";

import downPaymentReducer from "./downPaymentReducer";
import propertyValueReducer from "./propertyValueReducer";
import rentReducer from "./rentReducer";

export default combineReducers({
  rentValue: rentReducer,
  propertyValue: propertyValueReducer,
  downPayment: downPaymentReducer
});
