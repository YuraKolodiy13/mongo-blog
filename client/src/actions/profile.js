import {defaultActionCreator} from "./actionCreator";

export const GET_PROFILE_REQUEST = 'GET_PROFILE_REQUEST';
export const GET_PROFILE_REQUEST_SUCCESS = 'GET_PROFILE_REQUEST_SUCCESS';
export const GET_PROFILE_REQUEST_FAILED = 'GET_PROFILE_REQUEST_FAILED';
export const getProfileRequest = defaultActionCreator(GET_PROFILE_REQUEST, 'data');

export const GET_PROFILE_POSTS_REQUEST = 'GET_PROFILE_POSTS_REQUEST';
export const GET_PROFILE_POSTS_REQUEST_SUCCESS = 'GET_PROFILE_POSTS_REQUEST_SUCCESS';
export const GET_PROFILE_POSTS_REQUEST_FAILED = 'GET_PROFILE_POSTS_REQUEST_FAILED';
export const getProfilePostsRequest = defaultActionCreator(GET_PROFILE_POSTS_REQUEST, 'data');