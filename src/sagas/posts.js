import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as postsActions from '../actions/posts';
import {addPostApi, getPostsApi} from "../requests/posts";

export function* addPost(action) {
  try {
    const response = yield call(addPostApi, action.data);
    yield put({ type: postsActions.ADD_POST_REQUEST_SUCCESS, data: response.data });
  }catch (e) {
    yield put({ type: postsActions.ADD_POST_REQUEST_FAILED, data: e.response })
  }
}

export function* getPosts() {
  try {
    console.log(4423)
    const response = yield call(getPostsApi);
    yield put({ type: postsActions.GET_POSTS_REQUEST_SUCCESS, data: response.data });
  }catch (e) {
    yield put({ type: postsActions.GET_POSTS_REQUEST_FAILED, data: e.response })
  }
}

export default all([
  takeEvery(postsActions.ADD_POST_REQUEST, addPost),
  takeEvery(postsActions.GET_POSTS_REQUEST, getPosts),
])