import _ from "lodash";
import jsonPlaceHolder from "../api/jsonPlaceHolder";

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
  await dispatch(fetchPosts()); //await -> make sure when we dispatch that action creator and it's inner function,
  //                                       eventially gets called the awake key word,
  //                                       it is essentially make sure that we wait for the API request to complete before we moved on.
  //
  // const userIds = _.uniq(_.map(getState().posts, "userId"));
  // console.log(userIds);
  // userIds.forEach(id => dispatch(fetchUser(id))); //dispatch each user

  //with lodash chain function.
  _.chain(getState().posts)
    .map("userId")
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

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

  dispatch({ type: "FETCH_POSTS", payload: response.data });
};

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};

/*********************** FETCH_USER **************************************** */

/*  This method will dispatch everytime when the user Id is the same

export const fetchUser = id => async dispatch => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER", payload: response.data });
};
*/

/********************************************************************* */

// How we fix it:

// 1. Lodsh method
//   (1). lodash _.memoize
//   (2). npm install --save lodash
//   (3). import _ from 'lodash'
/*   (4).
export const fetchUser = id => dispatch => _fetchUser(id, dispatch);
const _fetchUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceHolder.get(`/users/${id}`);

  dispatch({ type: "FETCH_USER" , payload: response.data });
})
*/

/********************************************************************* */

// 2. Fetch Posts and Users Creators
//   (1). Call 'fetchPosts'
//   (2). Get list of Posts
//   (3). Find all unique's userId from list of posts
//   (4). Iterate over unique userId's
//   (5). Call 'fetchUser' with each userId
