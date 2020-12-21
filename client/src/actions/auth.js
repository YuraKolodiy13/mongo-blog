import {defaultActionCreator} from "./actionCreator";

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_REQUEST_SUCCESS = 'LOGIN_REQUEST_SUCCESS';
export const LOGIN_REQUEST_FAILED = 'LOGIN_REQUEST_FAILED';
export const loginRequest = defaultActionCreator(LOGIN_REQUEST, 'data');

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_REQUEST_SUCCESS = 'REGISTER_REQUEST_SUCCESS';
export const REGISTER_REQUEST_FAILED = 'REGISTER_REQUEST_FAILED';
export const registerRequest = defaultActionCreator(REGISTER_REQUEST, 'data');

export const LOGOUT_REQUEST = 'LOGOUT_REQUEST';
export const logoutRequest = defaultActionCreator(LOGOUT_REQUEST, 'data');

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_REQUEST_SUCCESS = 'GET_USER_REQUEST_SUCCESS';
export const GET_USER_REQUEST_FAILED = 'GET_USER_REQUEST_FAILED';
export const getUserRequest = defaultActionCreator(GET_USER_REQUEST, 'data');

export const GET_ALL_USERS_REQUEST = 'GET_ALL_USERS_REQUEST';
export const GET_ALL_USERS_REQUEST_SUCCESS = 'GET_ALL_USERS_REQUEST_SUCCESS';
export const GET_ALL_USERS_REQUEST_FAILED = 'GET_ALL_USERS_REQUEST_FAILED';
export const getAllUsersRequest = defaultActionCreator(GET_ALL_USERS_REQUEST, 'data');

export const FOLLOW_USER_REQUEST = 'FOLLOW_USER_REQUEST';
export const FOLLOW_USER_REQUEST_SUCCESS = 'FOLLOW_USER_REQUEST_SUCCESS';
export const FOLLOW_USER_REQUEST_FAILED = 'FOLLOW_USER_REQUEST_FAILED';
export const followUserRequest = defaultActionCreator(FOLLOW_USER_REQUEST, 'data');

export const UNFOLLOW_USER_REQUEST = 'UNFOLLOW_USER_REQUEST';
export const UNFOLLOW_USER_REQUEST_SUCCESS = 'UNFOLLOW_USER_REQUEST_SUCCESS';
export const UNFOLLOW_USER_REQUEST_FAILED = 'UNFOLLOW_USER_REQUEST_FAILED';
export const unfollowUserRequest = defaultActionCreator(UNFOLLOW_USER_REQUEST, 'data');

export const RESET_ERRORS = 'RESET_ERRORS';
export const resetErrors = defaultActionCreator(RESET_ERRORS, 'data');