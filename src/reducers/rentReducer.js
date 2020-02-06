export default (state = [], action) => {
  switch (action.type) {
    // look at `src/actions/index.js`
    case "SET_RENT":
      return action.payload;
    default:
      return state;
  }
};
