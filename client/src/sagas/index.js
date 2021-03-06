import { all } from 'redux-saga/effects';
import posts from "./posts";
import auth from "./auth";
import profile from "./profile";

export default function* rootSaga() {
  yield all([
    posts,
    auth,
    profile
  ])
}