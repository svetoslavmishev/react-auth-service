import {
  SIGNIN_USER_LOADING,
  SIGNIN_USER_SUCCESS,
  SIGNIN_USER_ERROR
} from '../actions/user.actions';

const initialState = {
  userLoading: false
};

function user(state = initialState, action) {
  switch (action.type) {
    case SIGNIN_USER_LOADING:
      return {
        userLoading: true
      };
    case SIGNIN_USER_SUCCESS:
      return {
        users: action.data,
        userLoading: false
      };
    case SIGNIN_USER_ERROR:
      return {
        userLoading: false,
        error: action.data
      };
    case LOGOUT_USER:
      return {
        initialState
      };
    default:
      return state;
  }
}

// Selectors
export const isUserLoading = state => state.userLoading;

export default user;
