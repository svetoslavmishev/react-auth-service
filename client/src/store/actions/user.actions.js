import axios from 'axios';

export const SIGNUP_USER_LOADING = '[USER APP] SIGNUP_USER_LOADING';
export const SIGNUP_USER_SUCCESS = '[USER APP] SIGNUP_USER_SUCCESS';
export const SIGNUP_USER_ERROR = '[USER APP] SIGNUP_USER_ERROR';

export const SIGNIN_USER_LOADING = '[USER APP] SIGNIN_USER_LOADING';
export const SIGNIN_USER_SUCCESS = '[USER APP] SIGNIN_USER_SUCCESS';
export const SIGNIN_USER_ERROR = '[USER APP] SIGNIN_USER_ERROR';

export const LOGOUT_USER = '[USER APP] LOGOUT_USER';

const url = 'http://localhost:5033/api/v1/users';

export function signupUser(newUser) {
  return dispatch => {
    dispatch({ type: SIGNUP_USER_LOADING });
    axios
      .post(`${url}/signup`, newUser)
      .then(response => {
        dispatch({
          type: SIGNUP_USER_SUCCESS,
          data: Object.assign({}, { ...response.data, status: response.status })
        });
      })
      .catch(error => {
        dispatch({
          type: SIGNUP_USER_ERROR,
          data: error.message
        });
      });
  };
}

export function signinUser(userData, callback) {
  return dispatch => {
    dispatch({ type: SIGNIN_USER_LOADING });
    axios
      .post(`${url}/signin`, userData)
      .then(response => {
        dispatch({
          type: SIGNIN_USER_SUCCESS,
          data: Object.assign({}, { ...response.data, status: response.status })
        });
        callback(response.data.token);
      })
      .catch(error => {
        dispatch({
          type: SIGNIN_USER_ERROR,
          data: error.message
        });
      });
  };
}

export function logout() {
  return dispatch => {
    dispatch({ type: LOGOUT_USER });
  };
}
