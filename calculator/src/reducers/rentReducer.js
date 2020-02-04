export default (state = 500, action) => {
  switch (action.type) {
    // look at `src/actions/index.js`
    case "IS_RENT":
      return action.payload;
    default:
      return state;
  }
};
