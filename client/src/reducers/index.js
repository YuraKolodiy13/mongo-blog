import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import posts from "./posts";
import auth from "./auth";

const createRootReducer = (history) => combineReducers({
  auth,
  posts,
  router: connectRouter(history),
});

export default createRootReducer;