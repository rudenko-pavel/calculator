export default (state = [], action) => {
  switch (action.type) {
    // see to `src/actions/index.js`
    case "SET_DOWN_PAYMENT":
      console.log("SET_DOWN_PAYMENT: ", action);
      return { ...state, downPayment: action.payload };
    default:
      return state;
  }
};
