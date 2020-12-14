import {GET_POSTS_REQUEST_SUCCESS} from "../actions/posts";

const initialState = {
  posts: []
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POSTS_REQUEST_SUCCESS:
      return {
        posts: action.data
      };


    default:
      return state;
  }
}
