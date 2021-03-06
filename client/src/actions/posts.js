import {defaultActionCreator} from "./actionCreator";

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_REQUEST_SUCCESS = 'ADD_POST_REQUEST_SUCCESS';
export const ADD_POST_REQUEST_FAILED = 'ADD_POST_REQUEST_FAILED';
export const addPostRequest = defaultActionCreator(ADD_POST_REQUEST, 'data');

export const GET_POSTS_REQUEST = 'GET_POSTS_REQUEST';
export const GET_POSTS_REQUEST_SUCCESS = 'GET_POSTS_REQUEST_SUCCESS';
export const GET_POSTS_REQUEST_FAILED = 'GET_POSTS_REQUEST_FAILED';
export const getPostsRequest = defaultActionCreator(GET_POSTS_REQUEST, 'data');