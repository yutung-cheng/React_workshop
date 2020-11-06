import { combineReducers } from "redux";
import postsReducer from "./postsReducer";

export default combineReducers({
  //Put something inside not showing warning at the first time

  posts: postsReducer
});
