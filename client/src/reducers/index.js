import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import posts from "./posts";
import auth from "./auth";
import profile from "./profile";

const createRootReducer = (history) => combineReducers({
  auth,
  posts,
  profile,
  router: connectRouter(history),
});

export default createRootReducer;