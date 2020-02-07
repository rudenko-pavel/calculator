export default (state = [], action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "SET_PROPERTY_VALUE":
      console.log("SET_PROPERTY_VALUE: ", action);
      return { ...state, propertyValue: action.payload };
    default:
      return state;
  }
};
