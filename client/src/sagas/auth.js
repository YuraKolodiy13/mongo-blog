import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as authActions from '../actions/auth';
import {doLoginApi, doRegisterApi, getAllUsersApi, getUserApi} from "../requests/auth";

export function* doLogin(action) {
  try {
    const response = yield call(doLoginApi, action.data);
    yield put({ type: authActions.LOGIN_REQUEST_SUCCESS, data: response });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userId', response.data.userId);
  } catch (e) {
    yield put({ type: authActions.LOGIN_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* doRegister(action) {
  try {
    const response = yield call(doRegisterApi, action.data);
    yield put({ type: authActions.REGISTER_REQUEST_SUCCESS, data: response });
    localStorage.setItem('token', response.data.token);
    localStorage.setItem('userId', response.data.userId);
  } catch (e) {
    yield put({ type: authActions.REGISTER_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* getUser(action) {
  try {
    const response = yield call(getUserApi, action.data);
    yield put({ type: authActions.GET_USER_REQUEST_SUCCESS, data: response });
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


export default all([
  takeEvery(authActions.LOGIN_REQUEST, doLogin),
  takeEvery(authActions.REGISTER_REQUEST, doRegister),
  takeEvery(authActions.GET_USER_REQUEST, getUser),
  takeEvery(authActions.GET_ALL_USERS_REQUEST, getAllUsers),
])