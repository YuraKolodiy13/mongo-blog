import { all, call, put, takeEvery } from 'redux-saga/effects';

import * as authActions from '../actions/auth';
import {doLoginApi, doLogoutApi, doRegisterApi} from "../requests/auth";

export function* doLogin(action) {
  try {
    const response = yield call(doLoginApi, action.data);
    yield put({ type: authActions.LOGIN_REQUEST_SUCCESS, data: response });
  } catch (e) {
    yield put({ type: authActions.LOGIN_REQUEST_FAILED, error: e.response.data.message });
  }
}

export function* doRegister(action) {
  try {
    const response = yield call(doRegisterApi, action.data);
    yield put({ type: authActions.REGISTER_REQUEST_SUCCESS, data: response });
  } catch (e) {
    yield put({ type: authActions.REGISTER_REQUEST_FAILED, error: e.response.data.message });
  }
}


export default all([
  takeEvery(authActions.LOGIN_REQUEST, doLogin),
  takeEvery(authActions.REGISTER_REQUEST, doRegister),
])