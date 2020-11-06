import jsonPlaceHolder from "../api/jsonPlaceHolder";

// This is a bad approach example
// Action Creator it causes us to return a request object instead of an action

/*
export const fetchPosts = async() => {
  
  const response = await jsonPlaceHolder.get("/post");
  return {
    type: "FETCH_POSTS",
    payload: response
  };
};



correct syntax: 

export const fetchPosts = () => {                             //only one return inside, so we can remove {} and return in next line
                                                              //function can change to arrow function
  return async function(dispatch, getState){                  //we are not using getState, so remove it. then we can remove () as well

    const response = await jsonPlaceHolder.get("./posts");
    dispatch({ type: "FETCH_POSTS", payload: response });
  };
};                                                            //this line will be remove. because we remove {} and return tgt 

so the upper function will become the following function:
*/

export const fetchPosts = () => async dispatch => {
  const response = await jsonPlaceHolder.get("./posts");
  dispatch({ type: "FETCH_POSTS", payload: response });
};
