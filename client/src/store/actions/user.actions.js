import axios from 'axios';

export const CREATE_USER_LOADING = '[USER APP] CREATE_USER_LOADING';
export const CREATE_USER_SUCCESS = '[USER APP] CREATE_USER_SUCCESS';
export const CREATE_USER_ERROR = '[USER APP] CREATE_USER_ERROR';

export function createUser(newUser) {
  return dispatch => {
    dispatch({ type: CREATE_USER_LOADING });
    axios
      .post('http://localhost:5033/api/v1/users/signup', newUser)
      .then(response => {
        dispatch({ type: CREATE_USER_SUCCESS, data: response });
      })
      .catch(error => {
        dispatch({
          type: CREATE_USER_ERROR,
          data: error.message
        });
      });
  };
}
