export default (state = [], action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "SET_DOWN_PAYMENT":
      return action.payload;
    default:
      return state;
  }
};
