import {LOGIN_REQUEST_SUCCESS, REGISTER_REQUEST_SUCCESS} from "../actions/auth";

const initialState = {
  login: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST_SUCCESS:
    case REGISTER_REQUEST_SUCCESS:
      return {
        login: true
      };


    default:
      return state;
  }
}
