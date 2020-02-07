export default (state = [], action) => {
  switch (action.type) {
    // look at `src/actions/index.js`
    case "SET_RENT":
      console.log("SET_RENT: ", action);
      return { ...state, rentValue: action.payload };
    default:
      return state;
  }
};
