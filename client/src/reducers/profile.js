import {GET_PROFILE_POSTS_REQUEST_SUCCESS, GET_PROFILE_REQUEST_SUCCESS} from "../actions/profile";

const initialState = {
  profile: {},
  posts: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        profile: action.data
      };

    case GET_PROFILE_POSTS_REQUEST_SUCCESS:
      return {
        ...state,
        posts: action.data
      };


    default:
      return state;
  }
}
