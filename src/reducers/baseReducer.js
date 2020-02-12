export default (base = [], action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "SET_DOWN_PAYMENT":
      console.log("SET_DOWN_PAYMENT: ", action);
      return { ...base, downPayment: action.payload };
    case "SET_PROPERTY_VALUE":
      console.log("SET_PROPERTY_VALUE: ", action);
      return { ...base, propertyValue: action.payload };
    case "SET_RENT":
      console.log("SET_RENT: ", action);
      return { ...base, rentValue: action.payload };
    default:
      return base;
  }
};
