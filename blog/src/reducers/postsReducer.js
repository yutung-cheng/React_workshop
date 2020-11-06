//Anytime reducer gets called, must return any value besides 'undefined'
//Can be value, string, array, {}, null

//state should be an array or list of records
//so defined as an empty array.
export default (state = [], action) => {
  //if the case match action.type
  switch (action.type) {
    case "FETCH_POSTS":
      return action.payload;
    default:
      return state;
  }

  //We can use if statement, but switch is better
  /*if (action.type === "FETCH_POSTS") {
    return action.payload;
  }

  return state;
  */
};
