export default (state = 2500, action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "DOWN_PAYMENT":
      return action.payload;
    default:
      return state;
  }
};
