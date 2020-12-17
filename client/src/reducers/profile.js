import {GET_PROFILE_REQUEST_SUCCESS} from "../actions/profile";

const initialState = {
  profile: {},
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_PROFILE_REQUEST_SUCCESS:
      return {
        ...state,
        profile: action.data
      };


    default:
      return state;
  }
}
