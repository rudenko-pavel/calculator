export default (state = [], action) => {
  switch (action.type) {
    // look at `src/actions/index.js`
    case "SET_AGE":
      console.log("SET_AGE: ", action);
      return { ...state, age: action.payload };
    default:
      return state;
  }
};
