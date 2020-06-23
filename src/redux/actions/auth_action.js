import { AUTH_ERROR, AUTH_REQUEST, AUTH_SUCCSESS, LOGOUT_USER } from '../actionTypes';
import { API, setAuthToken } from '../../config/axiosConfig';
import { openModalLogin } from '../actions/modal_actions';
import { clearUserData } from '../actions/account_action';

export function authAction(input) {
  return function (dispatch) {
    const token = localStorage.token;
    setAuthToken(token);
    dispatch({
      type: AUTH_REQUEST,
      payload: true,
    });
    if (token) {
      API.get('/auth')
        .then((response) =>
          dispatch({
            type: AUTH_SUCCSESS,
            payload: response.data.data,
          }),
        )
        .catch((error) =>
          dispatch({
            type: AUTH_ERROR,
            payload: error.response,
          }),
        );
    } else {
      dispatch({
        type: AUTH_SUCCSESS,
        payload: false,
      });
      dispatch(openModalLogin());
    }
  };
}
export function logoutUser() {
  return function (dispatch) {
    {
      dispatch({ type: LOGOUT_USER });
      dispatch(clearUserData());
    }
  };
}
