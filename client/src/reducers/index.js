import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import posts from "./posts";

const createRootReducer = (history) => combineReducers({
  posts,
  router: connectRouter(history),
});

export default createRootReducer;