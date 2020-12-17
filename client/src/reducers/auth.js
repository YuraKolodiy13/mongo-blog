import {
  GET_ALL_USERS_REQUEST_SUCCESS, GET_USER_REQUEST_SUCCESS,
  LOGIN_REQUEST_SUCCESS,
  REGISTER_REQUEST_SUCCESS
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
        userId: action.data.userId
      };

    case GET_ALL_USERS_REQUEST_SUCCESS:
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
