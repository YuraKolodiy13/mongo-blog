import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as profileActions from '../actions/profile';
import {getProfileApi, getProfilePostsApi} from "../requests/profile";

export function* getProfile(action) {
  try {
    const response = yield call(getProfileApi, action.data);
    yield put({ type: profileActions.GET_PROFILE_REQUEST_SUCCESS, data: response.data });
    yield put({ type: profileActions.GET_PROFILE_POSTS_REQUEST, data: action.data });
  } catch (e) {
    yield put({ type: profileActions.GET_PROFILE_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* getProfilePosts(action) {
  try {
    const response = yield call(getProfilePostsApi, action.data);
    yield put({ type: profileActions.GET_PROFILE_POSTS_REQUEST_SUCCESS, data: response.data });
  } catch (e) {
    yield put({ type: profileActions.GET_PROFILE_POSTS_REQUEST_FAILED, error: e.response.data.message });
  }
}

export default all([
  takeEvery(profileActions.GET_PROFILE_REQUEST, getProfile),
  takeEvery(profileActions.GET_PROFILE_POSTS_REQUEST, getProfilePosts),
])