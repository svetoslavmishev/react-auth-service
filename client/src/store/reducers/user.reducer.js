import {
  CREATE_USER_LOADING,
  CREATE_USER_SUCCESS,
  CREATE_USER_ERROR
} from '../actions/user.actions';

const initialState = {
  userLoading: false
};

function user(state = initialState, action) {
  switch (action.type) {
    case CREATE_USER_LOADING:
      return {
        userLoading: true
      };
    case CREATE_USER_SUCCESS:
      return {
        users: action.data,
        userLoading: false
      };
    case CREATE_USER_ERROR:
      return {
        userLoading: false,
        error: action.data
      };
    default:
      return state;
  }
}

// Selectors
export const isUserLoading = state => state.userLoading;

export default user;
