export default (state = 50000, action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "SET_PROPERTY_VALUE":
      return action.payload;
    default:
      return state;
  }
};
