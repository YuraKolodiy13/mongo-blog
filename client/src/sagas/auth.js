import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as authActions from '../actions/auth';
import {doLoginApi, doRegisterApi, followUserApi, getAllUsersApi, getUserApi, unFollowUserApi} from "../requests/auth";

export function* doLogin(action) {
  try {
    const response = yield call(doLoginApi, action.data);
    yield put({ type: authActions.LOGIN_REQUEST_SUCCESS, data: response });
    localStorage.setItem('token', response.data.result.token);
    localStorage.setItem('userId', response.data.result.userId);
  } catch (e) {
    yield put({ type: authActions.LOGIN_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* doRegister(action) {
  try {
    const response = yield call(doRegisterApi, action.data);
    yield put({ type: authActions.REGISTER_REQUEST_SUCCESS, data: response });
    localStorage.setItem('token', response.data.result.token);
    localStorage.setItem('userId', response.data.result.userId);
  } catch (e) {
    yield put({ type: authActions.REGISTER_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* getUser(action) {
  try {
    const response = yield call(getUserApi, action.data);
    yield put({ type: authActions.GET_USER_REQUEST_SUCCESS, data: response.data });
  } catch (e) {
    yield put({ type: authActions.GET_USER_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* getAllUsers() {
  try {
    const response = yield call(getAllUsersApi);
    yield put({ type: authActions.GET_ALL_USERS_REQUEST_SUCCESS, data: response.data });
  } catch (e) {
    yield put({ type: authActions.GET_ALL_USERS_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* followUser(action) {
  try {
    const response = yield call(followUserApi, action.data);
    yield put({ type: authActions.FOLLOW_USER_REQUEST_SUCCESS, data: response.data });
  } catch (e) {
    yield put({ type: authActions.FOLLOW_USER_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* unFollowUser(action) {
  try {
    const response = yield call(unFollowUserApi, action.data);
    yield put({ type: authActions.UNFOLLOW_USER_REQUEST_SUCCESS, data: response.data });
  } catch (e) {
    yield put({ type: authActions.UNFOLLOW_USER_REQUEST_FAILED, error: e.response.data.message });
  }
}


export default all([
  takeEvery(authActions.LOGIN_REQUEST, doLogin),
  takeEvery(authActions.REGISTER_REQUEST, doRegister),
  takeEvery(authActions.GET_USER_REQUEST, getUser),
  takeEvery(authActions.GET_ALL_USERS_REQUEST, getAllUsers),
  takeEvery(authActions.FOLLOW_USER_REQUEST, followUser),
  takeEvery(authActions.UNFOLLOW_USER_REQUEST, unFollowUser),
])