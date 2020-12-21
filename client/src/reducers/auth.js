import {
  FOLLOW_USER_REQUEST_SUCCESS,
  GET_ALL_USERS_REQUEST_SUCCESS, GET_USER_REQUEST_SUCCESS,
  LOGIN_REQUEST_SUCCESS, LOGOUT_REQUEST,
  REGISTER_REQUEST_SUCCESS, UNFOLLOW_USER_REQUEST_SUCCESS
} from "../actions/auth";

const initialState = {
  me: {},
  userId: localStorage.getItem('userId'),
  users: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
    case REGISTER_REQUEST_SUCCESS:
      return {
        ...state,
        userId: action.data.result.userId
      };
    case LOGOUT_REQUEST:
      return {
        ...state,
        userId: null
      };

    case GET_ALL_USERS_REQUEST_SUCCESS:
    case FOLLOW_USER_REQUEST_SUCCESS:
    case UNFOLLOW_USER_REQUEST_SUCCESS:
      return {
        ...state,
        users: action.data
      };

    case GET_USER_REQUEST_SUCCESS:
      return {
        ...state,
        me: action.data
      };


    default:
      return state;
  }
}
